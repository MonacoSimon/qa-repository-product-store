import HomePage from '../pages/HomePage'

describe('template spec', () => {
  const homePage = new HomePage();

  it('passes', () => {
    homePage.visit()
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.vjs-poster').should('be.visible')
  })
})