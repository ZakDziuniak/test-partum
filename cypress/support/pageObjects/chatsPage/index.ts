export class Chats {
  checkChatsUrl() {
    cy.url().should('include', Cypress.config().baseUrl + '/chats');
  }
}
