---
title: Deployment
description: "Deploy your snoopHub to the cloud."
hide_table_of_contents: true
---

The easiest way to deploy snoopHub on your server is Docker.

### Requirements

To use this manual, you have to have Docker and docker-compose running on your system.

### 1. Clone the repository

```
git clone https://github.com/snoopForms/snoopforms.git && cd snoopforms
```

### 2. Create .env file

Create a `.env` file based on `.env.example` and change it according to your setup. The SMTP-credentials are essential for verification emails to work during user signup.

```
cp .env.example .env && nano .env
```

### 3. Run Docker

Start the docker-compose process to build and spin up the snoopHub container as well as the postgres database.

```
docker-compose up -d
```

You app should be up and running now wherever you deployed it. When you open up snoopHub in the browser you will be automatically redirected to the login. To use your installation of snoopHub, create a new account.

### Doesn't work? 🙃

If you have questions or struggle setting up your instance locally [just join our Discord](https://discord.gg/8rwDbyy2Me) or [create a new issue on Github](https://github.com/snoopForms/snoopforms-react) - we are happy to help 🤍
