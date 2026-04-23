describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').click()
    cy.get('#sign-username').type('testuser')
    cy.get('#sign-password').type('testpassword')
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.on('window:alert', (str) => {
    expect(str).to.equal('This user already exist.')
    })

})
})