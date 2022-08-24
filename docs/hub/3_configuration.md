---
title: Configuration
description: "Configuration options for snoopHub"
hide_table_of_contents: true
---

## SMTP Setup

You can setup SMTP to send signup verification emails or password-reset emails. For that you need to set the following environment variables:

```
MAIL_FROM=noreply@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=smtpUser
SMTP_PASSWORD=smtpPassword
```

If you use port 465 you also need to set

```
SMTP_SECURE_ENABLED=1
```

## Email Verification

To disable email verification and let your users signin directly after they created an account, you can disable email verification by setting the corresponding environment variable:

```
EMAIL_VERIFICATION_DISABLED=1
```

Note: You need to setup SMTP to have email verification working.

## Password reset

To disable the password reset functionality, you can disable it by setting the corresponding environment variable:

```
PASSWORD_RESET_DISABLED=1
```

Note: You need to setup SMTP to have password reset functionality working.

## Telemetry

We use this telemetry service to better understand how snoopForms is being used and how we can improve it. All data including the IP address is collected anonymously and we cannot trace anything back to you or your customers. You help us a lot by leaving telemetry activated. But if you still want to disable it, set this environment variable:

```
TELEMETRY_DISABLED=1
```
