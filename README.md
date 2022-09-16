# Users CRUD Backend

This is a backend API project for users management

## Technologies used

1. Node
2. Express
3. PostegreSQL
4. REST

## Project Setup

### Create PostgreSQL database 

You can find the database model in /database/database.sql file

### Environment variables

To be able to run de application you have to set up the following environment variables

* DB_HOST
* DB_DATABASE
* DB_PORT
* DB_USER
* DB_PASSWORD

### Install Project

```sh
npm install
```

### Hot-Reload for Development

```sh
npm run dev
```

### Start project 

```sh
npm run start
```

## Usage

* You can POST to /api/users with form data name, birth and document to create a new user.
* You can make a GET request to /api/users to get a list of all users.
* You can PATCH to /api/users/:id with form data name, birth and document to update a user info.
* You can DELETE to /api/users/:id to delete a user.
