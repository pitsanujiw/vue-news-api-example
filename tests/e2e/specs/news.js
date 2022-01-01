// https://docs.cypress.io/api/introduction/api.html

describe('News', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('div', 'TOP HIGHLIGHT');
  });

  it('visits the news list see more and click explore and check history list', () => {
    cy.visit('/');
    cy.contains('See more').click();
    cy.contains('Explore').click();
    cy.contains('Close').click();
    cy.visit('/#/history');
    cy.contains('div', 'HISTORY');
  });
});
