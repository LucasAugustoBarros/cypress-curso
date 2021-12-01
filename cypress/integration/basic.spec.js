describe('Cypress Basic', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        cy.title()
        .should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
    })


    it.only('Should find and interact with element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
        //fazendo uma validação do Botão
        .should('have.value','Clique Me!')
        //Clicando no Botão
        .click()
        //validando que o value do botão modificou
        .should('have.value','Obrigado!')


        
    })
})