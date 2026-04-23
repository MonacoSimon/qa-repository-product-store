describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(8) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.item > img').should('be.visible')
    cy.get('.col-sm-12 > .btn').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })
  })
})