class LoginPage {
  get heading() {
    return $('//h2[text()="Login to your account"]');
  }

  async open() {
    await browser.url("/login");
  }

  async getHeadingText() {
    return this.heading.getText();
  }

  get loginForm() {
    return {
      cookieButton: $("button.fc-cta-consent"),
      emailInput: $('input[data-qa="login-email"]'),
      passwordInput: $('input[data-qa="login-password"]'),
      submitLoginButton: $('button[data-qa="login-button"]'),
      errorMessage: $(".login-form p"),
    };
  }
}
module.exports = new LoginPage();
