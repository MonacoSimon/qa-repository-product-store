class FillContact {
    fill() {
        cy.get('#recipient-email').type('as@as.com')
        cy.get('#recipient-name').type('simon')
        cy.get('#message-text').type('hello from cypress')
    }
}
export default FillContact;