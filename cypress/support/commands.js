Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Ingrid')
    cy.get('#lastName').type('Gonçalves')
    cy.get('#email').type('ingrid@email.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

})