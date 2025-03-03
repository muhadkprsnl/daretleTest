


export class pendingInvitesHomeInfo {


    visitPIHome() {
        cy.visit('https://academy-dev.dartle.app/members/pending', { failOnStatusCode: false });
        cy.url().should('contain', '/pending');

    }


    // Components    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    searchBarSelector = '.input-group > .form-control';
    PIHome_CopyInvitationBtn = '.col-lg-5 > .bd-7';
    PIHome_FilterBtn = '#sorting';
    PIHome_AddMemberBtn = '.mb-5 > .mat-ripple';
    PIHome_CheckBox = ':nth-child(2) > .card-body > .card-body2 > [style="display: flex;"] > .checkbox-label > .checkbox-custom';
    PIHome_AcceptBtn = ':nth-child(2) > .card-body > .w-100 > .btn-primary'
    PIHome_Delete = ':nth-child(2) > .card-body > .w-100 > .btn-outline-dark';
    PIHome_NextBtn = '[style="padding: 0rem 1.3rem;"]';
    PIHome_previousBtn = "div[class='col-12 p-0'] button:nth-child(1)"
    PIHome_ConfrmDltBtn = '.swal2-confirm';
    PIHome_CancelDltBtn = '.swal2-cancel';
    PIHome_DltallBtn = '.col-md-5 > .mat-ripple';


    // pI_addtionalInfo = '.additional-players.mt-1.mb-5.col-lg-6.p-0';
    clickPISearchBar(name: string) {
        cy.get(this.searchBarSelector).type(`${name}{enter}`);
    }

    clickCopyInvitation() {
        cy.get(this.PIHome_CopyInvitationBtn).click();
    }

    clickFilter() {
        cy.get(this.PIHome_FilterBtn).click()
    }

    clickOnAddMember() {
        cy.get(this.PIHome_AddMemberBtn).click();
        cy.url().should('contain', '/members/list/add_player');
    }

    MarkCheckBox() {
        cy.get(this.PIHome_CheckBox).click()
    }

    clickonAccept() {
        cy.get(this.PIHome_AcceptBtn).click()
    }

    clickonDelete() {
        cy.get(this.PIHome_Delete).click()
    }

    clickConfirmDltBtn() {
        cy.get(this.PIHome_ConfrmDltBtn).click()
    }

    clickCancelDltBtn() {
        cy.get(this.PIHome_ConfrmDltBtn).click()
    }

    clickonPrevious() {
        cy.get(this.PIHome_previousBtn).click()
    }

    clickonNext() {
        cy.get(this.PIHome_NextBtn).click()
    }

    clickDltAllBtn() {
        cy.get(this.PIHome_DltallBtn).click()
    }


    //Toaster Message  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    PIHome_copyToaster = '#toast-container > .ng-trigger';

    copiedsuccessMsg() {
        cy.get(this.PIHome_copyToaster)
            .should('be.visible')
            .and('contain.text', 'Link copied! ')
            .and('contain.text', 'The parent registration link has been copied to clipboard.');
    }

    acceptedsuccessMsg() {
        cy.get(this.PIHome_copyToaster)
            .should('be.visible')
            .and('contain.text', 'Member accepted ')
            .and('contain.text', ' have been added to the academy.');
    }

    emailSuccessMsg() {
        cy.get(this.PIHome_copyToaster)
            .should('be.visible')
            .and('contain.text', 'Email sent! ')
            .and('contain.text', 'Parent consent mail have been sent.');
    }

    dltedsuccessMsg() {
        cy.get(this.PIHome_copyToaster)
            .should('be.visible')
            .and('contain.text', 'Deleted!')
            .and('contain.text', ' The member deleted successfully.');
    }

    dltedAllsuccessMsg() {
        cy.get(this.PIHome_copyToaster)
            .should('be.visible')
            .and('contain.text', 'Deleted!')
            .and('contain.text', ' The selected members deleted successfully.');
    }


}