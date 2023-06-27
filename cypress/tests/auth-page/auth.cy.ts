import {
  ICheckForgotPassword,
  ICheckPasswordVisability,
  ICheckThatLoginFailed,
  IClickLogin,
  IGoToAuthpage,
  IInputAuthCreds,
} from '../../step_definitions/auth';
import { ICheckThatIAmOnTheChatsPage } from '../../step_definitions/chats';
import { readAuthCreds } from '../../support/utils';

describe('Authoriozation tests', () => {
  beforeEach(() => {
    readAuthCreds();
    IGoToAuthpage();
  });
  it('Pass authorization test', () => {
    cy.task('getEmail').then((email) => {
      cy.task('getPassword').then((password) => {
        IInputAuthCreds(email, password);
      });
    });
    IClickLogin();
    ICheckThatIAmOnTheChatsPage();
  });

  it('Fail authorization test: incorrect data', () => {
    cy.task('getPassword').then((password) => {
      IInputAuthCreds('random-email', password);
    });
    IClickLogin();
    ICheckThatLoginFailed();

    cy.task('getEmail').then((email) => {
      IInputAuthCreds(email, 'random-password');
    });
    IClickLogin();
    ICheckThatLoginFailed();
  });

  it('Check password visability', () => {
    ICheckPasswordVisability();
  });

  it('Check forgot password button', () => {
    ICheckForgotPassword()
  });
});
