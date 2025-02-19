describe('Dynamic drop-down', () => {
    it('select the item of drop-down', () => {
        // Visit the page without headers (cy.visit does not support headers)
        cy.visit('https://www.tesla.com');

        // Add further interactions with the drop-down menu, e.g.:
        // cy.get('dropdown-selector').select('desired-option');

    });
});
