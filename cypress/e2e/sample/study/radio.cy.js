describe('RADIO BUTTON', () => {
    it('select the item ofRADIO', () => {
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/reports', {
            headers: {
                "Accept-Encoding": "gzip, deflate", // Corrected key (no space)
            }
        });

        // You can add commands here to interact with the drop-down menu
        // For example:
        // cy.get('dropdown-selector').select('desired-option');
    });
});
