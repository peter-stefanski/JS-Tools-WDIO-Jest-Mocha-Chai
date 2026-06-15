class LoginPage {
  get heading() {
    return $('//*[@id="form"]/div/div/div[1]/div/h2');
  }

  async open() {
    await browser.url("https://automationexercise.com/login");
  }

  async getHeadingText() {
    return this.heading.getText();
  }
}

module.exports = new LoginPage();
