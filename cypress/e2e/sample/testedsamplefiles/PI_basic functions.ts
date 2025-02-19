
export class PI_Basicfunc {



    //pI_email = ':nth-child(3) > :nth-child(1) > .form-group > div.col-sm-12 > .form-control';
    // pI_calendar = '.mat-datepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target';
    pL_firstName = ':nth-child(3) > :nth-child(3) > .form-group > div.col-sm-12 > .form-control'
    // pL_lName = ':nth-child(4) > .form-group > div.col-sm-12 > .form-control';
    // pL_gnder = ':nth-child(6) > .form-group > div.col-sm-12 > .form-control';
    // pL_save = '.mt-2 > :nth-child(1) > .row > [style="display: flex; justify-content: flex-end;"] > .btn';
    // pL_next = ':nth-child(1) > .col-12 > .row > [style="display: flex; justify-content: flex-end;"] > .btn';
    // pL_conform = '[style="display: flex; justify-content: flex-end;"] > .btn';
    // pl_ConformNotification = '.swal2-confirm'
    // pI_username = ':nth-child(3) > .col-md-12 > .form-group > div.col-sm-12 > .form-control';
    // pI_Members = '.ng-tns-c1974261705-4 > .mat-mdc-list-item';
    // pI_pendingInvites = '[title="Pending Verifications"]';
    // pI_memberName = ':nth-child(2) > .card-body > .card-body2 > [style="display: flex;"] > [style="display: flex; flex-direction: column;"] > .profile-name';
    // pI_emailNotification = '#toast-container > .ng-trigger'
    // pI_parentDangertext = '.text-danger';
    // pI_parentEmail = ':nth-child(6) > .col-md-12 > .form-group > div.col-sm-12 > .form-control';
    // pI_parentFName = ':nth-child(6) > :nth-child(2) > .form-group > div.col-sm-12 > .form-control';
    // pI_parentLName = ':nth-child(6) > :nth-child(3) > .form-group > div.col-sm-12 > .form-control';
    // pI_parentPhone = ':nth-child(7) > :nth-child(1) > .form-group > div.col-sm-12 > .form-control';
    // // Selector for the parent relation input field
    // private pI_parentRelation: string = ':nth-child(7) > :nth-child(2) > .form-group > div.col-sm-12 > .form-control';
    // pI_licenseUpload = '.media-container-empty';
    // pI_additionalInfoBtn = '.mt-2 > :nth-child(1) > .row > .additional-players';
    // pI_membershipPlan = '.col-md-6.ng-star-inserted > .form-group > div.col-sm-12 > .form-control';
    // pI_popup_ChooseFile_btn = '.btn-dark';
    // pI_popup_Upload_btn = '.btn-success';
    // pI_popup_Cancel_btn = '.btn-light';
    // pI_popup_Close = '.close > span';

    //          additonal Info>>>>>>>>>>>>>>>>>>>>>>>
    // pI_addtionalInfo = '.mt-2 > :nth-child(1) > .row > .additional-players';


    // //          physical Car>>>>>>>>>>>>>>>>>>>>>>>>>
    // pI_physicalHeader = cy.get('#card1 > .card > .card-body > .header-players')
    // // private pI_height: string = "input[placeholder='cm']";



    //*********Visit URLs***********
    //visitPendinginvites() {
    //     cy.visit('https://academy-dev.dartle.app/self-registration/6451f714413fa18c66462066', { failOnStatusCode: false });
    // }

    // visitMembers() {
    //     cy.visit('https://academy-dev.dartle.app/members/list', { failOnStatusCode: false });
    // }

    //*********Click Actions***********
    // clickSave() {
    //     cy.get(this.pL_save).click();
    // }

    // clickNext() {
    //     cy.get(this.pL_next).click();
    // }

    // clickConform() {
    //     cy.get(this.pL_conform).click();
    // }

    // clickConformPop_up() {
    //     cy.get(this.pl_ConformNotification).click();
    // }

    // clickMembers() {
    //     cy.get(this.pI_Members).click();
    // }

    // clickpendingInvites() {
    //     cy.get(this.pI_pendingInvites).click();
    // }

    // // Click in License section>>>>>>>>>>>>>>>>>>>>
    // clickLicenseupload() {
    //     cy.get(this.pI_licenseUpload).click()
    // }

    // clickChooseFile() {
    //     cy.get(this.pI_popup_ChooseFile_btn).click()
    // }

    // clickUpload() {
    //     cy.get(this.pI_popup_Upload_btn).click()
    // }

    // clickLicenseCancel() {
    //     cy.get(this.pI_popup_Cancel_btn).click()
    // }

    // clickPopupClose() {
    //     cy.get(this.pI_popup_Close).click()
    // }


    //          additonal Info>>>>>>>>>>>>>>>>>>>>>>>
    // clickAdditionalInfo() {
    //     cy.get(this.pI_addtionalInfo).click();
    // }

    // enterEmail(email: string) {
    //     cy.get(this.pI_email)
    //         .should('have.attr', 'placeholder', 'email@example.com') // Check placeholder
    //         .type(email);
    // }

    // //************Select Date************
    // selectYear(year: number) {
    //     cy.get(this.pI_calendar).click(); // Opens calendar
    //     cy.get('.mdc-button__label > span').click(); // Open year view
    //     cy.get(`button[aria-label='${year}']`).click(); // Select specified year
    // }

    // selectMonth(month: string, year: number) {
    //     cy.get(`button[aria-label='${month} ${year}']`).click(); // Select month in specified year
    // }

    // selectDay(month: string, day: number, year: number) {
    //     cy.get(`button[aria-label='${month} ${day}, ${year}']`).click(); // Select exact date
    // }

    // selectDate(month: string, day: number, year: number) {
    //     this.selectYear(year);
    //     this.selectMonth(month, year);
    //     this.selectDay(month, day, year);

    //     //this.checkAgeAndShowParentDangerText(day, month, year);
    // }

    enterFname(fname: string) {
        cy.get(this.pL_firstName)
            //.should('have.attr', 'placeholder', 'John') // Check placeholder
            .type(fname);
    }

    // enterLname(lname: string) {
    //     cy.get(this.pL_lName)
    //         .should('have.attr', 'placeholder', 'Doe') // Check placeholder
    //         .type(lname);
    // }

    // enterUsername(username: string) {
    //     const randomSuffix = Math.floor(100 + Math.random() * 900).toString();
    //     const newUsername = `${username}${randomSuffix}`;

    //     cy.get(this.pI_username)
    //         .should('have.attr', 'placeholder', 'username') // Check placeholder
    //         .clear()
    //         .type(newUsername); // Type modified username
    // }

    // selectGender(gender: string) {
    //     cy.get(this.pL_gnder).select(gender); // Select gender
    // }

    // emailSentnotification() {
    //     cy.get(this.pI_emailNotification).as('mailSent');  // Alias the element
    //     cy.get('@mailSent').should('be.visible');
    //     cy.get('@mailSent').should('contain', 'Invitation Sent!')
    //         .and('contain', 'Mail has been sent to students.');
    // }





    createPlayer(fname: string, lname: string, email: string, gender: string, username: string) {
        // this.visitPendinginvites();
        // this.enterEmail(email)
        // this.selectDate('January', 15, 2005);
        this.enterFname(fname);
        // this.enterLname(lname);
        // this.enterUsername(username)
        // this.selectGender(gender);
        // this.clickSave();
        // this.clickNext();
        // this.clickConform();  //Corrected spelling from 'Conform' to 'Confirm'
        // this.clickConformPop_up();  //Ensure this method exists
        // this.emailSentnotification();
    }


}