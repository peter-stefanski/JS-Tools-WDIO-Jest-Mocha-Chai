# Check Name of Login Component (WebdriverIO + Mocha + Chai)

## Project Structure

- test/specs → test files
- test/pageobjects → Page Object Model
- wdio.conf.js → WDIO configuration

## How to Run Tests

To run this project locally, make sure you have the following installed:

- Node.js
- npm (comes with Node.js)
- WebdriverIO (installed via project dependencies)

### Steps:

1. Install dependencies:
   `npm install`

2. Run tests:
   `npm run wdio`

---

## Overview of Login Name Component (chai-interfaces.spec.js)

The purpose of this test is to verify the Login Page title using the Chai assertion library in a WebdriverIO framework.

This project uses WebdriverIO with Mocha as a test runner and Chai for assertions.



## Chai interfaces

## Expect
BDD style assertion

Example:
expect(text).to.equal("Login Page");

## Assert
TDD style assertion

Example:
assert.equal(text, "Login Page");

## Should
BDD style assertion attached to object

Example:
text.should.equal("Login Page");
