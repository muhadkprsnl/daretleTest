describe('Static drop-down', () => {
    it('selectthe item of drop-down', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=DFE3C9E53C891926AF79122DD9637C86')
        cy.get("input[name='username']").type('test')
        cy.get("input[name='password']").type('test')
        cy.get(':nth-child(5) > .button').click()
        cy.get('#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a').click()
        cy.get('#month').select(1)
        cy.get('#month').select('March')
        cy.get('#month').select("January")


    })
})