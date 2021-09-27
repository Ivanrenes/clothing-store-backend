
# Clothing Store API V1.0

An API for a Clothing Store Purpose built with NestJs and its infrastructure with Docker




![Logo](https://i.ytimg.com/vi/jYFyLLqvHy8/maxresdefault.jpg)


## Requirements
To run the project you should have installed:

- Docker
- Docker-Compose
  
## Deployment Dev Environment

To deploy dev enviroment follow these steps:

Go to root folder:
```bash
  $ cd clothing-store-app
```

*If you want to change the environment variables you can approach that in .envs/.local/*


Make up the containers and run:
```bash
  $ docker-compose -f docker-compose.dev.yml up -d
```

When it is ready you can go to:
```bash
  http://localhost:3000/api/v1
```
Done

## Deployment Prod Environment

To deploy prod enviroment follow these steps:

Go to root folder:
```bash
  $ cd clothing-store-app
```

*Important! CHANGE prod environments in .envs/.production/*

Export these variables in the server:
```bash
  $ export APP_HOST=your_domain
```

Make up the containers and run:
```bash
  $ docker-compose -f docker-compose.dev.yml up -d
```

When it is ready you can go to:
```bash
  http://NESTJS_HOST:8080/api/v1
```
Done


## Enable SSL
*Is mandatory had made deployment for this step*

To enable ssl follow these steps:


Export these variables in the server:
```bash
  $ export ACME_EMAIL=your_email
```

Run:
```bash
  $ docker-compose -f your_docker_file -f docker-compose.https.yml up -d
```

## API Reference
#### API Versioning Prefix

- 'api/v1'

#### API Documentation

All the resources availables are in:
```http
  GET /api/v1/
```

## PostgreSQL Backups with Docker

### Creating a Backup
To create a backup, run:
```bash
$ docker-compose -f local.yml exec postgres backup
```

Then you will see:

```bash
Backing up the 'clothingstoredb' database...
SUCCESS: 'clothingstoredb' database backup 'backup_2018_03_13T09_05_07.sql.gz' has been created and placed in '/backups'.
```

#### Keep in mind that /backups is the postgres container directory.

### Viewing the Existing Backups

To list existing backups

```bash
$ docker-compose -f local.yml exec postgres backups
```

### Copying Backups Locally
If you want to copy backups from your postgres container locally, docker cp command will help you on that.

For example, given 9c5c3f055843 is the container ID copying all the backups over to a local directory is as simple as

```bash
$ docker cp 9c5c3f055843:/backups ./backups
```

### Restoring from the Existing Backup
To restore from one of the backups you have already got (take the backup_2018_03_13T09_05_07.sql.gz for example),

```bash
$ docker-compose -f local.yml exec postgres restore backup_2018_03_13T09_05_07.sql.gz
```

