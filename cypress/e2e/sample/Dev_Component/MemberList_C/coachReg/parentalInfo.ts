import { faker } from '@faker-js/faker';
import { coachPersonalInfo } from "./persomalInfo"

export class parentalInfo {

    pI_parentDangertext = '.text-danger';
    pI_parentEmail = ':nth-child(6) > .col-md-12 > .form-group > div.col-sm-12 > .form-control';
    pI_parentFName = ':nth-child(6) > :nth-child(2) > .form-group > div.col-sm-12 > .form-control';
    pI_parentLName = ':nth-child(6) > :nth-child(3) > .form-group > div.col-sm-12 > .form-control';
    pI_parentPhone = ':nth-child(7) > :nth-child(1) > .form-group > div.col-sm-12 > .form-control';
    // Selector for the parent relation input field
    private pI_parentRelation: string = ':nth-child(7) > :nth-child(2) > .form-group > div.col-sm-12 > .form-control';



    //************ Parent Info Section ************

    // Function to calculate age based on the selected day, month, and year
    calculateAge(day: number, month: string, year: number) {
        const today = new Date();
        const birthDate = new Date(year, new Date(`${month} 1`).getMonth(), day); // Convert month to zero-indexed
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Function to check if age is under 13 and show the danger text if necessary
    checkAgeAndShowParentDangerText(day: number, month: string, year: number) {
        const age = this.calculateAge(day, month, year);

        if (age < 13) {
            this.parentDangerText(); // Calls parentDangerText if age is under 13
        }
    }

    // Function to show parent danger text
    parentDangerText() {
        cy.get(this.pI_parentDangertext).as('pDangerText'); // Alias the element
        cy.get('@pDangerText').should('be.visible')
            .and('contain', '*Parent/Guardian info is compulsory for players under 13');
    }

    selectDate(month: string, day: number, year: number) {
        this.checkAgeAndShowParentDangerText(day, month, year);
    }

    //************ Parent Information Entry ************

    // Enter parent email
    enterPmail(email: string) {
        cy.get(this.pI_parentEmail)
            .should('have.attr', 'placeholder', 'email@example.com') // Check placeholder
            .type(email);
    }

    // Generate a random email
    randomPemail() {
        const randomEmail = faker.internet.email();

        cy.get(this.pI_parentEmail)
            .should('have.attr', 'placeholder', 'email@example.com') // Check placeholder
            .clear() // Clear input field
            .type(randomEmail); // Type generated email
    }

    // Generate and enter a random parent first name
    randomPfname() {
        const randomFname = faker.name.firstName();

        cy.get(this.pI_parentFName)
            .clear() // Clear input field
            .type(randomFname); // Type generated first name
    }

    // Generate and enter a random parent last name
    randomPlname() {
        const randomLname = faker.name.lastName();

        cy.get(this.pI_parentLName)
            .should('have.attr', 'placeholder', 'Enter last name') // Check placeholder
            .clear() // Clear input field
            .type(randomLname); // Type generated last name
    }


    // Helper function to generate a random 10-digit phone number
    generateRandomPhoneNumber() {
        const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
        return randomNumber.toString();
    }

    // Enter a random parent phone number
    enterPhoneno() {
        const randomPhoneNumber = this.generateRandomPhoneNumber();
        cy.get(this.pI_parentPhone)
            .type(randomPhoneNumber); // Enter generated phone number
    }

    // Define the possible relationships as a readonly array
    private readonly relations: string[] = ['Father', 'Mother', 'Guardian', 'Uncle', 'Aunt', 'Grandparent', 'Sibling'];



    // Function to select a random relation and type it in the field
    parentRelation() {
        // Select a random relation from the array
        const randomRelation = this.relations[Math.floor(Math.random() * this.relations.length)];

        cy.get(this.pI_parentRelation)
            .should('have.attr', 'placeholder', 'Parent') // Check placeholder
            .type(randomRelation);
    }

    //   Danger text   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    PI_dtPmail = '.form-group > .input-group > .text-danger';
    PI_dtPFname = ':nth-child(2) > .form-group > .input-group > .text-danger';
    PI_dtPhonenmbr = ':nth-child(7) > :nth-child(1) > .form-group > .input-group';

    dtPmail() {
        cy.get(this.PI_dtPmail)
            .contains('*Enter valid email address.')
    }

    dtFname() {
        cy.get(this.PI_dtPFname)
            .contains('*First name is required.')
    }

    dtPhonenmbr() {
        cy.get(this.PI_dtPhonenmbr)
            .contains('*Please enter a Phone number.')
    }



    // Function to fill out all parent info fields
    enterParentInfo(email: string) {
        this.selectDate('January', 15, 2000);
        this.enterPmail(email);
        this.randomPfname();
        this.randomPlname();
        this.enterPhoneno();
        this.parentRelation();
    }

    randomParentInfo() {
        this.selectDate('January', 15, 2000);
        this.randomPemail();
        this.randomPfname();
        this.randomPlname();
        this.enterPhoneno();
        this.parentRelation();

    }
}