import { tr } from "@faker-js/faker/.";

export class playerList {


    //Selectors  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    dotoption = ':nth-child(1) > .card-body > .card-body2 > [style="display: flex; flex-direction: column;"] > .dropdown > .bi';
    indiCheckbox = ':nth-child(1) > .card-body > .card-body2 > [style="display: flex;"] > .checkbox-label > .checkbox-custom';
    indi2Checkbox = ':nth-child(2) > .card-body > .card-body2 > [style="display: flex;"] > .checkbox-label > .checkbox-custom';
    dltBtn = ':nth-child(1) > .card-body > .w-100 > .mat-ripple';
    dltAllBtn = '.col-md-5 > .btn-outline-dark';
    moreBtn = '.col-md-5 > :nth-child(4)';
    viewReport = ':nth-child(25) > .card-body > .w-100 > .btn-primary';
    copyInvite = '.col-lg-5 > .bd-7';
    filterBtn = '.filter-name';
    addMember = '.mb-5 > .mat-ripple > .bi';
    searchedName = ':nth-child(1) > .card-body';


    visitMembers() {
        cy.visit('https://academy-dev.dartle.app/members/list', { failOnStatusCode: false });
        cy.wait(2000);
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .d-flex > :nth-child(3)').click();
        cy.wait(2000);
    }


    //click Action  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    clickonCopyInvite() {
        cy.get(this.copyInvite).click()
    }

    clickonFilterBtn() {
        cy.get(this.filterBtn).click();
    }

    clickonAddMember() {
        cy.get(this.addMember).click()
    }

    clickon3DotOption() {
        cy.get(this.dotoption).click()
    }

    clickoIndividualCheckbox() {
        cy.get(this.indiCheckbox).click();
    }

    clickonViewReport() {
        cy.get(this.viewReport).click()
    }

    clickonDltBtn() {
        cy.get(this.dltBtn).click()
    }

    // clickonDltAll() {
    //     cy.get(this.dltAllBtn).click()
    // }

    // clickonMore() {
    //     cy.get(this.moreBtn).click()
    // }

    threeoptiondltion() {
        // Select the "Delete" option
        cy.contains('div', 'Delete').click();
    }

    threeopttionResendInvit() {
        // Select the "Delete" option
        cy.contains('div', "Resend Admin's Invitation").click();
    }

    threeopttionAssign() {
        // Select the "Delete" option
        cy.contains('div', "Assign to group").click();
    }

    closeAssignGrpPopup() {
        cy.get('.model-close').click()
    }

    assign_A_Group(index = 1) {
        if (index > 8) {
            cy.log('No unassigned groups available.');
            return;
        }

        cy.get(`.modal-body > :nth-child(${index}) > .btn`).then((button) => {
            if (!button.is(':disabled')) {
                cy.log(`Button ${index} is not assigned. Clicking to assign...`);
                cy.wrap(button).click(); // Assign the group
            } else {
                cy.log(`Button ${index} is already assigned. Checking next group...`);
                this.assign_A_Group(index + 1); // Recursive call for the next button
            }
        });
    }

    confirmDltion() {
        cy.get('.swal2-confirm').click()
    }

    cancelDltion() {
        cy.get('.swal2-cancel').click()
    }



    //other  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    verifyaddNewMembers() {
        cy.url().should('contain', 'https://academy-dev.dartle.app/members/list'); // Ensure login was successful
    }

    verifyCopyInvitation() {
        cy.url().should('contain', 'https://academy-dev.dartle.app/self-registration/6451f714413fa18c66462066');
    }

    storedSearchName: string | undefined;

    searchBar(name: string) {
        this.storedSearchName = name;
        cy.get('.input-group > .form-control')
            .type(name)
        cy.wait(2000)

        // Verify the searched name
        // cy.get(this.searchedName)
        cy.get('.profile-name')
            .invoke('val') // Get the value of the input field
            .should('include', name); // Verify it contains the selected code
    }


    //Toaster  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    toaster = '#toast-container > .ng-trigger'

    copylinkMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Link copied!')
            .and('contain.text', 'The self registration link has been copied to clipboard.');
    }

    resendInvitaionMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Email sent!')
            .and('contain.text', 'Invitation mail have been sent successfully.');
    }

    assignGrpMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Success!')
            .and('contain.text', 'Stare have been successfully added to the group under 16');
    }





    //Assign Group  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    assignGroup = '.assign-group';
    closePopupBtn = '.btn-dark';
    proceedAssignBtn = '.flex-column > .d-flex > .btn-primary';

    clickonAssigngrp() {
        this.clickoIndividualCheckbox();
        cy.get(this.assignGroup).click();
    }

    closeAssignPopup() {
        cy.get(this.closePopupBtn).click();
    }

    clickProceedAssign() {
        cy.get(this.proceedAssignBtn).click();
    }

    //Dlt all  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    dltAll = '.col-md-5 > .mat-ripple';

    clickonDltAll() {
        this.clickoIndividualCheckbox();
        cy.get(this.dltAll).click();
        this.confirmDltion()
    }

    clickonCancelDltAll() {
        this.clickoIndividualCheckbox();
        cy.get(this.dltAll).click();
        this.cancelDltion()
    }

}