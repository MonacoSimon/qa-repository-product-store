describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type('as@as.com')
    cy.wait(2000)
    cy.get('#loginpassword').type('1234')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should('contain', 'Welcome')
  })
})
