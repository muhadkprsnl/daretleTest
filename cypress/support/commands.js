// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// cypress/support/commands.js


import 'cypress-file-upload';


Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        cy.visit('/login', { failOnStatusCode: false });

        cy.get('#email').type(username, { force: true });
        cy.get('#password').type(password);
        cy.get('.btn').click({ force: true });
        cy.wait(10000)

        // Validate successful login by checking the URL
        cy.url().should('contain', '/dashboard'); // Ensure login was successful
    }, {
        validate() {
            // Validate session by checking if we're on the dashboard
            cy.wait(10000)
            cy.url().should('contain', '/dashboard'); // Check if still logged in
        }
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore the specific error
    if (err.message.includes('createPopper is not a function')) {
        return false; // Prevent Cypress from failing the test
    }
    // Let other exceptions fail the test
    return true;
});





// To open Cypress for development:
//     bash
// npm run cy: open: dev

// To run tests in development:
// bash
// npm run cy: run: dev

// To open Cypress for production:
//     bash
// npm run cy: open: prod

// To run tests in production:
// bash
// npm run cy: run: prod