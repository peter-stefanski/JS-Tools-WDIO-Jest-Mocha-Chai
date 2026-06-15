# Check Name of Login Component (WebdriverIO + Mocha + Chai)

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

## Overview of Login Name Title (chai-interfaces.spec.js)

The purpose of this test is to check the name of the Login component using the Chai library.


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
