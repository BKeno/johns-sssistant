# Project Wiki

## Table of Contents

- [Project Wiki](#project-wiki)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
    - [Configuration](#configuration)
    - [Local Development](#local-development)
    - [Server Deployment](#server-deployment)
  - [Special Environment Variable Handling](#special-environment-variable-handling)
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

### Configuration

1. Create an `app.config.js` file in the project root (if it doesn't already exist). This file is crucial for both local development and server deployment to ensure the environment variables are correctly mapped to the `Constants` object.

    ```javascript
    export default {
        // rest of config...
        extra: {
            ENV_VAR: process.env.ENV_VAR  // replace ENV_VAR with your actual environment variable names
        }
    };
    ```

### Local Development

1. Install the `dotenv` package as a development dependency:

    ```bash
    npm install dotenv --save-dev
    ```

2. Create a `.env` file in the project root to store your environment variables.
3. In the `app.config.js` file, add the following line at the top to load the environment variables from the `.env` file:

    ```javascript
    import dotenv from "dotenv";
    dotenv.config();
    ```

4. To run the project locally, use the following command:

    ```bash
    npm start
    ```

### Server Deployment

1. Set the environment variables through the hosting service's dashboard or CLI.
2. The `app.config.js` file will map these environment variables to the `Constants` object as specified.
3. Run the project using:

    ```bash
    npm start
    ```

---

## Special Environment Variable Handling

This project uses a special approach to handle environment variables, ensuring that they are correctly mapped to the `Constants` object for both local development and server deployment. The `dotenv` package is used for local development to load environment variables from a `.env` file, while for server deployment, environment variables are set through the hosting service.

> **Note**: This approach ensures that sensitive API keys are not committed to the version control system.

---

## License

This project is licensed under the MIT License.
