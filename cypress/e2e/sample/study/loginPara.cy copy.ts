describe('Launch the application', () => {
    it('Launch the application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm;jsessionid=DFE3C9E53C891926AF79122DD9637C86')
        cy.get("input[name='username']").type('faketest')
        cy.get("input[name='password']").type('test')
    })
})