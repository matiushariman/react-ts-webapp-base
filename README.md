## Getting Started

### Pre-requisite(s)

- [node@10 or above](https://nodejs.org/en/)
- [yarn v1.0 or above](https://yarnpkg.com/)

### Installation

Install dependencies

```sh
  yarn install
```

### Running the project

To run the project:

```sh
  yarn start
```

### Building the project

To get the production build, run

```sh
  yarn build:{environment}
```

_NOTE: Running the command above will generate a build folder in the root that contains a production ready build._

### Running the test

There are 2 types of test that we can run:

1. Unit/Integration Test
   Powered by [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) which is also current industry standard for testing react component.
   To run the test, run
   ```sh
    yarn test
   ```
2. E2E Test
   Powered by cypress.
   To run the test in a browser, run

   ```sh
     yarn cy:open
   ```

   To run the test in a terminal, run

   ```sh
     yarn cy:run
   ```

## Contact

- matius.hariman@gmail.com
