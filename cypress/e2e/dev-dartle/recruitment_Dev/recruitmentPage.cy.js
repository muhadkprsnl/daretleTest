import { myAcademyPlayers } from "../../sample/Dev_Component/recruitment/myAcademy.ts"
import { otherAcademyPlayers } from "../../sample/Dev_Component/recruitment/otherAcademy.ts"
import { playerList } from "../../sample/Dev_Component/MemberList_C/playerListing.ts/adminList.ts"



describe('Pending Invites', () => {
    const myAcademy = new myAcademyPlayers();
    const otherAcademy = new otherAcademyPlayers();
    const players = new playerList();

    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        //cy.login('support@dartle.app', 'P@ssw0rd');
    });





    it('should navigate to the recruitment page', () => {
        otherAcademy.visitRecruitment();
        otherAcademy.verifyRecruitment();

    });

    //Public Recruitment>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    it.only('verify that remove the interest from other Academy', () => {
        otherAcademy.visitRecruitment();
        otherAcademy.clickRemoveRequest();
        otherAcademy.clickonConfirm();
        otherAcademy.removedIntrestedMsg();

    });

    it('verify that cancel remove the interest', () => {
        otherAcademy.visitRecruitment();
        otherAcademy.clickRemoveRequest();
        otherAcademy.clickonCancel();

    });


    it('verify that search a player', () => {
        otherAcademy.visitRecruitment();
        otherAcademy.searchPlayer("share")

    });

    // Exclusive request received >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    it('verify that accept the interest', () => {
        otherAcademy.visitRecruitment();
        otherAcademy.clickonExclusiveRequirement();
        otherAcademy.clickAcceptRequest();
        otherAcademy.clickonConfirm();
        otherAcademy.acceptedRequestMsg();

    });

    it('verify that cancel the accepted interest', () => {
        otherAcademy.visitRecruitment();
        otherAcademy.clickonExclusiveRequirement();
        otherAcademy.clickAcceptRequest();
        otherAcademy.clickonConfirm();
        //otherAcademy.cancelledRequestMsg();

    });

    it('verify that accept the interest', () => {
        otherAcademy.visitRecruitment();
        otherAcademy.clickonExclusiveRequirement();
        otherAcademy.clickAcceptRequest();
        otherAcademy.clickonCancel();


    });

    //My Academy Players >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    //Public Recruitment>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    it('verify that remove the request in public', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        otherAcademy.clickRemoveRequest();
        otherAcademy.clickonConfirm();
        myAcademy.requestRemovedMsg();

    });

    it('verify that cancel the pop-up of remove request', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        otherAcademy.clickRemoveRequest();
        otherAcademy.clickonCancel();

    });


    it('verify that search a player from public recruitment from my academy players', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        otherAcademy.searchPlayer("shea")

    });

    it('verify that visit next to page', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        myAcademy.nextPagePublic();

    });

    it('verify that visit previous to page', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        myAcademy.nextPagePublic();
        myAcademy.previousPagePublic();

    });

    //Exclusive Req Sent>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    it('verify that search a player from exclusive req sent from my academy', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        myAcademy.clickonExclusiveRequestSent();
        myAcademy.searchMyacademyExclusivePlayer("john")

    });
    it('verify that remove the interest', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        myAcademy.clickonExclusiveRequestSent();
        myAcademy.removeRequestonExcl();
        otherAcademy.clickonConfirm();
        myAcademy.requestRemovedMsg();

    });

    it('verify that cancel the remove request pop-up ', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        myAcademy.clickonExclusiveRequestSent();
        myAcademy.removeRequestonExcl();
        otherAcademy.clickonCancel();


    });

    it('verify that visit next to page', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        myAcademy.clickonExclusiveRequestSent();
        myAcademy.nextPageExclusive();

    });

    it('verify that visit previous to page', () => {
        otherAcademy.visitRecruitment();
        myAcademy.clickonMyAcademyPlayers();
        myAcademy.clickonExclusiveRequestSent();
        myAcademy.nextPageExclusive();
        myAcademy.previousPageExclusive();

    });

});