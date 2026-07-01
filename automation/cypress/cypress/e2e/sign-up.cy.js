import HomePage from '../pages/HomePage'
import SignUp from '../pages/SignUp'


describe('template spec', () => {
  const homePage = new HomePage();
  const signUp = new SignUp();

  it('passes', () => {
    homePage.visit();
    const email = `testuser${Date.now()}@example.com`;
    signUp.fill(email)
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Sign up successful.')
    })


  })
})