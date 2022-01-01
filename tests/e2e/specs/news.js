// https://docs.cypress.io/api/introduction/api.html

describe('News', () => {
  it('Visits the app root url', () => {
    cy.visit('/', { timeout: 5000 });
    cy.contains('div', 'TOP HIGHLIGHT');
    cy.scrollTo(0, 2000);
  });

  it('should click search and search some word', () => {
    cy.visit('/', { timeout: 5000 });
    cy.get('.d-flex > .v-btn > .v-btn__content > .v-icon').click();
    cy.get('#input-21').type('reuters');
    cy.get('.v-btn--is-elevated > .v-btn__content').click();
  });
});
