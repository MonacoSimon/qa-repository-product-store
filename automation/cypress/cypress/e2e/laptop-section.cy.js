import HomePage from '../pages/HomePage'

describe('template spec', () => {
  const homePage = new HomePage();

  it('passes', () => {
    homePage.visit();
    cy.contains('Laptops').click()
    cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch').should('be.visible')
  })
})