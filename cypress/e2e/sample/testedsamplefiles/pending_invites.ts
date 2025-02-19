
import { faker } from '@faker-js/faker';
import 'cypress-file-upload';


export class PendingInvites {



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

    //          additonal Info>>>>>>>>>>>>>>>>>>>>>>>
    pI_addtionalInfo = '.mt-2 > :nth-child(1) > .row > .additional-players';


    //          physical Car>>>>>>>>>>>>>>>>>>>>>>>>>
    pI_physicalHeader = cy.get('#card1 > .card > .card-body > .header-players')
    // private pI_height: string = "input[placeholder='cm']";









    //*********Visit URLs***********
    visitPendinginvites() {
        cy.visit('https://academy-dev.dartle.app/self-registration/6451f714413fa18c66462066', { failOnStatusCode: false });
    }

    visitMembers() {
        cy.visit('https://academy-dev.dartle.app/members/list', { failOnStatusCode: false });
    }

    //*********Click Actions***********
    clickSave() {
        cy.get(this.pI_save).click();
    }

    clickNext() {
        cy.get(this.pI_next).click();
    }

    clickConform() {
        cy.get(this.pI_conform).click();
    }

    clickConformPop_up() {
        cy.get(this.pI_ConformNotification).click();
    }

    clickMembers() {
        cy.get(this.pI_Members).click();
    }

    clickpendingInvites() {
        cy.get(this.pI_pendingInvites).click();
    }

    // Click in License section>>>>>>>>>>>>>>>>>>>>
    clickLicenseupload() {
        cy.get(this.pI_licenseUpload).click()
    }

    clickChooseFile() {
        cy.get(this.pI_popup_ChooseFile_btn).click()
    }

    clickUpload() {
        cy.get(this.pI_popup_Upload_btn).click()
    }

    clickLicenseCancel() {
        cy.get(this.pI_popup_Cancel_btn).click()
    }

    clickPopupClose() {
        cy.get(this.pI_popup_Close).click()
    }


    //          additonal Info>>>>>>>>>>>>>>>>>>>>>>>
    clickAdditionalInfo() {
        cy.get(this.pI_addtionalInfo).click();
    }







    //************Enter Names************

    // Function to enter physical height
    //enterPhysicalHeight(height: number) {
    //     cy.get(this.pI_height)
    //         .should('have.attr', 'placeholder', 'cm') // Check placeholder
    //         .type(height.toString()); // Convert number to string before typing
    // }

    enterEmail(email: string) {
        cy.get(this.pI_email)
            .should('have.attr', 'placeholder', 'email@example.com') // Check placeholder
            .type(email);
    }

    enterFname(fname: string) {
        cy.get(this.pI_firstName)
            //.should('have.attr', 'placeholder', 'John') // Check placeholder
            .type(fname);
    }

    enterLname(lname: string) {
        cy.get(this.pI_lName)
            .should('have.attr', 'placeholder', 'Doe') // Check placeholder
            .type(lname);
    }

    enterUsername(username: string) {
        const randomSuffix = Math.floor(100 + Math.random() * 900).toString();
        const newUsername = `${username}${randomSuffix}`;

        cy.get(this.pI_username)
            .should('have.attr', 'placeholder', 'username') // Check placeholder
            .clear()
            .type(newUsername); // Type modified username
    }

    //************Select Options************
    selectGender(gender: string) {
        cy.get(this.pI_gnder).select(gender); // Select gender
    }

    selectMembershipPlan(plan: string) {
        cy.get(this.pI_membershipPlan).select(plan); // Select membership plan
    }

    //************Select Date************
    selectYear(year: number) {
        cy.get(this.pI_calendar).click(); // Opens calendar
        cy.get('.mdc-button__label > span').click(); // Open year view
        cy.get(`button[aria-label='${year}']`).click(); // Select specified year
    }

    selectMonth(month: string, year: number) {
        cy.get(`button[aria-label='${month} ${year}']`).click(); // Select month in specified year
    }

    selectDay(month: string, day: number, year: number) {
        cy.get(`button[aria-label='${month} ${day}, ${year}']`).click(); // Select exact date
    }

    selectDate(month: string, day: number, year: number) {
        this.selectYear(year);
        this.selectMonth(month, year);
        this.selectDay(month, day, year);

        this.checkAgeAndShowParentDangerText(day, month, year);
    }



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

    //************ Parent Information Entry ************

    // Enter parent email
    enterPmail(email: string) {
        cy.get(this.pI_parentEmail)
            .should('have.attr', 'placeholder', 'email@example.com') // Check placeholder
            .type(email);
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
            .should('have.attr', 'placeholder', 'Doe') // Check placeholder
            .clear() // Clear input field
            .type(randomLname); // Type generated last name
    }

    // Enter a random parent full name
    randomPfullname() {
        this.randomPfname();
        this.randomPlname();
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

    // Function to fill out all parent info fields
    parentInfo(email: string) {
        this.enterPmail(email);
        this.randomPfname();
        this.randomPlname();
        this.enterPhoneno();
        this.parentRelation();
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

    //        License and Certificates

    // Function to upload a file given its path
    uploadFile(filePath: string) {
        this.clickLicenseupload();
        this.clickChooseFile();

        // Upload the file passed as an argument
        cy.get(this.pI_popup_ChooseFile_btn).attachFile(filePath);  // `attachFile` requires `cypress-file-upload` plugin

        this.clickUpload();
    }

    //        addtional Infgo>>>>>>>>>>>>>>>>>>





    //         Notifications>>>>>>>>>>>>>>>>>>>

    emailSentnotification() {
        cy.get(this.pI_emailNotification).as('mailSent');  // Alias the element
        cy.get('@mailSent').should('be.visible');
        cy.get('@mailSent').should('contain', 'Invitation Sent!')
            .and('contain', 'Mail has been sent to students.');
    }







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

    private typedStudentName: string;
    private typedParentName: string;

    constructor() {
        this.typedStudentName = ''; // Initialize student name
        this.typedParentName = '';  // Initialize parent name
    }

    // Generate and store a random student name
    randomStudentName() {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        this.typedStudentName = `${firstName} ${lastName}`;

        // Input first and last names for the student
        cy.get(this.pI_firstName).clear().type(firstName);
        cy.get(this.pI_lName).clear().type(lastName);
    }

    // Generate and store a random parent name
    randomParentName() {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        this.typedParentName = `${firstName} ${lastName}`;

        // Input first and last names for the parent
        cy.get(this.pI_parentFName).clear().type(firstName);
        cy.get(this.pI_parentLName).clear().type(lastName);
    }

    // Verify stored student name in the members section
    verifyStudentName() {
        this.visitMembers();
        this.clickMembers();
        this.clickpendingInvites();
        cy.get(this.pI_memberName).should('contain', this.typedStudentName);
    }



    //************ Random Student Information ************

    // Generate random student information (email, name, username, gender)
    randomStudentInfo() {
        this.randomEmail();
        this.randomStudentName(); // Use stored student name for consistency
        this.randomUsername();
        this.randomGender();
    }

    //   random file checking>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // Array of paths to the test files in the fixtures folder
    // private readonly automatedSupportedFiles: string[] = [
    //     'testfile-jpg.jpg',  // File located in cypress/fixtures
    //     'testfile.png',
    //     'Sample-pdf.pdf'
    // ];

    // Main upload function
    // randomUploadFile() {
    //     this.clickLicenseupload();
    //     this.clickChooseFile();

    //     // Select a random file from the supported formats
    //     const randomFile1 = this.automatedSupportedFiles[Math.floor(Math.random() * this.automatedSupportedFiles.length)];

    //     // Attach the file for upload using `attachFile`
    //     cy.get(this.pI_popup_ChooseFile_btn).attachFile(randomFile1);

    //     this.clickUpload();
    //     this.clickPopupClose();
    // }






    createPlayer(fname: string, lname: string, email: string, gender: string, username: string) {
        this.visitPendinginvites();
        this.enterEmail(email)
        this.selectDate('January', 15, 2005);
        this.enterFname(fname);
        this.enterLname(lname);
        this.enterUsername(username)
        this.selectGender(gender);
        this.clickSave();
        this.clickNext();
        this.clickConform();  //Corrected spelling from 'Conform' to 'Confirm'
        this.clickConformPop_up();  //Ensure this method exists
        this.emailSentnotification();
    }
    // create valid random player
    createRandomPlayer() {
        this.visitPendinginvites();
        this.randomStudentInfo();
        this.selectDate('January', 15, 2005);
        this.parentInfo('mk@1feh334.com');
        this.clickSave();
        this.clickNext();
        this.clickConform();  // Corrected spelling
        this.clickConformPop_up();  // Ensure this method exists
        this.emailSentnotification();
        this.verifyStudentName();
    }


    // create valid random player
    createValidPlayer(email: string) {
        this.visitPendinginvites();
        this.enterEmail(email)
        this.selectDate('January', 15, 2005);
        this.randomStudentName();
        this.randomUsername()
        this.randomGender();
        this.clickSave();
        this.clickNext();
        this.clickConform();  //Corrected spelling from 'Conform' to 'Confirm'
        this.clickConformPop_up();   //Ensure this method exists
        this.emailSentnotification();

    }

    addionalInfo() {
        this.clickAdditionalInfo();
        //this.enterPhysicalHeight(30)
    }



}
