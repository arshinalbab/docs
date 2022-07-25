---
title: Pagination
description: "Single page and multi-page forms."
hide_table_of_contents: true
---

snoopReact makes it very easy to build Typeform-style forms (one question per page) as well as longer, more complex forms on one page.

To add a new page to your form, simply import `snoopPage` from the library and wrap the question into a `<snoopPage>` tag, like so:

### Importing

```jsx
import { SnoopForm, SnoopElement, SnoopPage } from "@snoopforms/react";
```

### Adding pages

Make sure to give each of the pages a unique name:

```jsx
      <SnoopPage name="first">
        <SnoopElement>
      </SnoopPage>

      <SnoopPage name="second">
        <SnoopElement>
      </SnoopPage>
```

### Full example

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
