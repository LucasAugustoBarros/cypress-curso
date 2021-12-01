

describe('Cypress Basic', () => {
    //Antes do Primeiro Teste.
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    // Antes de cada teste
    beforeEach(() => {
        cy.reload()
    })
    
    it('Text', () => {
        cy.get('.facilAchar').should('contain','Cuidado')
    })

    it('link', () => {
        cy.get('#resultado').should('have.text','Status: Nao cadastrado')
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text','Voltou!')

    })

    it('TextBox', () => {
        cy.get('#formNome')
        .should('have.value','')
        .type('Lucas Barros')
        .should('have.value','Lucas Barros')

        cy.get('#elementosForm\\:sugestoes')
        .should('have.value','')
        .type('Lucas Barros')
        .should('have.value','Lucas Barros')
        .clear()
        .should('have.value','')
        .type('Erro2{selectall}Lucas Barros2')
        .should('have.value','Lucas Barros2')

    })

    it('Radio Buton', () => {
        cy.get('#formSexoFem')
        .should('not.be.checked')
        .click()
        .should('be.checked')
        cy.get('#formSexoMasc')
        .should('not.be.checked')
    })

    it('CheckBox', () => {
        cy.get('[name="formComidaFavorita"]').click({multiple: true})
        cy.get('#formComidaCarne')
        .should('be.checked')
    })

    it('Combo', () => {
        cy.get('[data-test="dataEscolaridade"]')
        .select('1o grau completo')
        .should('have.value','1graucomp')
    })

    it('Combo Multiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
        .select('Natacao','Corrida', 'O que eh esporte?')
    })

    it('Delay no Cypress', () => {
        cy.get('#buttonDelay')
        .click()
        cy.get('#novoCampo')
        .should('be.visible')
        .should('exist')
        .type('Lucas Barros')
    })   

    it('Usando o Find', () => {
        cy.get('#buttonList')
        .click()
        cy.get('#lista li')
        .find('span')
        .should('contain','Item 1')
        cy.get('#lista li span')
        .should('contain','Item 2')
    })

    it.only('Usando o Find', () => {
        cy.title()
        .should('be.equal', 'Campo de Treinamento')

        cy.title()
        .should('contain', 'Campo ')

        cy.title()
        .then(title => {
            console.log(title)
        })
    })
})