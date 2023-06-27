export function readAuthCreds() {
  cy.readFile('cypress/fixtures/creds.json').then((credentials) => {
    const { email, password } = credentials;

    cy.task('setEmail', email);
    cy.task('setPassword', password);
  });
}
