describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.contains('Monitors').click() 
    cy.get(':nth-child(2) > .card > :nth-child(1) > .card-img-top').should('be.visible')
 })
})