describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.contains('Laptops').click()
    cy.get(':nth-child(4) > .card > .card-block > .card-title > .hrefch').should('be.visible')
  })
})