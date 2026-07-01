import HomePage from '../pages/HomePage'
import BuyProduct from '../pages/BuyProduct'

describe('template spec', () => {
  const homePage = new HomePage();
  const buyProduct = new BuyProduct();

  it('passes', () => {
    homePage.visit()
    buyProduct.buy(':nth-child(8) > .card > .card-block > .card-title > .hrefch')
    cy.get('.item > img').should('be.visible')
    cy.get('.col-sm-12 > .btn').click()
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Product added')
    })
  })
})