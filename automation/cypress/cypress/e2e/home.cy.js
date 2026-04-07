describe('BlazeDemo - prueba básica', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('carga correctamente la página principal', () => {
    cy.visit('https://blazedemo.com')
    cy.get('[href="home"]').click()
    cy.get('[name="email"]').type('simple@example.com')
    cy.get('[name="password"]').type('password')
    cy.get('[name="remember"]').click()
    cy.get('.btn-primary').click()
    cy.contains('Page Expired').should('not.exist')
  })

})