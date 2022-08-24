---
title: Deployment
description: "Deploy snoopForms to the cloud."
hide_table_of_contents: true
---

The easiest way to deploy snoopForms on your server is Docker.

### Requirements

To use this manual, you have to have Docker and docker-compose running on your system.

### 1. Clone the repository

```
git clone https://github.com/snoopForms/snoopforms.git && cd snoopforms
```

### 2. Create .env file

Create a `.env` file based on `.env.example` and change it according to your setup.

```
cp .env.example .env && nano .env
```

| Required Variables | Description                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| NEXTAUTH_SECRET    | Set this to a unique string that you don't share with others                                                  |
| NEXTAUTH_URL       | Set this to the address your users use to reach your instance of snoopforms, e.g. `https://forms.example.com` |
| DATABASE_URL       | The full database URL where snoopForms can reach your PostgreSQL instance & database                          |

### 3. Run Docker

Start the docker-compose process to build and spin up the snoopForms container as well as the postgres database.

```
docker-compose up -d
```

You app should be up and running now wherever you deployed it. When you open up snoopForms in the browser you will be automatically redirected to the login. To use your installation of snoopForms, create a new account.

### Doesn't work? 🙃

If you have questions or struggle setting up your instance locally [just join our Discord](https://discord.gg/8rwDbyy2Me) or [create a new issue on Github](https://github.com/snoopForms/snoopforms-react) - we are happy to help 🤍
