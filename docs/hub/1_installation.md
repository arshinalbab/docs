---
title: Getting started
description: "Getting the snoopPlatform up and running on localhost"
hide_table_of_contents: true
---

Getting the snoopForms React Library up and running on localhost is quick and easy:

> :warning: **Note**: This repository is still in an early stage of development. We love the open source community and want to show what we are working on early. We will update this docs with more information once it is safe to use. Until then, feel free to share your thoughts, contact us, and contribute if you'd like.

## Run it locally

To get the project running locally on your machine you need to have the following development tools installed:

- Node.JS (we recommend v16)
- Yarn
- PostgreSQL

### 1. Clone the project:

Got it? Great, let's clone the Github repository:

```
git clone https://github.com/snoopForms/snoopforms.git && cd snoopforms
```

### 2. Install Node.JS packages:

```
yarn install
```

### 3. Creating an .env file

Create a `.env` file based on `.env.example` and change it according to your setup. Make sure the `DATABASE_URL` variable is set correctly according to your local database.

```
cp .env.example .env
```

| Required Variables | Description                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| NEXTAUTH_SECRET    | Set this to a unique string that you don't share with others                                                  |
| NEXTAUTH_URL       | Set this to the address your users use to reach your instance of snoopforms, e.g. `https://forms.example.com` |
| DATABASE_URL       | The full database URL where snoopForms can reach your PostgreSQL instance & database                          |

### 4. Start PostgreSQL

Make sure the PostgreSQL server is running on your system. Depending on your operating system and PostgreSQL installation method, you may check this differently, but you will need a running database instance for the next step.
A quick and dirty instance can be spun up via:

```
docker run --name snoopformsDB -p 5432:5432 -e POSTGRES_USER=snoopforms -e POSTGRES_PASSWORD=password -e POSTGRES_DB=snoopforms -d postgres
```

(If you already have a PostgreSQL database running, but want to use this one for testing, you can also change port 5432 to another free port on your system)

### 5. Setup database with Prisma

Then let prisma set up the database for you:

```
npx prisma db push
```

### 6. Start the development server

Finally, start the your local development server using yarn:

```
yarn dev
```

You can now access the app on [https://localhost:3000](https://localhost:3000). You will be automatically redirected to the login. To use your local installation of snoopForms, create a new account.

### Doesn't work? 🙃

If you have questions or struggle setting up your instance locally [just join our Discord](https://discord.gg/8rwDbyy2Me) or [send a DM](https://twitter.com/snoopforms) - we are happy to help 🤍
