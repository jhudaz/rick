describe('Testing', function () {
  it('it should return courses typing some value that exist in the data', function () {
    cy.visit('http://localhost:3000/')
    cy.get('.inputSearch > input')
      .type('small{enter}')
      .get('.ant-card-body > ul > li')
      .should(($p) => {
        // should have found 3 elements
        expect($p).to.have.length(3)
      }
  })
})