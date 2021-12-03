
/// <reference types="cypress" />


describe('Cypress API', () => {
    const conta = 'Lucas Barros'
    const contaA = 'Conta Alterada Via Rest2'
    let token
    before(() => {
        cy.getToken('lucas.augusto.barros@gmail.com', '123456')
            .then(tkn => {
                token = tkn
            })
    })
    it('Sould insert Account and validate request StatusCode with 201 and 400 ', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
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
            else if (res.status == 401) {
                (expect(res.body).to.be.equal('Unauthorized'))
                console.log(res.status)
            }
            else {
                (expect(res.body).to.have.property('error', 'Já existe uma conta com esse nome!'))
                console.log(res.status)
            }

        })
    })


    it('Sould alter name Account and validate request StatusCode with 201 and 400 ', () => {
        cy.request({
            url: '/contas',
            method : 'GET',
            headers: { Authorization: `JWT ${token}` },
            failOnStatusCode: false,
            qs: {
                nome: conta
            }
        }).then(res => {
            if (res.body != '' || res.body == null){
                cy.request({
                    url: `/contas/${res.body[0].id}`,
                    method: 'PUT',
                    headers: { Authorization: `JWT ${token}` },
                    failOnStatusCode: false,
                    body: {
                        nome: contaA
                    }
                }).then(res => {
                    if (res.status == 200) {
                        expect(res.body).to.have.property('nome', contaA)
                        console.log(res.status)
                    }
                    else if (res.status == 404) {
                        (expect(res.statusText).to.be.equal('Not Found'))
                        console.log(res.status)
                    }
                    else {
                        console.log(res)
        
                    }
        
                })
            }
            else {
                console.log('Não retornou nenhum dado')
            }
        })
    })
})