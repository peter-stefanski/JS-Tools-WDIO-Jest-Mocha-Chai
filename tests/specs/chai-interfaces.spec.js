const { assert, expect, should } = require("chai");
const LoginPage = require("../pagesobjects/login.page");

should();

describe("Chai interfaces", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it("Assert example", async () => {
    const text = await LoginPage.getHeadingText();
    assert.equal(text, "Login to your account");
  });

  it("Expect example", async () => {
    const text = await LoginPage.getHeadingText();
    expect(text).to.equal("Login to your account");
  });

  it("Should example", async () => {
    const text = await LoginPage.getHeadingText();
    text.should.equal("Login to your account");
  });
});
