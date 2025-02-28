import { ro } from "@faker-js/faker/.";
import { event } from "cypress/types/jquery";

export class addionalInfo {

    //          additonal Info>>>>>>>>>>>>>>>>>>>>>>>
    pI_addtionalInfo = '.additional-players.mt-1.mb-5.col-lg-6.p-0';

    //          physical Car>>>>>>>>>>>>>>>>>>>>>>>>>
    pI_physicalHeader = '#card1 > .card > .card-body > .header-players';
    pI_height = '#card1 > .card > .card-body > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .show-style > :nth-child(1) > .form-group > .col-sm-12 > .form-control';
    pI_Weight = '#card1 > .card > .card-body > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .show-style > :nth-child(2) > .form-group > .col-sm-12 > .form-control';

    //          additonal Info >>>>>>>>>>>>>>>>>>>>>>>
    clickAdditionalInfo() {
        cy.get(this.pI_addtionalInfo).click();
    }

    //verify Physical characteristics
    verifyPhysicalcharacteristics() {
        cy.get(this.pI_physicalHeader)
            .contains('Physical characteristics')
    }

    // // Function to enter physical height
    // enterPhysicalHeight(height: number) {
    //     cy.get(this.pI_height)
    //         .should('have.attr', 'placeholder', 'cm') // Check placeholder
    //         .type(height.toString()); // Convert number to string before typing
    // }

    // Function to enter physical height
    storedHeight: string | undefined;

    enterPhysicalHeight(height: string) {
        this.storedHeight = height;

        // Ensure the placeholder is correct
        cy.get(this.pI_height)
            .should('have.attr', 'placeholder', 'cm'); // Check placeholder

        // Attempt to type the provided height
        cy.get(this.pI_height)
            .clear() // Clear the field before typing
            .type(height) // Type the input value (string)
            .then(($input) => {
                const filteredHeight = height.replace(/\D/g, ''); // Remove all non-numeric characters
                const value = $input.val(); // Get the current value of the input

                if (filteredHeight) {
                    // If there are numeric characters
                    expect(value).to.equal(filteredHeight); // Ensure the input value matches the filtered numeric height
                } else {
                    // If no numeric characters exist
                    expect(value).to.equal(''); // Ensure the input value is empty
                }
            });
    }




    // Method to enter physical weight

    storedWeight: string | undefined;

    enterPhysicalWeight(weight: string) {
        this.storedWeight = weight;

        // Ensure the placeholder is correct
        cy.get(this.pI_Weight)
            .should('have.attr', 'placeholder', 'kg') // Check placeholder

        // Attempt to type the provided height
        cy.get(this.pI_Weight)
            .clear() // Clear the field before typing
            .type(weight) // Type the input value (string)
            .then(($input) => {
                const filteredWeight = weight.replace(/\D/g, ''); // Remove all non-numeric characters
                const value = $input.val(); // Get the current value of the input

                if (filteredWeight) {
                    // If there are numeric characters
                    expect(value).to.equal(filteredWeight); // Ensure the input value matches the filtered numeric height
                } else {
                    // If no numeric characters exist
                    expect(value).to.equal(''); // Ensure the input value is empty
                }
            });
    }


    fillphysic(height: string, weight: string) {
        this.verifyPhysicalcharacteristics();
        this.enterPhysicalHeight(height);
        this.enterPhysicalWeight(weight)

    }




    //     Sports INfo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    pI_sportsHeader = '#card2';
    pI_position = ':nth-child(2) > .card > .card-body > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .show-style > :nth-child(2) > .form-group > .col-sm-12 > .form-control';
    pI_sportsSelector = "select[name='sport_name']";

    //stored values:
    storedSport: string | undefined;
    storedPosition: string | undefined;



    verifySportsInfo() {
        cy.get(this.pI_sportsHeader)
            .contains('Sport info')
    }


    selectSport(sport: string) {
        this.storedSport = sport
        cy.get(this.pI_sportsSelector)
            .find('option')
            .first()
            .should('have.text', 'Select sport'); // Check placeholder text

        cy.get(this.pI_sportsSelector).select(sport); // Select sport
    }

    // Method to enter physical weight
    enterPosition(pos: string) {
        this.storedPosition = pos
        cy.get(this.pI_position)
            .should('have.attr', 'placeholder', 'Enter here') // Check placeholder
            .type(pos); // Convert number to string before typing
    }

    sport(sport: string, pos: string) {
        this.verifySportsInfo();
        this.selectSport(sport);
        this.enterPosition(pos);
    }


    //     Address INfo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    pI_addressHeader = '#card3';
    pI_country = '.mb-2ss > .form-group > .col-sm-12 > .dropdown > #dropdownClass';
    pI_address = ':nth-child(2) > :nth-child(1) > .form-group > .col-sm-12 > .form-control';
    pI_state = ':nth-child(2) > :nth-child(2) > .form-group > .col-sm-12 > .dropdown > #dropdownClass';
    pI_city = '.card-body > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > :nth-child(3) > :nth-child(1) > .form-group > .col-sm-12 > .form-control';
    pI_pincode = ':nth-child(3) > :nth-child(2) > .form-group > .col-sm-12 > .dropdown > #dropdownClass';

    verifyAddresssInfo() {
        cy.get(this.pI_addressHeader)
            .contains('Address info')
    }

    selectCountry(country: string) {
        // Click the dropdown to open the list of countries
        cy.get(this.pI_country).click();

        // Select the desired country from the dropdown options
        cy.get('.dropdown-menu') // Adjust this selector if necessary to match the dropdown menu container
            .contains(country) // Find the option that matches the country name
            .click();

        // Verify the selected country is displayed on the button
        cy.get(this.pI_country).should('contain.text', country);
    }


    // Method to enter physical weight
    enterAddress(address: string) {
        cy.get(this.pI_address)
            //.should('have.attr', 'placeholder', 'Enter here') // Check placeholder
            .type(address); // Convert number to string before typing
    }

    selectState(state: string) {
        cy.get(this.pI_state).click();
        cy.get('.dropdown-menu') // Adjust this selector if necessary to match the dropdown menu container
            .contains(state) // Find the option that matches the country name
            .click();
        cy.get(this.pI_state).should('contain.text', state); // Select sport
    }

    // Method to enter physical weight
    enterCity(city: string) {
        cy.get(this.pI_city)
            .should('have.attr', 'placeholder', 'Enter city') // Check placeholder
            .type(city); // Convert number to string before typing
    }

    selectPincode(pin: string) {
        cy.get(this.pI_pincode).click();
        cy.get('.dropdown-menu') // Adjust this selector if necessary to match the dropdown menu container
            .contains(pin) // Find the option that matches the country name
            .click();

        cy.get(this.pI_pincode).should('contain.text', pin); // Select sport
    }


    addressInfo(country: string, address: string, state: string, city: string, pin: string) {
        this.verifyAddresssInfo();
        this.selectCountry(country);
        this.enterAddress(address);
        this.selectState(state);
        this.enterCity(city);
        this.selectPincode(pin)
    }



    // Educational History >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


    pI_EducationHeader = '#card4 > :nth-child(1) > .card-body > .header-players';
    pI_EducationInstitute = '#card4 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > [style="margin-bottom: 0rem;"] > .col-sm-12 > .form-control';
    pI_Discipline = '#card4 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .mt-3 > .col-md-6 > .form-group > .col-sm-12 > .form-control';
    pI_EduStartyear = '#card4 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .mt-3 > :nth-child(2) > .form-group > .col-sm-12 > .form-control';
    pI_EduEndyear = '.mt-3 > :nth-child(3) > .form-group > .col-sm-12 > .form-control';
    pI_EduSave = '#card4 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .p-0 > .form-group > .col-sm-12';
    pI_dtGreaterYear = '.form-group > .col-sm-12 > .text-danger';
    pI_dtValidStYear = '.form-group > .col-sm-12 > .text-danger';
    pI_dtValidEndYear = ':nth-child(3) > .form-group > .col-sm-12 > :nth-child(2)';
    pI_deleteSavedEduCardbtn = '[style="float: right; cursor: pointer;"] > img';
    pI_SaveEduDisableBtn = '#card4 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .p-0';


    clickSaveEducation() {
        cy.get(this.pI_EduSave).click();
    }

    verifySaveBtnDisabled() {
        cy.get(this.pI_EduSave, { timeout: 10000 }).should('not.be.disabled');
    }

    dltEduCard() {
        cy.get(this.pI_deleteSavedCardbtn, { timeout: 10000 })  // Adjust the selector if necessary
            .should('be.visible')
            .click();
    }

    verifyEducational_History() {
        cy.get(this.pI_EducationHeader)
            .contains('Educational history')
    }

    // Method to enter physical weight
    enterInstitute(institute: string) {
        cy.get(this.pI_EducationInstitute)
            .should('have.attr', 'placeholder', 'Institute') // Check placeholder
            .type(institute); // Convert number to string before typing
    }

    // Method to enter physical weight
    enterDiscipline(displine: string) {
        cy.get(this.pI_Discipline)
            //.should('have.attr', 'placeholder', 'Enter here') // Check placeholder
            .type(displine); // Convert number to string before typing
    }

    // Method to enter physical weight
    enterEduStartyear(Syear: string) {
        cy.get(this.pI_EduStartyear)
            .should('have.attr', 'placeholder', 'Start year') // Check placeholder
            .type(Syear); // Convert number to string before typing
    }

    // Method to enter physical weight
    enterEduEndyear(Eyear: string) {
        cy.get(this.pI_EduEndyear)
            .should('have.attr', 'placeholder', 'End year') // Check placeholder
            .type(Eyear); // Convert number to string before typing
    }

    dtYearValidation() {
        cy.get(this.pI_dtGreaterYear, { timeout: 2000 }) // Increase timeout
            //.should('be.visible') // Ensure it is visible
            .and('contain.text', '*End year must be after start year'); // Use 'contain.text' for clarity
    }


    dtStartYearValidation() {
        cy.get(this.pI_dtValidStYear)
            .should('be.visible')
            .and('contain', '*Invalid start year');
    }

    dtEndYearValidation() {
        cy.get(this.pI_dtValidEndYear)
            .should('be.visible')
            .and('contain', '*Invalid end year');
    }

    verifySavedEduCard(institute: string, displine: string, Syear: string, Eyear: string) {
        // Wait for the education card to appear (if necessary)
        cy.get('.education-box', { timeout: 10000 }) // Adjust selector if necessary
            .should('be.visible') // Check that the card is visible
            .within(() => {
                // Verify institute name
                cy.get('.text-bold.mb-1')
                    .first()
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim().toLowerCase()).to.equal(institute.toLowerCase());
                    });

                // Verify discipline
                cy.get('.text-base.f-bold.mb-1')
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim().toLowerCase()).to.equal(displine.toLowerCase());
                    });

                // Verify years
                cy.get('.text-bold.mb-1')
                    .last()
                    .invoke('text')
                    .then((text) => {
                        // Split the range and compare the start year
                        const years = text.trim().split(' - ');
                        expect(years[0]).to.equal(Syear); // Check the start year
                        expect(years[1]).to.equal(Eyear); // Check the end year
                    });
            });
    }




    educationalINfo(institute: string, displine: string, Syear: string, Eyear: string) {
        this.verifyEducational_History();
        this.enterInstitute(institute);
        this.enterDiscipline(displine);
        this.enterEduStartyear(Syear);
        this.enterEduEndyear(Eyear);
        this.clickSaveEducation();
        this.verifySavedEduCard(institute, displine, Syear, Eyear)
        // this.dltEduCard();


    }


    //    Careers     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    pI_CareersHeader = '#card5 > :nth-child(1) > .card-body > .header-players';
    pI_Academy = '#card5 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > [style="margin-bottom: 0rem;"] > .col-sm-12 > .form-control';
    pI_Role = '#card5 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .mt-3 > .col-md-6 > .form-group > .col-sm-12 > .form-control';
    pI_CareerStartdate = '.mt-3 > :nth-child(2) > .form-group > .col-sm-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-icon-suffix > .mat-datepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target';
    pI_CareerEndDate = ':nth-child(3) > .form-group > .col-sm-12 > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-icon-suffix > .mat-datepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target';
    pI_Careersavebtn = '#card5 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .p-0 > .form-group > .col-sm-12 > .mat-ripple';
    pI_dltCareerCardbtn = '[style="float: right; cursor: pointer;"] > img';
    pI_CareerSavedCardbtn = '.ms-2';
    pI_CareerSavedBtnDisabled = '#card5 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .p-0 > .form-group > .col-sm-12';

    clickSaveCareers() {
        cy.get(this.pI_Careersavebtn)
            .click();
    }


    dltCareerCard() {
        cy.get(this.pI_dltCareerCardbtn, { timeout: 10000 })  // Adjust the selector if necessary
            .should('be.visible')
            .click();
    }

    isCareerSavebtnDisabled() {
        cy.get(this.pI_Careersavebtn)
            .should('be.disabled');
        // .should('be.disabled');
    }

    VerifyCareersHeader() {
        cy.get(this.pI_CareersHeader)
            .contains('Careers')

    }


    // Method to enter physical weight
    enterAcademy(academy: string) {
        cy.get(this.pI_Academy)
            .should('have.attr', 'placeholder', 'Enter here') // Check placeholder
            .type(academy); // Convert number to string before typing
    }

    // Method to enter physical weight
    enterRole(role: string) {
        cy.get(this.pI_Role)
            //.should('have.attr', 'placeholder', 'Enter here') // Check placeholder
            .type(role); // Convert number to string before typing
    }


    selectCareerStDate(startYear: number, startMonth: string, startDay: number): void {
        // Open the date picker
        cy.get(this.pI_CareerStartdate).click();

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

    selectCareerEndDate(endYear: number, endMonth: string, endDay: number): void {
        // Open the date picker
        cy.get(this.pI_CareerEndDate).click();


        // Open the year picker
        cy.get('.mat-calendar-period-button').click();

        // Get the start year and last year
        cy.get(this.periodStartYear).invoke('text').then((startYear) => {
            cy.get(this.periodLastYear).invoke('text').then((lastYear) => {
                // Parse startYear and lastYear as numbers
                const startYearNum = parseInt(startYear.trim(), 10);
                const lastYearNum = parseInt(lastYear.trim(), 10);

                // Navigate through the calendar years
                if (endYear < startYearNum) {
                    cy.get('.mat-calendar-previous-button').click();
                } else if (endYear > lastYearNum) {
                    cy.get('.mat-calendar-next-button').click();

                }// else {
                //     // Select the year directly if it's in the current period
                //     cy.contains('.mat-calendar-body-cell-content', Year.toString()).click();
                // }
                // Select the year directly if it's in the current period
                cy.contains('.mat-calendar-body-cell-content', endYear.toString()).click();

                // Select the month
                cy.contains('.mat-calendar-body-cell-content', endMonth.toUpperCase()).click();

                // Select the day
                cy.contains('.mat-calendar-body-cell', endDay.toString()).click();
            });
        });
    }


    dtCareerYearValidation() {
        cy.get('body').click();
        cy.get(this.pI_dtGreaterYear, { timeout: 2000 }) // Increase timeout
            .should('be.visible') // Ensure it is visible
            .and('contain.text', '*End date must be after start date'); // Use 'contain.text' for clarity
    }

    verifySavedCareerCard(academy: string, role: string, startMonth: string, startYear: number, endMonth: string, endYear: number) {
        // Wait for the career card(s) to appear
        cy.get(this.pI_CareerSavedCardbtn, { timeout: 10000 })
            .should('be.visible') // Check that the card is visible
            .each((card) => {
                // Use cy.wrap to work within each individual card
                cy.wrap(card).within(() => {
                    // Verify academy name
                    cy.get('.text-bold.mb-1')
                        .first()
                        .invoke('text')
                        .then((text) => {
                            expect(text.trim().toLowerCase()).to.equal(academy.toLowerCase());
                        });

                    // Verify role
                    cy.get('.text-base.f-bold.mb-1')
                        .invoke('text')
                        .then((text) => {
                            expect(text.trim().toLowerCase()).to.equal(role.toLowerCase());
                        });
                });
            });
        // this.verifyCareerCardDate(startMonth, startYear, endMonth, endYear)
    }

    // verifyCareerCardDate(startMonth: string, startYear: number, endMonth: string, endYear: number) {
    //     // Wait for the date element to appear and check that it is visible
    //     cy.get('.ms-2 > :nth-child(3)', { timeout: 10000 })
    //         .should('be.visible')
    //         .invoke('text')
    //         .then((text) => {
    //             // Log the full text for debugging purposes
    //             cy.log('Date text:', text.trim());

    //             // Trim and split the text to separate start and end dates
    //             const [startDate, endDate] = text.trim().split(' - ');

    //             // Check if startDate and endDate were correctly split
    //             if (!startDate || !endDate) {
    //                 throw new Error(`Unexpected date format: "${text}". Expected format: "Month Year - Month Year"`);
    //             }

    //             // Log the split results for debugging
    //             cy.log('Start date:', startDate);
    //             cy.log('End date:', endDate);

    //             // Parse the start date (e.g., "January 2018")
    //             const [startMonthText, startYearText] = startDate.trim().split(' ');
    //             expect(startMonthText.slice(0, 3).toLowerCase()).to.equal(startMonth.toLowerCase()); // Check the start month (first 3 letters)
    //             expect(startYearText).to.equal(startYear.toString()); // Check the start year as a string

    //             // Parse the end date (e.g., "Feb 2035")
    //             const [endMonthText, endYearText] = endDate.trim().split(' ');
    //             expect(endMonthText.slice(0, 3).toLowerCase()).to.equal(endMonth.toLowerCase()); // Check the end month (first 3 letters)
    //             expect(endYearText).to.equal(endYear.toString()); // Check the end year as a string
    //         });
    // }







    careerINfo(academy: string, role: string, startYear: number, startMonth: string, startDay: number, endYear: number, endMonth: string, endDay: number) {
        this.VerifyCareersHeader();
        this.enterAcademy(academy);
        this.enterRole(role);
        this.selectCareerStDate(startYear, startMonth, startDay);
        this.selectCareerEndDate(endYear, endMonth, endDay);
        this.clickSaveCareers();

        // Call the verification function for the education box
        this.verifySavedCareerCard(academy, role, startMonth, startYear, endMonth, endYear);
        //this.dltCareerCard()
    }









    //    Achievements     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    pI_AchievementHeader = '#card6 > :nth-child(1) > .card-body > .header-players';
    pI_Event = '#card6 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > [style="margin-bottom: 0rem;"] > .col-sm-12 > .form-control';
    pI_Achievements = ':nth-child(6) > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .mt-3 > :nth-child(1) > .form-group > .col-sm-12 > .form-control';
    pI_AchievementYear = '#card6 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .mt-3 > :nth-child(2) > .form-group > .col-sm-12 > .form-control';
    pI_saveAchievements = '#card6 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .d-flex > .col-md-3 > .form-group > .col-sm-12 > .mat-ripple';
    pI_dtAchievementValidyear = '#card6 > :nth-child(1) > .card-body > .card > .form-sample > .profile-padding > :nth-child(1) > .d-card > .d-card-body > .flex-column > .d-flex > :nth-child(2) > .form-group > .col-sm-12 > .text-danger';
    pI_AchievementList = '.education-box';
    pI_AchievementSave = 'button.btn.btn-primary'
    pI_SavedAchiementCard = '.education-box > .d-flex';
    pI_deleteSavedCardbtn = '[style="float: right; cursor: pointer;"] > img';

    clickSaveAchievements() {
        cy.get(this.pI_saveAchievements, { timeout: 10000 })  // Adjust the selector if necessary
            .should('be.visible')
            .click({ force: true });
    }

    isAchievementSavebtnDisabled() {
        cy.get(this.pI_AchievementSave)
            .should('be.disabled');
    }



    deleteSavedCard() {
        cy.get(this.pI_deleteSavedCardbtn, { timeout: 10000 })  // Adjust the selector if necessary
            .should('be.visible')
            .click();
    }

    VerifyAchievementHeader() {
        cy.get(this.pI_AchievementHeader)
            .contains('Achievements')

    }

    // Method to enter physical weight
    enterEvent(event: string) {
        cy.get(this.pI_Event)
            .should('have.attr', 'placeholder', 'Event name') // Check placeholder
            .type(event); // Convert number to string before typing
    }

    // Method to enter physical weight
    enterAchievements(achievements: string) {
        cy.get(this.pI_Achievements)
            //.should('have.attr', 'placeholder', 'Enter Here') // Check placeholder
            .type(achievements); // Convert number to string before typing
    }

    // Method to enter physical weight
    enterAchievementYear(year1: string) {
        cy.get(this.pI_AchievementYear)
            .should('have.attr', 'placeholder', 'Year') // Check placeholder
            .type(year1); // Convert number to string before typing
    }

    validtAchievementYear() {
        cy.get('body').click();
        cy.get(this.pI_dtAchievementValidyear)
            .should('be.visible')
            .and('contain', '*Invalid year');
    }

    achievementLists() {
        cy.get(this.pI_AchievementList)
            .should('be.visible')
    }

    verifySavedAchievementCard(event: string, achievements: string) {
        // Wait for the specific education card container
        cy.get(this.pI_SavedAchiementCard, { timeout: 10000 })
            .first() // Ensure only the first element is targeted
            .scrollIntoView() // Ensure element is in view
            .should('be.visible') // Check that the card is visible
            .within(() => {
                // Verify event (institute name)
                cy.get('.text-bold.mb-1')
                    .first() // Get the first .text-bold.mb-1 element
                    .invoke('text')
                    .then((text) => {
                        expect(text.trim().toLowerCase()).to.equal(event.toLowerCase());
                    });

                // Verify achievement (discipline)
                cy.get('.text-base.f-bold.mb-1')
                    .invoke('text') // No need to use .first() since it's already narrowed down
                    .then((text) => {
                        expect(text.trim().toLowerCase()).to.equal(achievements.toLowerCase());
                    });
            });
    }






    achievementINfo(event: string, achievements: string, year1: string) {
        this.VerifyAchievementHeader();
        this.enterEvent(event);
        this.enterAchievements(achievements);
        this.enterAchievementYear(year1);
        //this.validtAchievementYear();
        this.clickSaveAchievements();
        //this.achievementLists();
        this.verifySavedAchievementCard(event, achievements);
        //this.deleteSavedCard();

    }

    addionalInformation(height: number, weight: number) {
        //cy.visit('https:/ / academy - dev.dartle.app / self - registration / 6451f714413fa18c66462066', { failOnStatusCode: false });
        this.clickAdditionalInfo();

    }

}