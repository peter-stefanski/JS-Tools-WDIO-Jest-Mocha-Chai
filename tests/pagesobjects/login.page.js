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
}

module.exports = new LoginPage();
