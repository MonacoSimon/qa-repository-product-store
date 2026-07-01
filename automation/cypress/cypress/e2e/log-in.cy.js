import HomePage from '../pages/HomePage'
import FillLogin from '../pages/FillLogin'
import SignUp from '../pages/SignUp'

describe('template spec', () => {
  const homePage = new HomePage();
  const fillLogin = new FillLogin();
  const signUp = new SignUp();

  it('passes', () => {
    homePage.visit();

    const email = `testuser${Date.now()}@example.com`;

    signUp.fill(email);

    cy.get('#signInModal').should('not.be.visible')

    cy.wait(1000)

    cy.get('#login2').click()
    cy.get('#logInModal').should('be.visible')
    fillLogin.fill(email, 'testpassword');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#nameofuser').should('contain', 'Welcome')
  })
})