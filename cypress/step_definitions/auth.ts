import { Auth } from '../support/pageObjects/authPage';

const authPage = new Auth();

export function IGoToAuthpage() {
  authPage.visit();
}

export function IInputAuthCreds(email, password) {
  authPage.inputEmail(email);
  authPage.inputPassword(password);
}

export function IClickLogin() {
  authPage.clickLogIn();
}

export function ICheckThatLoginFailed() {
  authPage.checkAuthUrl();
  authPage.checkIncorrectEmailorPasswordError();
}

export function ICheckPasswordVisability() {
  authPage.checkPasswordVisability();
}

export function ICheckForgotPassword() {
  authPage.clickForgotPassword();
}
