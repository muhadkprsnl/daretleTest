import { add } from "cypress/types/lodash";
import { coachPersonalInfo } from "./persomalInfo"

const addplayer = new coachPersonalInfo();

export class addCoach {

    playerCount = ':nth-child(1) > .col-12 > .row > .additional-players'
    close_addInfo = ':nth-child(2) > :nth-child(1) > [style="margin: 0;"] > .additional-players';


    checkfunction() {
        addplayer.clickSave()
    }

    addMember() {
        cy.get(this.close_addInfo).click();
        addplayer.clickSave()
        this.verifyPlayersAddedCount();
        addplayer.clickNext();
        addplayer.clickConform()
        addplayer.clickConformPop_up()
        addplayer.verifyStudentName();
    }

    verifyPlayersAddedCount() {
        // Selector for the sentence element


        cy.get(this.playerCount, { timeout: 10000 })
            .should('be.visible')
            .invoke('text')
            .then((text) => {
                // Split the sentence by spaces to get the first word
                const [countText] = text.trim().split(' ');

                // Parse the first word as a number
                const count = parseInt(countText, 10);

                // Assert that the count is greater than zero
                expect(count).to.be.greaterThan(0);
            });
    }




}