describe('BlazeDemo - prueba básica', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('carga correctamente la página principal', () => {
    cy.visit('https://blazedemo.com')
    cy.get('[href="home"]').click()
    cy.get(':nth-child(2) > a').click()
    cy.get('[name="name"]').type('John Doe')
    cy.get('[name="company"]').type('Example Inc.')
    cy.get('[name="email"]').type('simple@example.com')
    cy.get('[name="password"]').type('password')
    cy.get('[name="password_confirmation"]').type('password')
    cy.get('.btn').click()
    cy.contains('Page Expired').should('not.exist')
  })

})