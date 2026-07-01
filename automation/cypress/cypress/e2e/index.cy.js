import HomePage from '../pages/HomePage'

describe('template spec', () => {
  const homePage = new HomePage();

  it('passes', () => {
    homePage.visit();
    cy.get('#nava').should('be.visible')
  })
})