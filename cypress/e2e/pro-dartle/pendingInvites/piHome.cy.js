import { personalInfo } from "../../sample/pro-dartleComponent/pro-PI/regComponents/persomalInfo"
import { pendingInvitesHomeInfo } from "../../sample/pro-dartleComponent/pro-PI/piHomeComponents/piHome"
// import { addionalInfo } from "../../sample/pro-dartleComponent/pro-PI/additionalInfo"
// import { navigation } from "../../sample/pro-dartleComponent/pro-PI/navigation"
//import { addPlayer } from "../../ sample / pro - dartleComponent / pro - PI / regComponents / addPlayer"
// import { randomDetails } from "../../sample/pro-dartleComponent/pro-PI/randomdetails"
// import { File } from "../../sample/pro-dartleComponent/pro-PI/File"


describe('Pending Invites', () => {
    const PI_Home = new pendingInvitesHomeInfo();
    const PI_HomePersonalInfo = new personalInfo();
    // const PI_AdditionalInfo = new addionalInfo();
    // const PI_nav = new navigation();
    //const PI_HomeAddPlayer = new addPlayer();
    // const PI_randomDetail = new randomDetails();
    // const PI_file = new File();

    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        // cy.login('support@dartle.app', 'P@ssw0rd');
    });





    it('Verify the Home Page', () => {
        PI_Home.visitPIHome();
    });

    it('Verify that Search a Player', () => {
        PI_Home.visitPIHome();
        PI_Home.clickPISearchBar('Jane');
        PI_HomePersonalInfo.verifyStudentName();
    });

    it('Verify that Add Members Page', () => {
        PI_Home.visitPIHome();
        PI_Home.clickOnAddMember();
    });

    it('Verify that Copy Invitation Link', () => {
        PI_Home.visitPIHome();
        PI_Home.clickCopyInvitation();
        PI_Home.copiedsuccessMsg();
    });

    it('Verify that Accept of Player', () => {
        PI_Home.visitPIHome();
        PI_Home.clickonAccept();
        PI_Home.acceptedsuccessMsg();
        PI_Home.emailSuccessMsg()
    });

    it('Verify that Deletion of Player', () => {
        PI_Home.visitPIHome();
        PI_Home.clickonDelete();
        PI_Home.clickConfirmDltBtn();
        PI_Home.dltedsuccessMsg();
        //PI_Home.emailSuccessMsg()
    });

    it('Verify that Cancel the Deletion of Player', () => {
        PI_Home.visitPIHome();
        PI_Home.clickonDelete();
        PI_Home.clickCancelDltBtn();
    });

    it('Verify that Deletion of Players', () => {
        PI_Home.visitPIHome();
        PI_Home.MarkCheckBox();
        PI_Home.clickDltAllBtn();
        PI_Home.clickConfirmDltBtn();
        PI_Home.dltedAllsuccessMsg();
    });


});