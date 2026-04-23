describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#nava').should('be.visible')
  })
})