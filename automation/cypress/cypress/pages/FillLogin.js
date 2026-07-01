class FillLogin {
    fill(email, password) {
        cy.get('#loginusername').should('be.visible').clear().type(email)
        cy.get('#loginpassword').should('be.visible').clear().type(password)
    }
}
export default FillLogin;