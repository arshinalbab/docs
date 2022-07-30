---
title: SnoopForm
description: "SnoopForm Component"
hide_table_of_contents: true
---

# Introduction

The `<snoopForm/>` tag is the wrapper for your form managing the whole form state and what happens to your submission.

# Example

```jsx
import { SnoopForm } from "@snoopforms/react";
import "@snoopforms/react/dist/styles.css";

export default function App() {
  return (
    <SnoopForm domain="app.snoopforms.com" formId="aSDD8INJ">
      /* Rest of your form */
    </SnoopForm>
  );
}
```

# Props & Attributes

| Prop      | Type                           | Required | Default              | Description                                                                                                                                           |
| --------- | ------------------------------ | -------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| domain    | string                         | `no`     | "app.snoopforms.com" | Domain-name of your snoopHub installation you want to send your submissions to. For our cloud version of snoopHub this is always `app.snoopforms.com` |
| formId    | string                         | `no`     | ""                   | Your formId in snoopHub.                                                                                                                              |
| protocol  | "https" \| "http"              | `no`     | "https"              | Protocol to reach your snoopHub installation                                                                                                          |
| localOnly | boolean                        | `no`     | false                | If you want to disable to connection to snoopHub completly and want to manage submissions yourself, set this to `true`.                               |
| className | string                         | `no`     | ""                   | Give your own CSS classes to the snoopForm component. This overwrites existing default.styles.                                                        |
| onSubmit  | ({submission, schema}) => void | `no`     | () => {}             | Is fired when a user finishes the whole form. Let's you handle the submission and form schema in addition to sending it to snoopHub.                  |
