const login = (name) => {
    cy.session(name, () => {
        cy.visit('https://academy-dev.dartle.app/login', { failOnStatusCode: false });
        cy.get('#email').type('academy@roninaks.com');
        cy.get('#password').type('P@ssw0rd');
        cy.get('.btn').click({ force: true });
        cy.url().should('contain', 'https://academy-dev.dartle.app/dashboard')

    })
    cy.visit('https://academy-dev.dartle.app/dashboard', { failOnStatusCode: false });
}

beforeEach(() => {
    login('user')
})