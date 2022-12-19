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
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Ingrid')
        cy.get('#lastName').type('Gonçalves')
        cy.get('#email').type('ingrid.email.com')
        cy.get('#open-text-area').type('Campo de descrição')
        cy.get('button[type="submit"]').click()

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
        cy.get('#phone-checkbox').click() //marcando o checkbox
        cy.get('#open-text-area').type('Campo de descrição')
        cy.get('button[type="submit"]').click()

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

    it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')



    })



})