---
title: Introduction
description: "How snoopReact works"
hide_table_of_contents: true
---

# Introduction

snoopReact’s inputs work like HTML inputs - with lots of useful form features backed in. Much like how HTML’s `<input>` tag works with types (i.e., `type="text"` or `type="checkbox"`), the `<snoopForm>` tag does the same. Instead of having to deal with `<textarea>` or `<select>`, all types of input you expect from a form tool are covered with the `<snoopElement>` tag - no matter how complex they seem to be. This approach makes building and maintaining forms easy, fast and reliable.

> This approach to form building is inspired by **FromKit's innovative framework** for building forms. [Read an introduction to it here,](https://dev.to/justinschroeder/introducing-formkit-a-vue-3-form-building-framework-53ji) it's definitely worth your time 🤓

## All essential functionality built-in

Much like Tailwind makes CSS available in your HTML code, snoopForm allows you to handle all essential form functionality by writing HTML as well.

The `<snoopForm/>` tag is the wrapper for your form managing the whole form state and what happens to your submission.

Within that you can create one or multiple `<snoopPage/>` which enables you to build multi-page forms. SnoopForms makes sure, that your users only see the form elements of the page they are currently on.

All form elements are added using the `<SnoopElement/>` component. In these simple components you can also add labels, help texts, handle errors, add styling - everything just one line of code away.

## Example

```jsx
import { SnoopForm, SnoopPage, SnoopElement } from "@snoopforms/react";
import "@snoopforms/react/dist/styles.css";

export default function App() {
  return (
    <div style={{ padding: "3rem" }}>
      <SnoopForm domain="app.snoopforms.com" formId="aSDD8INJ">
        <SnoopPage name="basicInfo">
          <SnoopElement type="text" name="name" label="Your name" required />
          <SnoopElement
            type="textarea"
            name="about"
            label="About you"
            required
          />
          <SnoopElement name="submit" type="submit" label="Submit" />
        </SnoopPage>
        <SnoopPage name="advancedInfo">
          <SnoopElement
            type="checkbox"
            name="programming-lanuguages"
            label="What programming languages do you love?"
            options={["C++", "Javascript", "Scala", "Assembler"]}
          />
          <SnoopElement name="submit" type="submit" label="Submit" />
        </SnoopPage>
        <SnoopPage name="thankyou" thankyou>
          <p>Thanks a lot for your time and insights 🙏</p>
        </SnoopPage>
      </SnoopForm>
    </div>
  );
}
```

More on how to build forms on the next page.
