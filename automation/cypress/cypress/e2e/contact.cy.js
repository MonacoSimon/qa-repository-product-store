import HomePage from "../pages/HomePage";
import FillContact from "../pages/FillContact";

describe('template spec', () => {
  const homePage = new HomePage();
  const fillContact = new FillContact();

  it('passes', () => {
    homePage.visit()
    cy.get(':nth-child(2) > .nav-link').click()
    fillContact.fill()
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.on('window:alert', (text) => {
      expect(text).to.include('Thanks for the message')
    })
  })
})