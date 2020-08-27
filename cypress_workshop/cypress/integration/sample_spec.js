describe('My First Test', () => {
  it('Gets, types and asserts', () => {
    cy.visit('https://habitica.com/static/home')

    cy.get('.login-button').click();


    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/login')

    // Get an input, type into it and verify that the value has been updated
    cy.get('#usernameInput')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')

      cy.get('#passwordInput')
      .type('contra')
      .should('have.value', 'contra')
    

  })

   
    
})