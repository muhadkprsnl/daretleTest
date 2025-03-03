import { addionalInfo } from "./additionalInfo"


export class navigation {

    //           Navigation buttons  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    nav_phycsical = "div[class='card d-flex flex-column p-0'] div:nth-child(1)"
    nav_sport = "div[class='card d-flex flex-column p-0'] div:nth-child(1)"
    nav_address = "div[class='card d-flex flex-column p-0'] div:nth-child(1)"
    nav_educational = "div[class='card d-flex flex-column p-0'] div:nth-child(1)"
    nav_career = "div[class='card d-flex flex-column p-0'] div:nth-child(1)"
    //nav_achievement =


    navtoSport() {
        cy.get(this.nav_sport).click()
    }

    navtoaddress() {
        cy.get(this.nav_address).click()
    }


}