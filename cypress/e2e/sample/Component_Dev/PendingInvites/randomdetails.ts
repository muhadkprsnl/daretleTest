import { faker } from '@faker-js/faker';



export class randomDetails {


    pI_email = ':nth-child(3) > :nth-child(1) > .form-group > div.col-sm-12 > .form-control';
    pI_calendar = '.mat-datepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target';
    pI_firstName = ':nth-child(3) > :nth-child(3) > .form-group > div.col-sm-12 > .form-control'
    pI_lName = ':nth-child(4) > .form-group > div.col-sm-12 > .form-control';
    pI_gnder = ':nth-child(6) > .form-group > div.col-sm-12 > .form-control';
    pI_save = '.mt-2 > :nth-child(1) > .row > [style="display: flex; justify-content: flex-end;"] > .btn';
    pI_next = ':nth-child(1) > .col-12 > .row > [style="display: flex; justify-content: flex-end;"] > .btn';
    pI_conform = '[style="display: flex; justify-content: flex-end;"] > .btn';
    pI_ConformNotification = '.swal2-confirm'
    pI_username = ':nth-child(3) > .col-md-12 > .form-group > div.col-sm-12 > .form-control';
    pI_Members = '.ng-tns-c1974261705-4 > .mat-mdc-list-item';
    pI_pendingInvites = '[title="Pending Verifications"]';
    pI_memberName = ':nth-child(2) > .card-body > .card-body2 > [style="display: flex;"] > [style="display: flex; flex-direction: column;"] > .profile-name';
    pI_emailNotification = '#toast-container > .ng-trigger'
    pI_parentDangertext = '.text-danger';
    pI_parentEmail = ':nth-child(6) > .col-md-12 > .form-group > div.col-sm-12 > .form-control';
    pI_parentFName = ':nth-child(6) > :nth-child(2) > .form-group > div.col-sm-12 > .form-control';
    pI_parentLName = ':nth-child(6) > :nth-child(3) > .form-group > div.col-sm-12 > .form-control';
    pI_parentPhone = ':nth-child(7) > :nth-child(1) > .form-group > div.col-sm-12 > .form-control';
    // Selector for the parent relation input field
    private pI_parentRelation: string = ':nth-child(7) > :nth-child(2) > .form-group > div.col-sm-12 > .form-control';
    pI_licenseUpload = '.media-container-empty';
    pI_additionalInfoBtn = '.mt-2 > :nth-child(1) > .row > .additional-players';
    pI_membershipPlan = '.col-md-6.ng-star-inserted > .form-group > div.col-sm-12 > .form-control';
    pI_popup_ChooseFile_btn = '.btn-dark';
    pI_popup_Upload_btn = '.btn-success';
    pI_popup_Cancel_btn = '.btn-light';
    pI_popup_Close = '.close > span';










    //************ Random Information Section ************

    // Generate a random email
    randomEmail() {
        const randomEmail = faker.internet.email();

        cy.get(this.pI_email)
            .should('have.attr', 'placeholder', 'email@example.com') // Check placeholder
            .clear() // Clear input field
            .type(randomEmail); // Type generated email
    }

    // Generate a random username
    randomUsername() {
        const randomUsername = faker.internet.userName();

        cy.get(this.pI_username)
            .should('have.attr', 'placeholder', 'username') // Check placeholder
            .clear() // Clear input field
            .type(randomUsername); // Type generated username
    }

    // Select a random gender
    randomGender() {
        const genderOptions = ["Male", "Female", "Others"];
        const randomGender = genderOptions[Math.floor(Math.random() * genderOptions.length)];

        cy.get(this.pI_gnder).select(randomGender); // Select randomly chosen gender
    }

    //************ Random Name Generation ************

    public randomStudentName1: string;
    private typedParentName: string;

    constructor() {
        this.randomStudentName1 = ''; // Initialize student name
        this.typedParentName = '';  // Initialize parent name
    }

    // Function to generate and store a random student name
    randomStudentName() {
        // Call randomFname and randomLname to input first and last names
        const firstName = this.randomFname(); // Generate and input first name
        const lastName = this.randomLname();  // Generate and input last name

        // Combine first name and last name into a full name
        this.randomStudentName1 = `${firstName} ${lastName}`;
    }

    // Function to generate and input a random first name
    randomFname(): string {
        const firstName = faker.name.firstName();
        cy.get(this.pI_firstName).clear().type(firstName);
        return firstName; // Return generated first name
    }

    // Function to generate and input a random last name
    randomLname(): string {
        const lastName = faker.name.lastName();
        cy.get(this.pI_lName).clear().type(lastName);
        return lastName; // Return generated last name
    }


    // // Generate and store a random parent name
    // randomParentName() {
    //     const firstName = faker.name.firstName();
    //     const lastName = faker.name.lastName();
    //     this.typedParentName = `${firstName} ${lastName}`;

    //     // Input first and last names for the parent
    //     cy.get(this.pI_parentFName).clear().type(firstName);
    //     cy.get(this.pI_parentLName).clear().type(lastName);
    // }

    // Verify stored student name in the members section
    // verifyStudentName() {
    //     this.visitMembers();
    //     this.clickMembers();
    //     this.clickpendingInvites();
    //     cy.get(this.pI_memberName).should('contain', this.typedStudentName);
    // }



    //************ Random Student Information ************

    // Generate random student information (email, name, username, gender)
    randomStudentInfo() {
        this.randomEmail();
        this.randomStudentName(); // Use stored student name for consistency
        this.randomUsername();
        this.randomGender();
    }


    // // create valid random player
    // createRandomPlayer() {
    //     this.visitPendinginvites();
    //     this.randomStudentInfo();
    //     this.selectDate('January', 15, 2005);
    //     this.parentInfo('mk@1feh334.com');
    //     this.clickSave();
    //     this.clickNext();
    //     this.clickConform();  // Corrected spelling
    //     this.clickConformPop_up();  // Ensure this method exists
    //     this.emailSentnotification();
    //     this.verifyStudentName();
    // }
}