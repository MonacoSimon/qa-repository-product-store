describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')  
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('#recipient-email').type('without email')
    cy.get('#recipient-name').type('simon')
    cy.get('#message-text').type('hello from cypress')
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.on('window:alert', () => {
    throw new Error('No debería mostrarse el alert con email inválido')
    })
    })
})