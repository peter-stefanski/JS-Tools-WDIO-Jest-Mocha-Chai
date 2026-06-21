import { remote } from "webdriverio";

describe("Negative test of Login", () => {
  it("Should display an error message for invalid credentials", async () => {
    await browser.url("/login");

    const cookieButton = await $("button.fc-cta-consent");
    const emailInput = await $('input[data-qa="login-email"]');
    const passwordInput = await $('input[data-qa="login-password"]');
    const submitLoginButton = await $('button[data-qa="login-button"]');
    const errorMessage = await $(".login-form p");

    await cookieButton.waitForClickable();
    await cookieButton.click();
    await emailInput.waitForClickable();
    await emailInput.setValue("test@test.com");
    await passwordInput.setValue("examplePassword");
    await submitLoginButton.click();
    await errorMessage.waitForDisplayed();
    await expect(errorMessage).toHaveText(
      "Your email or password is incorrect!",
    );
  });
});
