import 'cypress-axe';

describe('Accesibilidad - Home', () => {

  it('no debería tener errores críticos', () => {

    cy.visit('https://www.demoblaze.com')

    cy.get('#tbodyid').should('be.visible')

    cy.injectAxe()

    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious']
    })

  })

})