# Check Name of Login Component (WebdriverIO + Mocha + Chai)

## Project Structure

```
test/specs          → test files  
test/pageobjects    → Page Object Model files  
wdio.conf.js        → WebdriverIO configuration  
```

## Technologies

This project uses:

- WebdriverIO as the automation framework
- Mocha as the test runner
- Chai as the assertion library
- Chrome browser for test execution
- Page Object Model (POM) design pattern

## How to Run Tests

To run this project locally, make sure you have the following installed:

- Node.js
- npm (comes with Node.js)
- WebdriverIO (installed via project dependencies)

### Install dependencies

Install all required packages:

```bash
npm install
```

### Run all tests

Tests are executed using the WebdriverIO configuration file:

```
wdio.conf.js
```

Run tests using npm script:

```bash
npm run wdio
```

or directly using WebdriverIO CLI:

```bash
npx wdio run wdio.conf.js
```

The `wdio.conf.js` file is responsible for:

- selecting the test framework (Mocha)
- configuring browser capabilities
- defining test locations
- configuring reporters
- setting timeouts and execution options

### Run a specific test file

To execute only one test specification:

```bash
npx wdio run wdio.conf.js --spec ./test/specs/chai-interfaces.spec.js
```

Example:

```bash
npx wdio run wdio.conf.js --spec ./test/specs/negative_login.spec.js
```

## Test Overview

### Login Name Component (`chai-interfaces.spec.js`)

The purpose of this test is to verify the Login Page title using the Chai assertion library in a WebdriverIO framework.

This project uses WebdriverIO with Mocha as a test runner and Chai for assertions.

The test verifies that the Login component displays the expected page name.

## Chai Interfaces

### Expect

BDD-style assertion.

Example:

```javascript
expect(text).to.equal("Login Page");
```

### Assert

TDD-style assertion.

Example:

```javascript
assert.equal(text, "Login Page");
```

### Should

BDD-style assertion attached to an object.

Example:

```javascript
text.should.equal("Login Page");
```

## Test Execution Example

Successful test execution example:

```
Execution of 1 workers started

RUNNING in chrome

[PASS] Should display an error message for invalid credentials

PASSED in chrome

Spec Files:
1 passed, 1 total
```

## Notes

- Tests are executed through `wdio.conf.js`.
- Test cases are located inside the `test/specs` directory.
- Page objects are stored inside the `test/pageobjects` directory.
- The project follows the Page Object Model approach to keep tests maintainable and reusable.
- Test execution is managed by WebdriverIO CLI.

## WebdriverIO Configuration

The main configuration file:

```
wdio.conf.js
```

contains settings for:

- browser configuration
- test framework setup
- test execution environment
- reporters
- hooks
- timeouts

Example command:

```bash
npx wdio run wdio.conf.js
```

This command loads the configuration file and starts the automated test execution.
