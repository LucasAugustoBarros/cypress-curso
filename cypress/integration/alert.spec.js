

describe('Cypress Basic', () => {
    //Antes do Primeiro Teste.
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    // Antes de cada teste
    beforeEach(() => {
        cy.reload()
    })
    
    it('Alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('Alert com Mock', () => {
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get('#alert').click()
    })

    // Trabalhando com Alert com mais de uma X
    it('Alert clicando no OK', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirmado')
        })
    })

    it('Alert clicando no Cancelar', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Negado')
        })
    })


    it('Prompt Negativa', () => {
        cy.window().then(win => {
            cy.stub(win,'prompt').returns('42')
        })

        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Era 42?')
            return false
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal(':(')
        })

        cy.get('#prompt').click()
    })

    it.only('Prompt', () => {
        cy.window().then(win => {
            cy.stub(win,'prompt').returns('42')
        })

        cy.on('window:confirm', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Era 42?')
        })
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal(':D')
        })

        cy.get('#prompt').click()
    })
})