class SignUp {
    fill(email) {
        cy.get('#signin2').click()
        cy.get('#signInModal').should('be.visible')
        cy.get('#sign-username').should('be.visible').clear().type(email)
        cy.get('#sign-password').should('be.visible').clear().type('testpassword')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }
}
export default SignUp;