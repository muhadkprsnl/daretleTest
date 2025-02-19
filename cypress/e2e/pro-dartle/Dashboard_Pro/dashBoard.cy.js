import { loginPage } from "../sample/pro-dartleComponent/Login/login_page"
import { dashBoard } from "../sample/pro-dartleComponent/Dashboard/dashboard"




//let lg = new loginPage();
let db = new dashBoard();



// Use the login command in tests
beforeEach(() => {
    // Assuming cy.login is a valid custom command
    cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
    cy.login('support@dartle.app', 'P@ssw0rd');
});

describe('Tests with login session', () => {


    it('Verify the Academy Name', () => {
        db.verifyAcademy();
        cy.visit('https://academy.dartle.app/dashboard', { failOnStatusCode: false });

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

