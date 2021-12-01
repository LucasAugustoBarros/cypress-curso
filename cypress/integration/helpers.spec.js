
describe('Helperss.....', () => {
    //Antes do Primeiro Teste.
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    // Antes de cada teste
    beforeEach(() => {
        cy.reload()
    })

    it('Wrap', () => {
        const obj = {nome: 'Lucas', idade: 20}
        expect(obj).to.have.property("nome");
        cy.wrap(obj).should('have.property', 'nome')

        cy.get('#formNome').then($ele => {
            $ele.val('Funciona com Jquery')
        })

    })
    
})