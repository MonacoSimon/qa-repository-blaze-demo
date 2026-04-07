describe('BlazeDemo - prueba básica', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('carga correctamente la página principal', () => {
    cy.visit('https://blazedemo.com')
    cy.get(':nth-child(3) > a').click()
    cy.get('.img-rounded').should('be.visible')
  })

})