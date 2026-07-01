import HomePage from '../pages/HomePage'
import FillContact from '../pages/FillContact'

describe('template spec', () => {
  const homePage = new HomePage();
  const fillContact = new FillContact();

  it('passes', () => {
    homePage.visit()
    cy.get(':nth-child(2) > .nav-link').click()

    cy.get('#exampleModal').should('be.visible')

    fillContact.fill()

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Thanks for the message!!')
    })

    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
      .should('be.visible')
      .click()
  })
})