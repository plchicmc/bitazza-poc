
# ❯ Getting Started

  

## Step 1: Set up the Development Environment

  

You need to set up your development environment before you can do anything.

  

Install [Node.js and NPM](https://nodejs.org/en/download/)

  

### Install a MySQL database.

Config database connection in `ormconfig.json`


### Step 2: Create new Project

Fork or download this project.

Install required dependencies

```bash

npm install

```

### Step 3: Serve your App
  

```bash

npm start

```

### Tests
```bash

npm test

```
## ❯ API Routes
### Postman collection
You can import postman collection file `Bitazza.postman_collection.json` into postman for testing purpose

### Route Description

| Route | Description |

| -------------- | ----------- |



Get | **localhost:3000/user/id** | Get an user by id|

Post | **localhost:3000/user** body: {"username":"John Doe", password: "12345" } | Register new user|
Patch | **localhost:3000/user/id** body: {"username":"John Doe", password: "12345" } | Edit an user by id|
Delete | **localhost:3000/user/id** body: {"username":"John Doe", password: "12345" } | Delete an user by id|



Get 	| **localhost:3000/instrument?OSMId = 1** | Get all Intrumments by OSMId |


## ❯ Project Structure

  

| Name | Description |

| --------------------------------- | ----------- |

| **.vscode/** | VSCode tasks, launch configuration and some other settings |

| **dist/** | Compiled source files will be placed here |

| **src/** | Source files |

| **src/controllers/** | REST API Controllers |

| **src/routes/** | Routing api|

| **src/api/interceptors/** | Interceptors are used to change or replace the data returned to the client. |