# Project Wiki

## Table of Contents

- [Project Wiki](#project-wiki)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
    - [Local Development](#local-development)
    - [Server Deployment](#server-deployment)
  - [Special Environment Variable Handling](#special-environment-variable-handling)
    - [Local Development](#local-development-1)
    - [Server Deployment](#server-deployment-1)
  - [Contributing](#contributing)
  - [License](#license)

---

## Introduction

This project is a React Native app developed with Expo. This wiki provides guidelines on how to set up, run, and contribute to the project.

---

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-project-name.git
    ```
2. Install dependencies:
    ```bash
    cd your-project-name
    npm install
    ```

---

## Running the Project

### Local Development

1. Create a `.env` file in the project root to store your environment variables.
2. Create an `app.config.js` file in the project root (if it doesn't already exist) and configure it to load environment variables from the `.env` file and expose them to the Expo runtime, like so:
    ```javascript
    require("dotenv").config();
    
    export default {
        // rest of config...
        extra: {
            ENV_VAR: process.env.ENV_VAR
        }
    };
    ```
3. To run the project locally, you can execute the `start-app.bat` file by double-clicking it or running it from the command line, or simply use the following command:
    ```bash
    npm start
    ```

### Server Deployment

1. Set the environment variables through the hosting service's dashboard or CLI.
2. Run the project using:
    ```bash
    npm start
    ```

---

## Special Environment Variable Handling

This project uses a special approach to handle environment variables. The method differs for local development and server deployment.

### Local Development

1. Environment variables are loaded from a `.env` file using the `dotenv` package and are exposed to the Expo runtime via the `app.config.js` file.
2. This setup allows for easy management and usage of environment variables during local development.

### Server Deployment

1. For server environments, use the hosting service's dashboard or CLI to set environment variables.
2. These variables will be accessible to the app when it runs.

> **Note**: This approach ensures that sensitive API keys are not committed to the version control system.

---

## Contributing

Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute to this project.

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](./LICENSE.md) file for details.
