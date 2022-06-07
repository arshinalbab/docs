---
title: Example
description: "Example React Page"
hide_table_of_contents: true
---

# Example

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
        // do something with the data additional to sending to SnoopForms
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
