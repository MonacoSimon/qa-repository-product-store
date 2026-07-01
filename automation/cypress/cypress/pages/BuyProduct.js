class BuyProduct {
    buy(product) {
        cy.get(product).click()
    }
}

export default BuyProduct;