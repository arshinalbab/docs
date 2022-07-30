---
title: SnoopPage
description: "SnoopPage Component"
hide_table_of_contents: true
---

# Introduction

`<snoopPage/>` let's you create multi-page forms with ease. State-management is handled in the background automatically. In addition the snoopForms React Library sends partial submissions to the snoopHub every time a user fills out a page.

# Example

```jsx
import { SnoopForm, SnoopPage } from "@snoopforms/react";
import "@snoopforms/react/dist/styles.css";

export default function App() {
  return (
    <SnoopForm domain="app.snoopforms.com" formId="aSDD8INJ">
      <SnoopPage name="firstPage">/* Your form elements go here */</SnoopPage>
      <SnoopPage name="thankyouPage" thankyou>
        /* Your form elements go here */
      </SnoopPage>
    </SnoopForm>
  );
}
```

# Props & Attributes

| Prop      | Type    | Required | Default | Description                                                                                                                            |
| --------- | ------- | -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| name      | string  | `yes`    | ""      | Name of your page for data handling. Every page name in a form must be unique.                                                         |
| thankyou  | boolean | `no`     | false   | If you finish your form with a thank you page without inputs set this flag to tell snoopForm that the form is finished and can be sent |
| className | string  | `no`     | ""      | Give your own CSS classes to the snoopPage component. This overwrites existing default styles.                                         |
