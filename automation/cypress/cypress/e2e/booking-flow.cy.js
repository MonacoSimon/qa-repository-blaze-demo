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
    cy.get(':nth-child(1) > :nth-child(2) > .btn').click()
    cy.get('.controls > .btn').click()
    cy.get('h1').should('contain', 'Thank you for your purchase today!')
  })

})