describe('Login test', () => {
  it('should show wrong password alert', () => {

    cy.visit('https://www.demoblaze.com/index.html')

    cy.get('#login2').click()

    cy.get('#logInModal').should('be.visible')

    cy.get('#loginusername')
      .should('be.visible')
      .clear()
      .type('Simon')

    cy.get('#loginpassword')
      .should('be.visible')
      .clear()
      .type('wrongpass')

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Wrong password.')
    })

    cy.get('#logInModal .btn-primary').click()
  })
})