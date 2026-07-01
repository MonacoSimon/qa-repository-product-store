import HomePage from '../pages/HomePage'
import FillPurchase from '../pages/FillPurchase'

describe('template spec', () => {
  const homePage = new HomePage();
  const fillPurchase = new FillPurchase();

  it('passes', () => {
    homePage.visit()
    cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
    cy.get('.col-lg-1 > .btn').click()
    fillPurchase.fill();
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.sweet-alert > h2').should('be.visible')
    cy.get('.confirm').click()
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
  })
})