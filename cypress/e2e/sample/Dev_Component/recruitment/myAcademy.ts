export class myAcademyPlayers {

    clickonMyAcademyPlayers() {
        cy.get('.w-100.mb-5 > .d-flex > :nth-child(2)').click()
    }


    //Public Recruitment>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    removeRequestonPublic() {
        cy.get('#publicDiv > .w-100.pb-4 > :nth-child(1) > .student-contain > [style="cursor: pointer;"] > .mat-ripple').click();
    }


    nextPagePublic() {
        // Select the "Next" button
        cy.get('#publicDiv > .w-100.pb-4 > .mt-3 > :nth-child(3)').contains('Next').click();

    }

    previousPagePublic() {
        // Select the "Previous" button
        cy.get('#publicDiv > .w-100.pb-4 > .mt-3 >:nth-child(1)').contains('Previous').click();
    }


    //Exclusive Request Sent>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    clickonExclusiveRequestSent() {
        cy.get('#exclusiveRequest').click();
    }

    removeRequestonExcl() {
        cy.get('#exclusiveDiv > .w-100.pb-4 > :nth-child(1) > .student-contain > [style="cursor: pointer;"] > .mat-ripple').click();
    }

    searchMyacademyExclusivePlayer(name: string) {
        cy.get('#exclusiveDiv > .search-contain > .col-4 > .row > .input-group > .form-control').type(name)
    }

    nextPageExclusive() {
        // Select the "Next" button
        cy.get('#exclusiveDiv > .w-100.pb-4 > .mt-3 > :nth-child(3)').contains('Next').click();
    }

    previousPageExclusive() {
        // Select the "Previous" button
        cy.get('#exclusiveDiv > .w-100.pb-4 > .mt-3 >:nth-child(1)').contains('Previous').click();
    }


    // clickacceptReq() {
    //     cy.get('#exclusiveDiv > .w-100.pb-4 > [style=""] > .student-contain > [style="cursor: pointer;"] > .mat-ripple').eq(0).click(); // Index starts at 0
    //     cy.get('#publicDiv > .w-100.pb-4 > :nth-child(2) > .student-contain > .profile > [style="margin: auto 0;"] > .title').eq(0).click(); // Index starts at 0
    // }

    //Toaster>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    toaster = '#toast-container > .ng-trigger'


    requestRemovedMsg() {
        cy.get(this.toaster)
            .should('be.visible')
            .and('contain.text', 'Request Removed!')
            .and('contain.text', 'The request removed successfully.');
    }



}



