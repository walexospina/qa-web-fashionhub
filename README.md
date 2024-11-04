# fashionhub Testing Framework

This project performs automated testing using Playwright for the FashionHub application.

## Prerequisites

Ensure the following are installed on your local machine:

**Node.js and npm**: for managing dependencies and running scripts.
**Docker**: for running the FashionHub application in a container install this [Docker image](https://hub.docker.com/r/pocketaces2/fashionhub-demo-app)

## Installation

1. Clone the repository into a folder.
2. Go to the project root directory and install dependencies:
   `npm install`

All the dependencies from package.json would be installed in node_modules folder.

## Setup the environment variables:

This project supports multiple environments, each with its specific configuration. Here’s a guide to configuring these variables for local, staging, and production environments:

1. Create .env files for each environment: These files store environment-specific settings and should be created in the project root directory.

2. Define variables for each environment:

`.env`: For global settings that don’t change between environments.
`.env.local`: Settings specific to local development. This is used when running tests locally.
`.env.staging`: Settings for the staging environment, useful for testing in an environment similar to production.
`.env.production`: Settings for production deployment.

3. **_Sample Variables_** : Add the following variables based on your environment:

`.env`

```
USER_NAME='USER'
PASSWORD='PASSWORD'

```

`.env.local:`

```
BASE_URL=http://localhost:4000/fashionhub/
```

`.env.staging:`

```
BASE_URL=http://staging.yourdomain.com/fashionhub/
```

`.env.production:`

```
BASE_URL=https://yourdomain.com/fashionhub/
```

4. Using Environment Variables:

The `NODE_ENV` environment variable determines which environment file is used when running tests.
For example, running `npm run test:local` loads `.env.local` settings, while `npm run test:prod` loads .`env.production`.

**Note**: .env, .env.local, .env.staging and .env.production are listed in .gitignore to keep sensitive production data secure.

## Available Scripts

### Local Execution

To run tests locally, follow these steps:

1. Ensure no previous containers of the application are running. You can stop existing containers with:

`docker stop $(docker ps -q --filter ancestor=pocketaces2/fashionhub-demo-app:latest)`

2. To start the Docker container, run the tests, and stop the container afterward, use the command:

`npm run test:sequence`

This command performs the following steps:

- `start`: starts the application in a Docker container in detached mode on port 4000.
- `test:local`: runs tests in the local environment with Playwright.
- `stop-docker`: stops the Docker container once tests are complete.

### Production Execution

To run tests without starting the Docker container, use the following command:

```
npm run test:prod
```

Or directly with Playwright:

```
NODE_ENV=production npx playwright test
```

This command runs the tests against the environment configured as production in Playwright.

### Running Tests by Tags

This project supports running tests selectively by tags. Tags can be added to test cases to allow specific subsets of tests to be executed, such as smoke tests, regression tests, or API tests: **_Available Tags_**

- `@smoke`: For quick, essential checks. (TestCase1)
- `@regression`: For comprehensive regression tests. (testCase1 and TesCase2)
- `@api`: For API endpoint tests. (TestCase4)

```
NODE_ENV=production npx playwright test --grep @smoke
```

## Troubleshooting

Port Allocation Error: If you receive a port is already allocated error, ensure any previous containers are stopped using the stop-docker script.
you can check if the port is in use by executing `sudo lsof -i :4000`

Some guides about the topics covered in this framework:

- [Playwright documentation ](https://playwright.dev/docs/intro)
