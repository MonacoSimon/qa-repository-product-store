describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(3) > .nav-link').click()
    cy.get('.vjs-poster').should('be.visible')
    })
})