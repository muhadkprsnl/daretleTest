import { playerList } from "../../../sample/Dev_Component/MemberList_C/listing/coachList"
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

    it('search a Coach', () => {
        players.visitMembers(); // Navigates to the members page
        players.searchBar('Test Coach 3{enter}'); // Searches for the player
    });

    it('Verify the deletion of a Coach', () => {
        players.visitMembers();
        players.clickon3DotOption();
        players.threeoptiondltion();
        // players.confirmDltion();
    });

    it('Verify the cancel deletion of a Coach', () => {
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

    it('Verify that Coach is Assigned the group', () => {
        players.visitMembers();
        players.clickon3DotOption();
        players.threeopttionAssign();
        players.assign_A_Group();
        players.assignedToasterSuccesskMsg()
    });

    it('Verify that close the popup of Assign Group', () => {
        players.visitMembers();
        players.clickon3DotOption();
        players.threeopttionAssign();
        players.closeAssignGrpPopup();
    });



    //Assign Group  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    it('Verify that the marked Coach is Assigned the group', () => {
        players.visitMembers();
        players.clickonAssigngrp();
        players.clickProceedAssign();
        players.assign_A_Group();
        players.assignedToasterFailedkMsg();
    });

    it.only('Verify that close the popup of marked Members Assign Group', () => {
        players.visitMembers();
        players.clickonAssigngrp();
        players.closeAssignGrpPopup();
    });



    //     //Share Profile  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //     it('Verify that mark the Member in Popup', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();

    //     });

    //     it('Verify that unmark the Member in Popup', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.mark2IndiinPopup();

    //     });

    //     it('Verify that unmark the Member in Popup', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.clickCancelthePopup();


    //     });

    //     it('Verify that marked Player is removed from Popup', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.removeSelected();

    //     });

    //     it('Verify that marked Player changed to Public', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();
    //         players.changeSelectedtoPub();

    //     });

    //     it('Verify that marked Player changed to Private', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();

    //     });

    //     it('Verify that marked Player Send Publicly', () => {
    //         // Retrieve PROD_USER from cypress.env.json
    //         const prodUsers = Cypress.env('PROD_USER');

    //         // Second session for the First user
    //         cy.session('user1-session', () => {
    //             cy.login(prodUsers[0].email, prodUsers[0].password); // Use the second user's credentials
    //         });

    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.clickNext();
    //         players.confirmSend();
    //         players.sendToasterkMsg();
    //         // Logout the first user
    //         otherAcademy.signout();

    //         // Second session for the second user
    //         cy.session('user2-session', () => {
    //             cy.login(prodUsers[1].email, prodUsers[1].password); // Use the second user's credentials
    //         });

    //         // Perform actions for the second user
    //         otherAcademy.visitRecruitment();
    //         otherAcademy.verifyStoredName();

    //         // Logout the second user
    //         otherAcademy.signout();

    //         // Second session for the First user
    //         cy.session('user1-session', () => {
    //             cy.login(prodUsers[0].email, prodUsers[0].password); // Use the second user's credentials
    //         });


    //     });


    //     it('Verifymy academy', () => {
    //         // Retrieve PROD_USER from cypress.env.json
    //         const prodUsers = Cypress.env('PROD_USER');

    //         // Second session for the First user
    //         cy.session('user1-session', () => {
    //             cy.login(prodUsers[0].email, prodUsers[0].password); // Use the second user's credentials
    //         });

    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.clickNext();
    //         players.confirmSend();
    //         players.sendToasterkMsg();
    //         // Logout the first user
    //         otherAcademy.signout();

    //         // Second session for the second user
    //         cy.session('user2-session', () => {
    //             cy.login(prodUsers[1].email, prodUsers[1].password); // Use the second user's credentials
    //         });

    //         // Perform actions for the second user
    //         otherAcademy.visitRecruitment();
    //         myAcademy.clickonMyAcademyPlayers();
    //         otherAcademy.verifyStoredName();

    //         // Logout the second user
    //         otherAcademy.signout();

    //         // Second session for the First user
    //         cy.session('user1-session', () => {
    //             cy.login(prodUsers[0].email, prodUsers[0].password); // Use the second user's credentials
    //         });


    //     });

    //     it('Verify that marked All Academies in Private', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();
    //         players.clickNext();
    //         players.markAllAcademies();

    //     });

    //     it('Verify that mark Individual Academy in Private', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();
    //         players.clickNext();
    //         players.mark1IndividualAcademy();

    //     });

    //     it('Verify that mark Individual Academy in Private', () => {
    //         // Retrieve PROD_USER from cypress.env.json
    //         const prodUsers = Cypress.env('PROD_USER');

    //         // Second session for the First user
    //         cy.session('user1-session', () => {
    //             cy.login(prodUsers[0].email, prodUsers[0].password); // Use the second user's credentials
    //         });

    //         // First user actions
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();
    //         players.clickNext();
    //         players.searchAcademyinPrivate('Devzery Test Acadeemy');
    //         players.markCheckboxInPopup();
    //         players.clickPrivateSend();
    //         players.confirmSend();
    //         players.sendToasterkMsg();

    //         // Logout the first user
    //         otherAcademy.signout();

    //         // Second session for the second user
    //         cy.session('user2-session', () => {
    //             cy.login(prodUsers[1].email, prodUsers[1].password); // Use the second user's credentials
    //         });

    //         // Perform actions for the second user
    //         otherAcademy.clickonExclusiveRequirement();
    //         otherAcademy.visitRecruitment();
    //         otherAcademy.compareNames();

    //         // Logout the second user
    //         otherAcademy.signout();

    //         // Second session for the First user
    //         cy.session('user1-session', () => {
    //             cy.login(prodUsers[0].email, prodUsers[0].password); // Use the second user's credentials
    //         });

    //     });



    //     it('Verify that marked All Academies in Private', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();
    //         players.clickNext();
    //         players.nextPageinPopup();

    //     });


    //     it('Verify that Search the academies in Private', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();
    //         players.clickNext();
    //         players.searchAcademyinPrivate('Devzery Test Acadeemy');

    //     });

    //     it('Verify that Search the academies in Private', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();
    //         players.clickNext();
    //         players.searchAcademyinPrivate('Devzery Test Acadeemy');

    //     });

    //     it('Verify that back from Private Academy', () => {
    //         players.visitMembers();
    //         players.clickoIndividualCheckbox();
    //         players.clickonShareProfile();
    //         players.mark1IndiinPopup();
    //         players.changeSelectedtoPri();
    //         players.clickNext();
    //         players.searchAcademyinPrivate('Devzery Test Acadeemy');
    //         players.markCheckboxInPopup();
    //         players.clickPrivateBack();

    //     });

    //     //Transfer Player  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //     it('Verify that Course completion of a player', () => {
    //         players.visitMembers();
    //         players.searchBar1('Joh{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.courseCompletion();
    //         players.checkedCourseCompletion();

    //     });

    //     it('Verify that unmarking Course completion of a player', () => {
    //         players.visitMembers();
    //         players.searchBar1('Joh{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.courseCompletion();
    //         players.courseCompletion();
    //         players.unCheckedCourseCompletion();

    //     });

    //     it('Verify that Transfer player added to alumni', () => {
    //         players.visitMembers();
    //         players.searchBar1('Joh{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.clickAlumnicheckbox();


    //     });

    //     it('Verify that Transfer all players added to alumni', () => {
    //         players.visitMembers();
    //         players.searchBar1('Joh{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.clickAllAlumnicheckbox();
    //         players.checkedAlumniCheckbox();


    //     });

    //     it('Verify that Cancel the Tranfer of a player', () => {
    //         players.visitMembers();
    //         players.searchBar1('Joh{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.selectDropdown('Devzery Test Acadeemy{enter}');
    //         players.clickonCancelTransfer();

    //     });

    //     it('Verify that Tranfer of a player in outside Academy', () => {
    //         players.visitMembers();
    //         players.searchBar1('Joh{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.clickonOutsideAcademy();
    //         players.enterOutsideAcademyField('top Football')
    //         players.clickonConfirmTransfer();

    //     });

    //     it('Verify that the cancellation popup for the transfer of a player ', () => {
    //         players.visitMembers();
    //         players.searchBar1('Joh{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.selectDropdown('Devzery Test Acadeemy{enter}');
    //         players.clickonConfirmTransfer();
    //         players.clickonCancelRemovePopup();


    //     });

    //     it('Verify that the Decline the transfer of a player ', () => {
    //         players.visitMembers();
    //         players.searchBar1('Joh{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.transferDeclineMsg();


    //     });

    //     it('Verify that Tranfer of a player', () => {
    //         players.visitMembers();
    //         players.searchBar1('Jose{enter}');
    //         players.clickMore();
    //         players.clickonTransferPlayers();
    //         players.selectDropdown('Devzery Test Acadeemy{enter}');
    //         players.clickonConfirmTransfer();
    //         players.clickonConfirmRemovePopup();
    //         players.transferSuccessMsg();
    //     });


    //     //Remove Players >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    //     it('Add to the alumni when removing a player', () => {
    //         players.visitMembers(); // Navigates to the members page
    //         players.searchBar1('Joh{enter}'); // Searches for the player
    //         players.clickMore();
    //         players.clickonRemovePlayers();
    //         players.markAddAlumni();

    //     });

    //     it('Add multiple players to the alumni when removing a player', () => {
    //         players.visitMembers(); // Navigates to the members page
    //         players.markTwoPlayers(); // Searches for the player
    //         players.clickMore();
    //         players.clickonRemovePlayers();
    //         players.markAllAddAlumni();
    //         players.checkedCheckbox();

    //     });

    //     it('Unmark Add multiple players to the alumni when removing a player', () => {
    //         players.visitMembers(); // Navigates to the members page
    //         players.markTwoPlayers(); // Searches for the player
    //         players.clickMore();
    //         players.clickonRemovePlayers();
    //         players.markAllAddAlumni();
    //         players.markAllAddAlumni();
    //         players.checkedCheckbox();

    //     });

    //     it('Dlt a player from Removing Pop-up', () => {
    //         players.visitMembers(); // Navigates to the members page
    //         players.markTwoPlayers(); // Searches for the player
    //         players.clickMore();
    //         players.clickonRemovePlayers();
    //         players.dltPlayerRemoving()

    //     });

    //     it('Cancel the Removal a player', () => {
    //         players.visitMembers(); // Navigates to the members page
    //         players.searchBar1('Joh{enter}'); // Searches for the player
    //         players.clickMore();
    //         players.clickonRemovePlayers();
    //         players.selectReason('Quitting from training');
    //         players.enterReason('123')
    //         players.clickonCancelRemove();
    //     });

    //     it('Cancel Pop-up of Removal a player', () => {
    //         players.visitMembers(); // Navigates to the members page
    //         players.searchBar1('Abc{enter}'); // Searches for the player
    //         players.clickMore();
    //         players.clickonRemovePlayers();
    //         players.selectReason('Quitting from training');
    //         players.enterReason('123')
    //         players.clickonConfirmRemove();
    //         players.clickonCancelRemovePopup();
    //     });

    //     it('Remove a player', () => {
    //         players.visitMembers(); // Navigates to the members page
    //         players.searchBar1('Abc{enter}'); // Searches for the player
    //         players.clickMore();
    //         players.clickonRemovePlayers();
    //         players.selectReason('Quitting from training');
    //         players.enterReason('123')
    //         players.clickonConfirmRemove();
    //         players.clickonConfirmRemovePopup();
    //         players.removalSuccessMsg();
    //     });





})