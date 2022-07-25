---
title: Introduction
description: "How snoopReact works"
hide_table_of_contents: true
---

# Introduction

snoopReact’s inputs work like HTML inputs - with lots of useful form features backed in. Much like how HTML’s `<input>` tag works with types (i.e., `type="text"` or `type="checkbox"`), the `<snoopForm>` tag does the same. Instead of having to deal with `<textarea>` or `<select>`, all types of input you expect from a form tool are covered with the `<snoopForm>` tag. This approach makes building and maintaining forms easy, fast and reliable.

> This approach to form building is inspired by **FromKit's innovative framework** for building forms. [Read an introduction to it here,](https://dev.to/justinschroeder/introducing-formkit-a-vue-3-form-building-framework-53ji) it's definitely worth your time 🤓

## All essential functionality built-in

Much like Tailwind makes CSS available in your HTML code, snoopForm allows you to handle all essential form functionality by writing HTML as well.

Within the `<snoopForm>` tag you can manage all essential form functionality. Add labels, help texts, handle errors, add styling, add pages - everything just one line of code away.

## Example

```jsx
import React from "react";
import { SnoopForm, SnoopElement, SnoopPage } from "@snoopforms/react";

export default function Example({}) {
  return (
    <SnoopForm
      domain="localhost:3000"
      protocol="http"
      className="w-full space-y-6"
      onSubmit={({ submission, schema }) => {
        // do something with the data additional to sending to snoopForms
      }}
    >
      <SnoopPage name="first">
        <SnoopElement
          type="text"
          name={"name"}
          label="Your name"
          classNames={{
            label: "your-label-class",
            element: "your-input-class",
          }}
          required
        />
      </SnoopPage>
      <SnoopPage name="second">
        <SnoopElement
          type="radio"
          name={"importance"}
          label="What's your favorite food?"
          classNames={{
            label: "your-label-class",
            radioGroup: "your-radio-group-class",
            radioOption: "your-radio-option-class",
          }}
          options={["Pizza", "Pasta", "Sushi"]}
        />
        <SnoopElement
          type="submit"
          label="Submit"
          classNames={{
            button: "your-submit-button-class",
          }}
        />
      </SnoopPage>
      <SnoopPage thankyou>
        <h1>Thank you!</h1>
      </SnoopPage>
    </SnoopForm>
  );
}
```

More on how to build forms on the next page.
