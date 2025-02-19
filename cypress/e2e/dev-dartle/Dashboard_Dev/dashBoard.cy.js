import { loginPage } from "../sample/login_page"
import { dashBoard } from "../sample/dashboard"




//let lg = new loginPage();
let db = new dashBoard();



// Use the login command in tests
beforeEach(() => {

    cy.login('academy@roninaks.com', 'P@ssw0rd');
    //cy.visit('https://academy-dev.dartle.app/dashboard', { failOnStatusCode: false });
});

describe('Tests with login session', () => {


    it('Verify the Academy Name', () => {
        db.verifyAcademy();
        cy.visit('https:/ / academy - dev.dartle.app / dashboard', { failOnStatusCode: false });

    });

    it('Verify the Academy Info', () => {

        db.verifyAcademyinfo();
    });

    it('Navigate to Add Member', () => {
        db.navigatetoAddmember();
    });

    it('Navigate to Add Coach', () => {
        db.navigatetoAddcoach();
    });


    it('Navigate to Add Group', () => {
        db.navigatetoAddgroup();
    });




});




















describe('Tests with login session', () => {
    beforeEach(() => {
        // Use the login command to set up the session before all tests
        //cy.login('academy@roninaks.com', 'P@ssw0rd');
        //cy.visit('https:/ / academy - dev.dartle.app / dashboard', { failOnStatusCode: false });

    });


    xit('Verify the Academy Name', () => {
        db.verifyAcademy();
        cy.visit('https://academy-dev.dartle.app/dashboard', { failOnStatusCode: false });

    });


    xit('Verify the Academy Info', () => {
        //cy.get('.ng-tns-c1974261705-2 > .mat-mdc-list-item > .mat-icon').click();
        //cy.visit('https://academy-dev.dartle.app/dashboard', { failOnStatusCode: false });
        //cy.get('.ng-tns-c1974261705-2 > .mat-mdc-list-item > .mat-icon').click();
        db.verifyAcademyinfo();
    });


    xit('Navigate to Add Member', () => {
        db.navigatetoAddmember();
    });


    xit('Navigate to Add Coach', () => {
        db.navigatetoAddcoach();
    });


    xit('Navigate to Add Group', () => {
        db.navigatetoAddgroup();
    });
});