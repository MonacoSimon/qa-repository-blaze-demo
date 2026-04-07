describe('BlazeDemo - prueba básica', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('carga correctamente la página principal', () => {
    cy.visit('https://blazedemo.com')
    cy.get('[name="fromPort"]').select('Boston')
    cy.get('[name="toPort"]').select('New York')
    cy.get('form > .container > .btn').click()
  })

})