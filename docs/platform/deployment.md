---
title: Deployment
description: "Deploy your snoopPlatform to the cloud."
hide_table_of_contents: true
---

The easiest way to deploy snoopPlatform on your own server is using Docker.

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

### 3. Run Docker

Start the docker-compose process to build and spin up the snoopPlatform container as well as the postgres database.

```
docker-compose up -d
```

You app should be up and running now wherever you deployed it.

### Doesn't work? 🙃

If you have questions or struggle setting up your instance locally [just join our Discord](https://discord.gg/8rwDbyy2Me) or [send a DM](https://twitter.com/snoopforms) - we are happy to help 🤍
