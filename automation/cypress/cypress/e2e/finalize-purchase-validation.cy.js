describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type('Simon')
    cy.get('#country').type('ningún país')
    cy.get('#city').type('ninguna ciudad')
    cy.get('#card').type('1')
    cy.get('#month').type('123')
    cy.get('#year').type('20254')
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.sweet-alert > h2').should('not.be.visible')
    
  })
})