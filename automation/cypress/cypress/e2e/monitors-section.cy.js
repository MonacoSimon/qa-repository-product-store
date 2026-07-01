import HomePage from '../pages/HomePage'

describe('template spec', () => {
  const homePage = new HomePage();

  it('passes', () => {
    homePage.visit();
    cy.contains('Monitors').click()
    cy.get(':nth-child(2) > .card > :nth-child(1) > .card-img-top').should('be.visible')
  })
})