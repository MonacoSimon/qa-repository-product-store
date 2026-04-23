describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.wait(2000)
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.item > img').should('be.visible')
    cy.get('.col-sm-12 > .btn').click()
    cy.on('window:alert', (text) => {
      expect(text).to.include('Product added')
    })
    cy.get('#cartur').click()
    cy.wait(2000)
    cy.get('.success > :nth-child(1) > img').should('be.visible')
    cy.get('.success > :nth-child(2)').should('be.visible')
    cy.get('.success > :nth-child(4)').should('be.visible')
  })
})