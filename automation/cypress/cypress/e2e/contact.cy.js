describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')  
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('#recipient-email').type('as@as.com')
    cy.get('#recipient-name').type('simon')
    cy.get('#message-text').type('hello from cypress')
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.on('window:alert', (text) => {
    expect(text).to.include('Thanks for the message')
    })
    })
})