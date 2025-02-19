import { add } from "cypress/types/lodash";
import { adminInfo } from "./adminInfo"

const addAdmin = new adminInfo();

export class addAdminClass {

    playerCount = ':nth-child(1) > .col-12 > .row > .additional-players'
    close_addInfo = ':nth-child(2) > :nth-child(1) > [style="margin: 0;"] > .additional-players';


    checkfunction() {
        addAdmin.clickSave()
    }

    addMember() {
        cy.get(this.close_addInfo).click();
        addAdmin.clickSave()
        this.verifyPlayersAddedCount();
        addAdmin.clickNext();
        addAdmin.clickConform()
        addAdmin.clickConformPop_up()
        addAdmin.verifyStudentName();
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