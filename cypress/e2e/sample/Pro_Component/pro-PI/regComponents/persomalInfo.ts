import { randomDetails } from "./randomdetails"
const random = new randomDetails();
export class personalInfo {

    //private random = new randomDetails();



    pI_email = ':nth-child(3) > :nth-child(1) > .form-group > div.col-sm-12 > .form-control';
    pI_calendar = '.mat-datepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target';
    pI_firstName = ':nth-child(3) > :nth-child(3) > .form-group > div.col-sm-12 > .form-control'
    pI_lName = ':nth-child(4) > .form-group > div.col-sm-12 > .form-control';
    pI_gnder = ':nth-child(6) > .form-group > div.col-sm-12 > .form-control';
    pI_save = ':nth-child(2) > :nth-child(1) > [style="margin: 0;"] > [style="display: flex; justify-content: flex-end;"] > .mat-ripple'
    pI_next = ':nth-child(1) > .col-12 > .row > [style="display: flex; justify-content: flex-end;"] > .btn';
    pI_conform = '[style="display: flex; justify-content: flex-end;"] > .btn';
    pI_ConformNotification = '.swal2-confirm'
    pI_username = ':nth-child(3) > .col-md-12 > .form-group > div.col-sm-12 > .form-control';
    pI_membershipPlan = '.col-md-6.ng-star-inserted > .form-group > div.col-sm-12 > .form-control';
    pI_memberName = ':nth-child(1) > .card-body';
    pI_invalidWarning = '#toast-container > .ng-trigger';
    pI_date = '#mat-input-0';
    pI_membrshplandropDown = '#dropdownClass';
    pI_memberIcon = 'app-menu-item.ng-tns-c4091461336-4 > .mat-mdc-list-item > .mat-mdc-list-item-icon';
    pI_icon = '[href="/members/pending"] > .mat-icon'
    PI_acceptbtn = ':nth-child(2) > .card-body > .w-100 > .btn-primary'

    //*********Visit URLs***********
    visitPendinginvites() {
        cy.visit('https://academy.dartle.app/self-registration/607e9ef5461623995dd66d9c', { failOnStatusCode: false });

    }

    visitMembers() {
        cy.visit('https://academy.dartle.app/members/list', { failOnStatusCode: false });
    }

    visitPIpage() {
        cy.get(this.pI_memberIcon).click()
        cy.get(this.pI_icon).click()
        cy.get(this.PI_acceptbtn).click()
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

    clickConformPage() {
        this.clickConform()
        this.clickConformPop_up()
    }

    clickDate() {
        cy.get('#mat-input-0').click();
    }


    // enter Infrmation   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    enterEmail(email: string) {
        cy.get(this.pI_email)
            .should('have.attr', 'placeholder', 'email@example.com') // Check placeholder
            .type(email);
    }

    verifyEmail() {
        cy.get('.text-danger')
            .contains('*Enter a valid email address.')
        this.invalidDetailsWarning();
    }

    enterFname(fname: string) {
        cy.get(this.pI_firstName)
            .should('have.attr', 'placeholder', 'Enter first name') // Check placeholder
            .type(fname);
    }

    enterLname(lname: string) {
        cy.get(this.pI_lName)
            .should('have.attr', 'placeholder', 'Enter last name') // Check placeholder
            .type(lname);
    }

    // Generate and store the full name
    storeStudentName(fname: string, lname: string) {
        this.enterFname(fname);
        this.enterLname(lname);
        this.typedStudentName = `${fname} ${lname}`; // Combine first and last names
    }

    enterUsername(username: string) {
        const randomSuffix = Math.floor(100 + Math.random() * 900).toString();
        const newUsername = `${username}${randomSuffix}`;

        cy.get(this.pI_username)
            .should('have.attr', 'placeholder', 'username') // Check placeholder
            //.clear()
            .type(newUsername); // Type modified username
    }

    clearUsername() {
        cy.get(this.pI_username)
            .clear()
    }

    duplicateUsername() {
        cy.get(this.pI_username)
            .clear()
            .type('noah.sadoi');
    }


    private typedStudentName: string;

    constructor() {
        this.typedStudentName = ''; // Initialize student name

    }


    //************Select Options************
    selectGender(gender: string) {
        cy.get(this.pI_gnder).select(gender); // Select gender
    }


    selectMembershipPlan(plan: string) {
        cy.get(this.pI_membershipPlan).select(plan); // Select membership plan
    }

    verifyMembershipPlan(plan: string) {
        cy.get(this.pI_membrshplandropDown)
            .should('contain.text', plan)
    }

    verifyMembershipPlanonMListing() {

    }

    removeMembershipPlan(plan: string) {
        cy.get(this.pI_membershipPlan).select('Select membership plan'); // Select membership plan
        // cy.get(this.pI_membrshplandropDown)
        //     .should('contain.text', 'Select membership plan')
    }

    //************Select Date************
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
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // selecttDate(startYear: number, startMonth: string, startDay: number) {
    //     // Open the date picker
    //     cy.get(this.pI_calendar).click();

    //     // Open the year picker and select the year
    //     cy.get('.mat-calendar-period-button').click();
    //     cy.contains('.mat-calendar-body-cell-content', startYear.toString()).click();

    //     // Select the month
    //     cy.contains('.mat-calendar-body-cell-content', startMonth.toUpperCase()).click();

    //     // Select the day
    //     cy.contains('.mat-calendar-body-cell', startDay.toString()).click();
    // }


    selectDate(startYear: number, startMonth: string, startDay: number): void {
        // Open the date picker
        //cy.get(this.pI_CareerStartdate).click();
        cy.get(this.pI_calendar).click();


        // Open the year picker
        cy.get('.mat-calendar-period-button').click();

        // Get the start year and last year
        cy.get(this.periodStartYear).invoke('text').then((currentStartYearText) => {
            cy.get(this.periodLastYear).invoke('text').then((currentLastYearText) => {
                // Parse startYear and lastYear as numbers
                const currentStartYearNum = parseInt(currentStartYearText.trim(), 10);
                const currentLastYearNum = parseInt(currentLastYearText.trim(), 10);

                // Navigate through the calendar years
                if (startYear < currentStartYearNum) {
                    cy.get('.mat-calendar-previous-button').click();
                } else if (startYear > currentLastYearNum) {
                    cy.get('.mat-calendar-next-button').click();
                }

                // Select the year directly if it's in the current period
                cy.contains('.mat-calendar-body-cell-content', startYear.toString()).click();

                // Select the month
                cy.contains('.mat-calendar-body-cell-content', startMonth.toUpperCase()).click();

                // Select the day
                cy.contains('.mat-calendar-body-cell', startDay.toString()).click();
            });
        });
    }


    periodStartYear = ':nth-child(1) > [data-mat-col="0"] > .mat-calendar-body-cell';
    periodLastYear = ':nth-child(6) > [data-mat-col="3"] > .mat-calendar-body-cell';



    //    warning message>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    duplicatemailToaster = '#toast-container > .ng-trigger';
    underageToaster = '#toast-container > .ng-trigger';

    invalidDetailsWarning() {
        cy.get(this.pI_invalidWarning)
            .should('be.visible')
            .and('contain.text', 'Invalid Data')
            .and('contain.text', 'Please check the entered form for any invalid data.');
    }

    duplicateMailWarning() {
        cy.get(this.duplicatemailToaster)
            .should('be.visible')
            .and('contain.text', 'Email owner is a member')
            .and('contain.text', 'This email owner is already a member of the academy.');
    }

    underageWarning() {
        cy.get(this.underageToaster)
            .should('be.visible')
            .and('contain.text', 'Underage!')
            .and('contain.text', 'Member must be atleast 3 years old.');

    }





    //    danger text >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    pi_dtFname = ':nth-child(3) > .form-group > .input-group > .text-danger';
    pi_dtUsername = ':nth-child(3) > .col-md-12 > .form-group > .input-group > .text-danger';
    pi_dtGender = '.text-danger';
    pi_dtduplicatemail = '.text-danger';


    dtfname() {
        cy.get(this.pi_dtFname)
            .contains('*First name is required.')
        this.invalidDetailsWarning();
    }

    dtUsername() {
        cy.get(this.pi_dtUsername)
            .contains('*Username already exist.')
    }

    dtGender() {
        cy.get(this.pi_dtGender)
            .contains('*Gender is required.')
    }

    //  duplicate email danger text
    dtdupliactemail() {
        cy.get(this.pi_dtduplicatemail)
            .contains('* Email address is already used by an academy member')
    }


    //  Is dusabled  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    isformsdisabled() {
        cy.get(this.pI_firstName).should('be.disabled');
        cy.get(this.pI_lName).should('be.disabled');
        cy.get(this.pI_username).should('be.disabled');
    }








    //    personal info >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    enterPersonalInfo(email: string, fname: string, lname: string, username: string, gender: string, plan: string) {
        this.visitPendinginvites();
        this.enterEmail(email);
        this.selectDate(2000, 'Jan', 15);
        this.enterFname(fname);
        this.enterLname(lname);
        this.enterUsername(username)
        this.selectGender(gender);
        //this.selectMembershipPlan(plan)
    }



    // Verify stored student name in the members section
    verifyStudentName() {
        cy.get(this.pI_memberName).should(($el) => {
            const text = $el.text(); // Get the text content of the element

            // Use OR condition to validate either typedStudentName or randomStudentName1
            expect(text).to.satisfy((name: string) =>
                name.includes(this.typedStudentName) || name.includes(random.randomStudentName1)
            );
        });
    }


    // createPlayer(fname: string, lname: string, email: string, gender: string, username: string) {
    //     this.visitPendinginvites();
    //     this.enterEmail(email)
    //     this.selectDate('January', 15, 2005);
    //     this.enterFname(fname);
    //     this.enterLname(lname);
    //     this.enterUsername(username)
    //     this.selectGender(gender);
    //     this.clickSave();
    //     this.clickNext();
    //     this.clickConform();  //Corrected spelling from 'Conform' to 'Confirm'
    //     this.clickConformPop_up();  //Ensure this method exists
    //     this.emailSentnotification();


}