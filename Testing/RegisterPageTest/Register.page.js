class Login {
  get username () { return $('#username'); }
  get email () { return $('#email'); }
  get password () { return $('#password'); }
  get submit () { return $('body > app-root > app-default > app-signup > div.login > div > form > button'); }

  login (email, password) {
    this.email.setValue(email);
    this.password.setValue(password);

    this.submit.click();
  }

  isLoggedIn () {
    return browser.getUrl() !== 'http://localhost:4200/auth/signup';
  }
}

module.exports = Login;
