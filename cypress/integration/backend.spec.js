
/// <reference types="cypress" />

describe('Cypress API', () => {
    const conta = 'Lucas Barros 8'
    let token
    before (() => {
        cy.getToken('lucas.augusto.barros@gmail.com', '123456')
        .then(tkn => {
            token = tkn
        })
    })
    it('Sould insert Account and validate request StatusCode with 201 and 400 ', () => {
            cy.request({
                url: '/contas',
                method: 'POST',
                headers: { Authorization : `JWT ${token}` },
                failOnStatusCode: false,
                body: {
                    nome: conta
                }
            }).then(res => {
                if (res.status == 201) {
                    expect(res.body).to.have.property('id')
                    expect(res.body).to.have.property('nome', conta)
                    console.log(res.status)
                }
                else if (res.status == 401){
                    (expect(res.body).to.be.equal('Unauthorized'))
                    console.log(res.status)
                }
                else {
                    (expect(res.body).to.have.property('error','Já existe uma conta com esse nome!'))
                    console.log(res.status)
                }
    
            })
        })
})