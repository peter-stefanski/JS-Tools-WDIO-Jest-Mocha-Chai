const LoginPage = require("../pagesobjects/login.page");

describe("Negative test of Login", () => {
  it("Should display an error message for invalid credentials", async () => {
    await LoginPage.open();

    await LoginPage.loginForm.cookieButton.waitForClickable();
    await LoginPage.loginForm.cookieButton.click();
    await LoginPage.loginForm.emailInput.waitForClickable();
    await LoginPage.loginForm.emailInput.setValue("test@test.com");
    await LoginPage.loginForm.passwordInput.setValue("examplePassword");
    await LoginPage.loginForm.submitLoginButton.click();
    await LoginPage.loginForm.errorMessage.waitForDisplayed();
    await expect(LoginPage.loginForm.errorMessage).toHaveText(
      "Your email or password is incorrect!",
    );
  });
});
