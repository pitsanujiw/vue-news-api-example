// https://docs.cypress.io/api/introduction/api.html

describe('History', () => {
  it('Visits the app history url', () => {
    cy.visit('/#/history');
    cy.contains('div', 'Opps! Your histories is empty.');
  });
});
