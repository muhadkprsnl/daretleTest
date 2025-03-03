import { playerList } from "../../../sample/Dev_Component/MemberList_C/listing/adminList.ts"
// import { otherAcademyPlayers } from "../../sample/pro-dartleComponent/recruitment/otherAcademy"
// import { myAcademyPlayers } from "../../sample/pro-dartleComponent/recruitment/myAcademy"



describe('Pending Invites', () => {
    const players = new playerList();
    // const otherAcademy = new otherAcademyPlayers();
    // const myAcademy = new myAcademyPlayers();

    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        //cy.login('academy@roninaks.com', 'P@ssw0rd');
    });





    it('should navigate to the members page', () => {
        players.visitMembers();
        players.verifyaddNewMembers();
    });


    it('should navigate to the copy invitation members page', () => {
        players.visitMembers();
        players.clickonCopyInvite();
        players.copylinkMsg()
    });

    it('search a admin', () => {
        players.visitMembers(); // Navigates to the members page
        players.searchBar('Test admin 3{enter}'); // Searches for the player
    });

    it('Verify the deletion of a admin', () => {
        players.visitMembers();
        players.clickon3DotOption();
        players.threeoptiondltion();
        // players.confirmDltion();
    });

    it('Verify the cancel deletion of a admin', () => {
        players.visitMembers();
        players.clickon3DotOption();
        players.threeoptiondltion();
        players.cancelDltion()
    });

    it('Verify that resend invitation mail', () => {
        players.visitMembers();
        players.clickon3DotOption();
        players.threeopttionResendInvit()
        players.resendInvitaionMsg();
    });

    it('Verify that admin is Assigned the group', () => {
        players.visitMembers();
        players.clickon3DotOption();
        players.threeopttionAssign();
        players.assign_A_Group();
    });

    it('Verify that close the popup of Assign Group', () => {
        players.visitMembers();
        players.clickon3DotOption();
        players.threeopttionAssign();
        players.closeAssignGrpPopup();
    });


    it('Verify that dlt the marked players', () => {
        players.visitMembers();
        players.clickonDltAll()
    });



    it('Verify that cancel dlt the marked players', () => {
        players.visitMembers();
        players.clickonCancelDltAll();

    });



})