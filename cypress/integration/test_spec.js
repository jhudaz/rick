describe('My First Test', function() {
  it('Visits the Rick App', function() {
    cy.visit('http://localhost:3000/')
    cy.get('.inputSearch')
      .type('small',{enter}).click()
  })
})