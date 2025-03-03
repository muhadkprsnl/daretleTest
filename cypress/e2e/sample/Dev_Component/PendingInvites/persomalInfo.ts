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

    selecttDate(startYear: number, startMonth: string, startDay: number) {
        // Open the date picker
        cy.get(this.pI_calendar).click();

        // Open the year picker and select the year
        cy.get('.mat-calendar-period-button').click();
        cy.contains('.mat-calendar-body-cell-content', startYear.toString()).click();

        // Select the month
        cy.contains('.mat-calendar-body-cell-content', startMonth.toUpperCase()).click();

        // Select the day
        cy.contains('.mat-calendar-body-cell', startDay.toString()).click();
    }

    //    warning message>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    invalidDetailsWarning() {
        cy.get(this.pI_invalidWarning)
            .should('be.visible')
            .and('contain.text', 'Invalid Data')
            .and('contain.text', 'Please check the entered form for any invalid data.');
    }



    //    danger text >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    pi_dtFname = ':nth-child(3) > .form-group > .input-group > .text-danger';


    dtfname() {
        cy.get(this.pi_dtFname)
            .contains('*First name is required.')
        this.invalidDetailsWarning();
    }










    //    personal info >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    enterPersonalInfo(email: string, fname: string, lname: string, username: string, gender: string, plan: string) {
        this.visitPendinginvites();
        this.enterEmail(email);
        this.selecttDate(2000, 'Jan', 15);
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