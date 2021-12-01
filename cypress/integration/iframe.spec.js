
describe('Helperss.....', () => {
    //Antes do Primeiro Teste.
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    // Antes de cada teste
    beforeEach(() => {
        cy.reload()
    })

    it('Iframe', () => {
        cy.get('#frame1').then(iframe => {
           const body = iframe.contents().find('body')
           cy.wrap(body).find('#tfield')
           .type('Funcionou')
           .should('have.value','Funcionou')

           cy.on('window:alert', msg => {
               expect(msg).to.be.equal('Click OK!')
           })
           cy.wrap(body).find('#otherButton').click()
        })

    })



    it.only('Iframe', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
    
})