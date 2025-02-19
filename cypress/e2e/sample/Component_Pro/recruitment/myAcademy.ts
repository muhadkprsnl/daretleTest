export class myAcademyPlayers {

    clickonMyAcademyPlayers() {
        cy.get('.w-100.mb-5 > .d-flex > :nth-child(2)').click()
    }

    removeRequest() {
        cy.get('#publicDiv > .w-100.pb-4 > :nth-child(1) > .student-contain > [style="cursor: pointer;"] > .mat-ripple').click();
    }

    nextPageRecruitment() {
        // Select the "Next" button
        cy.get('button.btn-outline-primary').contains('Next').click();
    }

    previousPageRecruitment() {

        // Select the "Previous" button
        cy.get('button.btn-outline-primary').contains('Previous').click();

    }


    clickacceptReq() {
        cy.get('#exclusiveDiv > .w-100.pb-4 > [style=""] > .student-contain > [style="cursor: pointer;"] > .mat-ripple').eq(0).click(); // Index starts at 0
        cy.get('#publicDiv > .w-100.pb-4 > :nth-child(2) > .student-contain > .profile > [style="margin: auto 0;"] > .title').eq(0).click(); // Index starts at 0
    }




}



