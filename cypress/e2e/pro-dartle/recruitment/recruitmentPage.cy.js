import { myAcademyPlayers } from "../recruitment/myAcademyPlayers"
import { otherAcademyPlayers } from "../../sample/pro-dartleComponent/recruitment/otherAcademy"



describe('Pending Invites', () => {
    const myAcademy = new myAcademyPlayers();
    const otherAcademy = new otherAcademyPlayers();

    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        //cy.login('support@dartle.app', 'P@ssw0rd');
    });





    it('should navigate to the members page', () => {
        players.visitMembers();
        players.verifyaddNewMembers();

    });

});