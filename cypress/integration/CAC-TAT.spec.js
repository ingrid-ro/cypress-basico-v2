/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT') //verificando o título da página
    })

    it('preenche os campos obrigatorios e envia o formulário', function() {
       const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum laoreet ipsum, ut viverra metus sollicitudin non. Mauris interdum efficitur bibendum. Vestibulum sem purus, gravida ut ligula sollicitudin, viverra tempor magna. Praesent sapien ante, blandit vel libero eu, vehicula molestie ligula.'
        cy.get('#firstName').type('Ingrid')
        cy.get('#lastName').type('Gonçalves')
        cy.get('#email').type('ingrid@email.com')
        cy.get('#open-text-area').type(longText, { delay: 1}) //adicionando um texto longo no campo
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Ingrid')
        cy.get('#lastName').type('Gonçalves')
        cy.get('#email').type('ingrid.email.com')
        cy.get('#open-text-area').type('Campo de descrição')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

    it('validar campo telefone vazio quando não preenchido com valor não numérico', function() {
        cy.get('#phone')
            .type('hsuahsauhs')
            .should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Ingrid')
        cy.get('#lastName').type('Gonçalves')
        cy.get('#email').type('ingrid.email.com')
        cy.get('#phone-checkbox').check() //marcando o checkbox
        cy.get('#open-text-area').type('Campo de descrição')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })

   it('preenche e limpa os campos nome, sobrenome, email e telefone', function () {
        cy.get('#firstName')
            .type('Ingrid')
            .should('have.value', 'Ingrid')
            .clear() //limpa o campo
            .should('have.value', '') //verifica se o campo foi limpo
        cy.get('#lastName')
            .type('Gonçalves')
            .should('have.value', 'Gonçalves')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('email@email.com')
            .should('have.value', 'email@email.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('551199999999')
            .should('have.value', '551199999999')
            .clear()
            .should('have.value', '')
    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })
    
    it('envia o formuário com sucesso usando um comando customizado', function()  {
        cy.fillMandatoryFieldsAndSubmit()
    
        cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function() {
        cy.get('#product')
            .select('YouTube')
            .should('have.value', 'youtube')
    })  

    it('seleciona um produto (Mentoria) por seu valor (value)', function() {
        cy.get('#product')
            .select('mentoria')
            .should('have.value', 'mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function() {
            cy.get('#product')
            .select(1)
            .should('have.value', 'blog')    
    })

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]')
          .check()
          .should('have.have', 'feedback')
    })

    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio) {
               cy.wrap($radio).check()
               cy.wrap($radio).should('be.checked')
            })
    })

    it('marca ambos checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
            .check()
            .should('be.checked')
            .last()
            .uncheck()
            .should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]#file-upload')
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json')
            .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })

    it('seleciona um arquivo simulando um drag-and-drop', function() {
        cy.get('input[type="file"]#file-upload')
            .should('not.have.value')
            .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
            .should(function($input) {
                expect($input[0].files[0].name).to.equal('example.json')
            })
    })
    
    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .selectFile('@sampleFile')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')  
    })

    it('acessa a página da política de privacidade removendo o target e então clicando no link', function() {
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()

        cy.contains('Talking About Testing').should('be.visible')
    })

})