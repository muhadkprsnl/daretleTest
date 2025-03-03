import { playerList } from "../membersListing/playerListing.ts/list"

const players = new playerList();

export class otherAcademyPlayers {

    visitRecruitment() {
        cy.visit('https://academy.dartle.app/recruitment', { failOnStatusCode: false });
        cy.wait(2000)
    }

    signout() {
        cy.wait(2000);
        cy.get('#navbarDropdown > .bi').click();
        cy.get('a.dropdown-item.text-base')
            .contains('Sign out')
            .click();
    }

    cliconkPublicrecruitment() {
        cy.get('#publicRecruitment').click();
    }


    clickonExclusiveRequirement() {
        cy.get('#exclusiveRequest').click();
    }

    searchRecruitmentPlayers() {
        cy.get('#publicDiv > .search-contain > .col-4 > .row > .input-group > .form-control').click();
    }

    clickRemoveRequest() {
        cy.get('#publicDiv > .w-100.pb-4 > :nth-child(1) > .student-contain > [style="cursor: pointer;"] > .mat-ripple').click();
    }

    // searchRecruitmentPlayer(name) {
    //     // Use Cypress to interact with the input field and type the name
    //     cy.get('#publicDiv > .search-contain > .col-4 > .row > .input-group > .form-control')
    //         .type(name)
    //         .should('have.value', name); // Optional: Assert that the input field contains the correct value
    // }



    // compareNames(): void {
    //     cy.wait(2000);
    //     const storedName = players.getStoredIndividualName();
    //     this.searchRecruitmentPlayer(storedName)
    //     if (!storedName) {
    //         cy.log('No stored individual name found.');
    //         return; // Exit if no name is stored
    //     }

    //     // Selector for player names
    //     const playerSelector = '#exclusiveDiv > .w-100.pb-4 > :nth-child(n) > .student-contain > .profile > [style="margin: auto 0;"] > .title';

    //     // Get all player names and compare with the stored name
    //     cy.get(playerSelector).then($elements => {
    //         const names = $elements.map((index, element) => Cypress.$(element).text().trim()).get();

    //         const matchFound = names.some(name => name === storedName);

    //         if (matchFound) {
    //             cy.log(`Match found for: ${storedName}`);
    //             expect(matchFound).to.be.true; // Example assertion
    //         }
    //         // else {
    //         //     cy.log(`No match found for: ${storedName}`);
    //         //     expect(matchFound).to.be.false; // Example assertion
    //         // }
    //     });
    // }

    getDisplayedName(): Cypress.Chainable<string> {
        return cy.get('.title').invoke('text').then((name) => name.trim());
    }

    // Function to compare the stored name with the displayed name
    verifyStoredName() {
        const storedName = players.getStoredIndividualName();

        if (storedName) {
            this.getDisplayedName().then((displayedName) => {
                expect(displayedName).to.equal(storedName);
                cy.log(`Stored Name: ${storedName} matches Displayed Name: ${displayedName}`);
            });
        } else {
            throw new Error("Stored name is undefined.");

        }

    }



}
