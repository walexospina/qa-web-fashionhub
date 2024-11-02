# qa-web-fashionhub

This project performs automated testing using Playwright for the FashionHub application.

## Prerequisites

Ensure the following are installed on your local machine:

Node.js and npm: for managing dependencies and running scripts.
Docker: for running the FashionHub application in a container install this [Docker image](https://hub.docker.com/r/pocketaces2/fashionhub-demo-app)

## Installation

Clone the repository

### Install project dependencies:

`npm install`

### Setup the environment variables:

This project uses different environments with specific configurations for local, staging, and production. Configure the environment variables by creating the following .env files:

`.env`

```
USER_NAME='USER'
PASSWORD='PASSWORD'

```

`.env.local:`

```
BASE_URL=http://localhost:4000..
```

`.env.production:`

```
BASE_URL=FASHION_HUB_URL
```

## Available Scripts

### Local Execution

To run tests locally, follow these steps:

Ensure no previous containers of the application are running. You can stop existing containers with:

`docker stop $(docker ps -q --filter ancestor=pocketaces2/fashionhub-demo-app:latest)`

To start the Docker container, run the tests, and stop the container afterward, use the command:

`npm run test:sequence`

This command performs the following steps:

- `start`: starts the application in a Docker container in detached mode on port 4000.
- `test:local`: runs tests in the local environment with Playwright.
- `stop-docker`: stops the Docker container once tests are complete.

### Production Execution

To run tests without starting the Docker container, use the following command:

```
npm run test:prod
or
NODE_ENV=production npx playwright test
```

This command runs the tests against the environment configured as production in Playwright.

## Project Structure

tests/ui: Contains the automated test scripts.
playwright.config.js: Playwright configuration for managing environments, browser settings, and other adjustments.

## Additional Notes

Environment Variables: Ensure necessary environment variables are set up for NODE_ENV and other parameters specific to Playwright and your application.

## Troubleshooting

Port Allocation Error: If you receive a port is already allocated error, ensure any previous containers are stopped using the stop-docker script.
you can check if the port is in use by executing `sudo lsof -i :4000`

Some guides about the topics covered in this framework:

- [Playwright documentation ](https://playwright.dev/docs/intro)
