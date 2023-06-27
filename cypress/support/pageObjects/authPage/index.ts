export class Auth {
  visit() {
    cy.visit('');
  }

  checkAuthUrl() {
    cy.url().should('include', Cypress.config().baseUrl + '/login');
  }

  inputEmail(email: string) {
    cy.get('#input-39').clear().type(email);
  }

  inputPassword(password: string) {
    cy.get('#input-40').clear().type(password);
  }

  clickLogIn() {
    cy.contains('span', 'Log in').click();
  }

  checkIncorrectEmailorPasswordError() {
    cy.get('.v-messages__message')
      .should('be.visible')
      .should('contain.text', 'Wrong Email or password');
  }

  checkPasswordVisability() {
    cy.get('#input-40').should('have.attr', 'type', 'password');

    cy.get('.v-icon').click();

    cy.get('#input-40').should('have.attr', 'type', 'text');
  }

  clickForgotPassword() {
    cy.get('.pa-1').click();
    cy.url().should('include', Cypress.config().baseUrl + '/reset-password');
  }
}
