---
title: Introduction
description: "SnoopElement Introduction"
hide_table_of_contents: true
---

# Introduction

All form elements are added using the `<SnoopElement/>` component. Via a type attribute you choose if you want a simple text-input or for example a more complex multiple-choice checkbox component. In these simple components you can also add labels, help texts, handle errors, add styling - everything just one line of code away.

# Example

```jsx
import { SnoopForm, SnoopPage } from "@snoopforms/react";
import "@snoopforms/react/dist/styles.css";

export default function App() {
  return (
    <SnoopForm domain="app.snoopforms.com" formId="aSDD8INJ">
      <SnoopPage name="firstPage">/* Your form elements go here */</SnoopPage>
      <SnoopPage name="thankyouPage" thankyou>
        <SnoopElement type="text" name="name" label="Your name" required />
        <SnoopElement type="textarea" name="about" label="About you" required />
        /* Add more elements here if you need */
      </SnoopPage>
    </SnoopForm>
  );
}
```

# Props & Attributes

| Prop        | Type                 | Required | Default | Description                                                                                                                    |
| ----------- | -------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| type        | string               | `yes`    | ""      | SnoopForm Input-Type, e.g. `text` or `radio`. See the next pages for details on all available input types in snoopForms.       |
| name        | string               | `yes`    | ""      | Name of your element for data handling. The user input gets saved under this key. Every element name in a page must be unique. |
| label       | string               | `no`     | ""      | The label / question of the element the user sees above the input field.                                                       |
| className   | string               | `no`     | ""      | Give your own CSS classes to the snoopPage component. This overwrites existing default styles.                                 |
| required    | boolean              | `no`     | false   | (currently not supported in `radio` and `checkbox`) Sets if the input / question is required to be filled out by the user      |
| icon        | ReactNode            | `no`     | ""      | (not supported by all elements) Adds an icon to the left side of the input field                                               |
| placeholder | string               | `no`     | ""      | (not supported by all elements) Sets the placeholder-text inside the input field                                               |
| options     | string[] \| Option[] | `no`     | ""      | (only `radio` and `checkbox`) Sets the list of options/choices available to the user                                           |
| rows        | number               | `no`     | 2       | (only `textarea`) sets the number of rows / height of the textarea SnoopElement                                                |
