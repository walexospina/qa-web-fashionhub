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

This project supports multiple environments, each with its specific configuration. Follow these steps to set up the environment variables for local, staging, and production:

1. **Create Environment Files**: In the root directory, create the following `.env` files to manage settings for different environments:

   - `.env`: Shared settings across environments.
   - `.env.local`: Settings for local development (used when running tests locally).
   - `.env.staging`: Settings for the staging environment, typically used for testing before production deployment.
   - `.env.production`: Settings for production deployment.

2. **Define Variables in Each File**: Add the required variables to each `.env` file. Here’s an example of typical configuration values:

   - **`.env`** (common settings):

     ```plaintext
     USER_NAME='USER'
     PASSWORD='PASSWORD'
     ```

   - **`.env.local`** (for local development):

     ```plaintext
     BASE_URL=http://localhost:4000/fashionhub/
     ```

   - **`.env.staging`** (for staging environment):

     ```plaintext
     BASE_URL=http://staging.example.com/fashionhub/
     ```

   - **`.env.production`** (for production environment):
     ```plaintext
     BASE_URL=http://production.example.com/fashionhub/
     ```

These environment-specific files allow the application to adapt to different environments without changing the code directly.

**Note**: .env, .env.local, .env.staging and .env.production are listed in .gitignore to keep sensitive production data secure.

## Available Scripts

### Local Execution

To start the Docker container, run the tests, and stop the container afterward, use the command:

```
npm run test:sequence
```

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
