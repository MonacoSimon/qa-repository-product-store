class FillPurchase {
    fill() {
        cy.get('#name').type('Simon')
        cy.get('#country').type('Argentina')
        cy.get('#city').type('Buenos Aires')
        cy.get('#card').type('1234567890123456')
        cy.get('#month').type('12')
        cy.get('#year').type('2025')
    }
}

export default FillPurchase;