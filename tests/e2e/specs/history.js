// https://docs.cypress.io/api/introduction/api.html

describe('History', () => {
  it('Visits the app history url', () => {
    cy.visit('/#/history', { timeout: 5000 });
    cy.contains('div', 'Opps! Your histories is empty.');
  });

  it('visits the news list see more and click explore and check history list', () => {
    cy.visit('/', { timeout: 5000 });
    cy.contains('See more').click();
    cy.contains('Close').click();
    cy.get(':nth-child(5) > .v-btn__content > .v-icon').click();
    cy.get('#list-item-125 > .v-list-item__title').click();
    cy.contains('div', 'HISTORY');
  });
});
