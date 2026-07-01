import HomePage from '../pages/HomePage'
import FillLogin from '../pages/FillLogin'

describe('Login test', () => {
  const homePage = new HomePage();
  const fillLogin = new FillLogin();

  it('should show wrong password alert', () => {

    homePage.visit();
    cy.get('#login2').click()

    cy.get('#logInModal').should('be.visible')
    const email = 'example@example.com';
    fillLogin.fill(email);

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Wrong password.')
    })

    cy.get('#logInModal .btn-primary').click()
  })
})