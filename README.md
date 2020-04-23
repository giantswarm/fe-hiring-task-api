# **Giant Swarm Front-End Engineer Hiring Task API**

This repository includes the Web API that you'll use in your hiring task.

## Setup

1. First of all, you must have [yarn](https://yarnpkg.com/) installed. If you don't, you can simply install it by running the following command in your terminal:
    ```bash
    $ npm install -g yarn
    ```

2. Clone this repo
    ```bash
    $ git clone https://github.com/giantswarm/fe-hiring-task-api.git
    ```

3. Navigate to your freshly cloned repo
    ```bash
    $ cd fe-hiring-task-api
    ```

4. Install all dependencies
    ```bash
    $ yarn install
    ```
   
5. Start the testing server
   ```bash
   $ yarn start
   ```
   
6. Your server should be running on your machine. Go to `http://localhost:3000` in your browser to check if everything's working correctly.
   
## Server responses

Once your server is running, you can access the following endpoints:

| Path           | Response type   | Description                                       |
| -------------- | --------------- | ------------------------------------------------- |
| `/`            | [Hello](#hello) | Used for testing                                  |
| `/apps`        | [App[]](#app)   | Provides a list of all the apps in the catalog    |
| `/apps/:id`    | [App](#app)     | Provides the app which has the given id           |

Also, all endpoints can return the [HttpException](#httpexception) type.

## Data types

#### Hello

| Name  | Type     | Description |
| ----- | -------- | ----------- |
| hello | `string` | 👋          |

#### App

| Name | Type | Description |
| ---- | ---- | ----------- |
| id | `string` | The app's unique ID |
| name | `string` | The app's name |
| description | `string` | The app's description |
| version | `string` | The app's current version |
| iconURL | `string?` | A link to the app icon |
| url | `string?` | The app's website |
| readmeURL | `string?` | A link to the app's latest version readme |
| author | `string?` | The app's author |

#### HttpException

| Name | Type | Description |
| ---- | ---- | ----------- |
| statusCode | `number` | The response status code |
| message | `string` | The error message |
