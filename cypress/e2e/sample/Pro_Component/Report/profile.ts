import { faker } from '@faker-js/faker';

export class Profile {

    // Selectors   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    profile_Searchbar = '.input-group > .form-control';
    memberIcon = 'app-menu-item.ng-tns-c4091461336-4 > .mat-mdc-list-item > .mat-mdc-list-item-icon';
    viewReportBtn = '.w-100 > .btn-primary';
    viewBioBtn = '.primary-c';
    randomPlayer = ':nth-child(1) > .card-body > .w-100 > .btn-primary';

    visitMembers() {
        //cy.get('.input-group > .form-control').click()
        //cy.wait(2000);
        cy.get(this.memberIcon).click({ force: true })
        cy.wait(2000);
        //cy.visit('https:/ / academy.dartle.app / members / list', { failOnStatusCode: false });
    }

    searchThePlayer(fullname: string) {
        cy.get(this.profile_Searchbar)
            .type(`${fullname}`)
            .type('{enter}');
        cy.wait(2000)
        this.clickViewReport();
        this.clickViewBio();
    }

    clickViewReport() {
        cy.get(this.viewReportBtn).first().click(); // Target the first matching element
    }

    clickViewBio() {
        cy.get(this.viewBioBtn).first().click(); // Target the first matching element
        cy.wait(2000)
    }

    selectRandomPlayer() {
        // Wait for 1 second before clicking the player
        cy.wait(3000); // 1000ms = 1 second
        cy.get(this.randomPlayer).click();
    }


    viewRandomBio() {
        this.visitMembers()
        this.selectRandomPlayer();
        this.clickViewBio();
    }

    //  Personal info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    editPersonalInfoBtn = ':nth-child(1) > .card > [style="display: flex; justify-content: space-between;"] > [style="cursor: pointer;"] > .ng-star-inserted';
    fnameLabel = ':nth-child(1) > .col-form-label';
    fnameField = ':nth-child(1) > div.col-sm-12 > .form-control';
    lnameField = ':nth-child(2) > div.col-sm-12 > .form-control';
    usernameLabel = ':nth-child(3) > .col-form-label';
    usernameField = ':nth-child(3) > div.col-sm-12 > .form-control';
    calendar = '.mat-datepicker-toggle > .mdc-icon-button > .mat-mdc-button-touch-target';
    genderLabel = ':nth-child(5) > .col-form-label';
    genderField = ':nth-child(5) > div.col-sm-12 > .form-control';
    CancelBtn = ':nth-child(1) > .form-group > .col-sm-12 > .mat-ripple';
    saveBtn = ':nth-child(2) > .form-group > .col-sm-12 > .mat-ripple';

    // Variables to store input values
    storedFname: string | undefined;
    storedLname: string | undefined;
    storedUsername: string | undefined;
    storedGender: string | undefined;


    editPersonalInfo() {
        // Ensure the button exists and is visible
        cy.get(this.editPersonalInfoBtn, { timeout: 10000 }) // Adjust timeout if needed
            .should('exist')
            .should('be.visible')
            .scrollIntoView()
            .click();
    }

    enterPIfname(fname: string) {
        this.storedFname = fname; // Store the input value
        cy.get(this.fnameLabel).contains('First name*');
        cy.get(this.fnameField)
            .clear()
            .should('have.attr', 'placeholder', 'First name') // Check placeholder
            .type(fname);
    }

    clearPIfname() {
        cy.get(this.fnameField)
            .clear()
    }

    enterPIlname(lname: string) {
        this.storedLname = lname; // Store the input value
        cy.get(this.lnameField)
            .clear()
            .should('have.attr', 'placeholder', 'Last name') // Check placeholder
            .type(lname);
    }

    // enterPIUsername(username: string) {
    //     this.storedUsername = username; // Store the input value
    //     cy.get(this.usernameLabel).contains('Username*');
    //     cy.get(this.usernameField)
    //         .clear()
    //         .type(username);
    // }

    // clearPIUsername() {
    //     cy.get(this.usernameField)
    //         .clear({ force: true })

    // }

    //select Date  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    periodStartYear = ':nth-child(1) > [data-mat-col="0"] > .mat-calendar-body-cell';
    periodLastYear = ':nth-child(6) > [data-mat-col="3"] > .mat-calendar-body-cell';

    selectDate(Year: number, Month: string, Day: number): void {
        // Open the date picker
        cy.get(this.calendar).click();

        // Open the year picker
        cy.get('.mat-calendar-period-button').click();

        // Get the start year and last year
        cy.get(this.periodStartYear).invoke('text').then((startYear) => {
            cy.get(this.periodLastYear).invoke('text').then((lastYear) => {
                // Parse startYear and lastYear as numbers
                const startYearNum = parseInt(startYear.trim(), 10);
                const lastYearNum = parseInt(lastYear.trim(), 10);

                // Navigate through the calendar years
                if (Year < startYearNum) {
                    cy.get('.mat-calendar-previous-button').click();
                } else if (Year > lastYearNum) {
                    cy.get('.mat-calendar-next-button').click();

                }// else {
                //     // Select the year directly if it's in the current period
                //     cy.contains('.mat-calendar-body-cell-content', Year.toString()).click();
                // }
                // Select the year directly if it's in the current period
                cy.contains('.mat-calendar-body-cell-content', Year.toString()).click();

                // Select the month
                cy.contains('.mat-calendar-body-cell-content', Month.toUpperCase()).click();

                // Select the day
                cy.contains('.mat-calendar-body-cell', Day.toString()).click();
            });
        });
    }






    selectPIGender() {
        const genderOptions = ["Male", "Female", "Others"];
        const randomGender = genderOptions[Math.floor(Math.random() * genderOptions.length)];
        this.storedGender = randomGender; // Store the randomly selected gender

        cy.get(this.genderLabel).contains('Gender*');
        cy.get(this.genderField).select(randomGender); // Select randomly chosen gender
    }

    clickCancelPI() {
        cy.get(this.CancelBtn).click();
    }

    clickSavePI() {
        cy.get(this.saveBtn).click();
    }

    fillUpPersonalInfo(fname: string, lname: string, startYear: number, startMonth: string, startDay: number) {
        //this.editPersonalInfo();
        this.enterPIfname(fname);
        this.enterPIlname(lname);
        //this.enterPIUsername(username);
        this.selectDate(startYear, startMonth, startDay);
        this.selectPIGender();
        this.clickSavePI();
        this.successMsg();
    }

    // New Methods to Retrieve Stored Values
    getStoredFname(): string | undefined {
        return this.storedFname;
    }

    getStoredLname(): string | undefined {
        return this.storedLname;
    }

    getStoredUsername(): string | undefined {
        return this.storedUsername;
    }

    getStoredGender(): string | undefined {
        return this.storedGender;
    }

    //  Notification   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    successToaster = '#toast-container > .ng-trigger';
    failedToaster = '#toast-container > .ng-trigger';

    successMsg() {
        cy.get(this.successToaster)
            .should('be.visible')
            .and('contain.text', 'Profile edited! ')
            .and('contain.text', 'Personal info has been edited.');
    }

    failedMsg() {
        cy.get(this.failedToaster)
            .should('be.visible')
            .and('contain.text', 'Data required. ')
            .and('contain.text', 'Please enter required data');
    }

    //   DAnger text   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    dtPIfnameSelector = '.col-sm-6';
    dtPIusernameSelector = 'djhd';
    dtPIDOBSelector = '.text-danger';

    dtPIfname() {
        cy.get(this.dtPIfnameSelector)
            .contains('*First name is required.')
    }

    dtPIUsername() {
        cy.get(this.dtPIusernameSelector)
            .contains('*Username is required.')
    }

    dtPIDOB() {
        cy.get(this.dtPIDOBSelector)
            .contains('*DOB cannot be later than the todays date.')
    }


    //  Nutrition  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    nutrition = ':nth-child(2) > .card > [style="display: flex; justify-content: space-between;"] > [style="cursor: pointer;"] > .ng-star-inserted';
    needNutritionist = '.check-box ';
    foodItemLabel = '.justify-content-between > .text-base'
    foodItemsField = '.form-control';
    saveFoodBtn = '.w-100 > .mat-ripple';

    // Variables to store input values
    storedFoodItem: string | undefined;


    clickEditNutrition() {
        // Retry mechanism to ensure the element exists, is visible, and stable before clicking
        cy.get(this.nutrition, { timeout: 10000 }) // Adjust timeout based on expected delays
            .should('exist')
            .should('be.visible')
            .scrollIntoView()
            .should('be.visible') // Ensure it's still visible after scrolling
            .then(($el) => {
                // Ensure the element is still in the DOM and actionable
                if ($el && $el.length && $el.is(':visible')) {
                    cy.wrap($el).click({ force: true }); // Use force if necessary
                } else {
                    cy.log('Element became detached or is not visible.');
                }
            });
    }



    checkedNeedNutrition() {
        cy.get(this.needNutritionist)
            .should('exist')
            .scrollIntoView()
            .should('be.visible')
            .then(($checkbox) => {
                if (!$checkbox.prop('checked')) {
                    cy.wrap($checkbox).click().wait(500); // Wait for state update
                }
            })
            .should('not.be.checked'); // Confirm it's checked
    }



    notBeNutrition() {
        cy.get(this.needNutritionist)
            .should('exist')
            .scrollIntoView()
            .should('be.visible')
            .then(($checkbox) => {
                if ($checkbox.prop('checked')) {
                    cy.wrap($checkbox).click().wait(500); // Wait for state update
                }
            })
            .should('be.checked'); // Confirm it's unchecked
    }



    handleNutritionCheckbox() {
        cy.get(this.needNutritionist)
            .should('exist') // Ensure the checkbox exists in the DOM
            .scrollIntoView() // Ensure it's visible in the viewport
            .then(($checkbox) => {
                const isChecked = $checkbox.prop('checked'); // Check current state

                if (isChecked) {
                    // If the checkbox is already checked
                    cy.log('Checkbox is checked. Calling notBeNutrition...');
                    this.notBeNutrition();
                } else {
                    // If the checkbox is not checked
                    cy.log('Checkbox is not checked. Calling checkedNeedNutrition...');
                    this.checkedNeedNutrition();
                }
            });
    }








    clickSaveFood() {
        cy.get(this.saveFoodBtn).click()
    }

    enterFoodItems(foodItem: string) {
        this.storedFoodItem = foodItem
        cy.get(this.foodItemLabel)
            .contains('Food preferences');
        cy.get(this.foodItemsField)
            .clear()
            .should('have.attr', 'placeholder', 'Enter food preference') // Check placeholder
            .type(foodItem);

    }




    //  Nutritiion  Message  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    nutritionsuccessMsg() {
        cy.get(this.successToaster)
            .should('be.visible')
            .and('contain.text', ' Profile Updated.')
            .and('contain.text', ' Prefered foods list is updated.');
    }


    needNutritionsuccessMsg() {
        cy.get(this.successToaster)
            .should('be.visible')
            .and('contain.text', ' Profile Updated.')
            .and('contain.text', ' The need for nutritionist status is updated.');
    }


    //Physical characteristics  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    editPhycalcharsBtn = '.card-body > :nth-child(1) > [style="display: flex; justify-content: space-between;"] > [style="cursor: pointer;"] > svg > g > path';
    hLabel = '.stats-contain > :nth-child(1)';
    hForm = ':nth-child(1) > .mt-2 > .form-control';
    wLabel = '.stats-contain > :nth-child(2)';
    wForm = ':nth-child(2) > .mt-2 > .form-control';
    phySaveBtn = '.card-body > :nth-child(1) > .mat-ripple';

    // Variables to store input values
    storedHeight: string | undefined;
    storedWeight: string | undefined;



    clickEditPhy() {
        cy.get(this.editPhycalcharsBtn).click()
    }

    savePhyDetails() {
        cy.get('.card-body > :nth-child(1) > .mat-ripple')
            .click()
    }

    enterHeight(height: string) {
        this.storedHeight = height
        cy.get(this.hLabel)
            .contains('Height')
        cy.get(this.hForm)
            .clear()
            .type(height);
    }

    enterWeight(weight: string) {
        this.storedWeight = weight
        cy.get(this.wLabel)
            .contains('Weight')
        cy.get(this.wForm)
            .clear()
            .type(weight);
    }

    //Contact info  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    editContactInfoBtn = "body app-root app-main[class='ng-tns-c765149963-0'] div[class='main-container'] div[class='main text-base ng-trigger ng-trigger-routeAnimations'] div[class='padder'] app-profile[class='ng-star-inserted'] div[class='row pl-3 pr-3'] div[class='col-12'] div[class='row mb-3'] div[class='col-12 mb-3 flex grid-gap mobile'] div[class='col-lg-6 p-0 flex flex-c grid-gap'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) svg"
    phoneCodeForm = '#mat-input-2';
    savedPhoneCode = ':nth-child(2) > .card > [style=""] > :nth-child(1)';
    phoneNumberForm = '#mat-input-3';
    saveContactInfoBtn = ':nth-child(2) > .form-group > .col-sm-12 > .mat-ripple';
    cancelContactInfoBtn = ':nth-child(1) > .form-group > .col-sm-12 > .mat-ripple';
    contactMailForm = '#mat-input-4';
    savedContactMail = '.card > [style=""] > :nth-child(3)';
    contactAddressForm = '#mat-input-5';
    contactDistrictForm = '#mat-input-6';
    contactCityForm = '#mat-input-7';
    contactStateForm = '#mat-input-8'
    contactPincodeForm = '#mat-input-9'
    savedContactInformation = '.card > [style=""] > :nth-child(3)';
    savedContactAddress = 'p.ng-star-inserted';




    storedPhnmbr: string | undefined;
    storedPhoneCode: string | undefined;
    storedContactMail: string | undefined;
    storedContactAddress: string | undefined;
    storedContactDistrict: string | undefined;
    storedContactCity: string | undefined;
    storedContactState: string | undefined;
    storedContactPincode: string | undefined;

    clickEditContactInfo() {
        cy.get(this.editContactInfoBtn)
            .click()
    }

    saveContactInfo() {
        cy.get(this.saveContactInfoBtn)
            .click()
    }

    cancelContactInfo() {
        cy.get(this.cancelContactInfoBtn)
            .click()
    }


    selectPhoneCode(code: string) {
        this.storedPhoneCode = code;

        // Open the dropdown
        cy.get(this.phoneCodeForm)
            .clear()
            .click(); // Click on the dropdown to display options

        // Select the option with the specified code
        cy.get('mat-option')
            .contains(code) // Find the option containing the phone code
            .click(); // Click to select it

        // Verify the selected value
        cy.get(this.phoneCodeForm)
            .invoke('val') // Get the value of the input field
            .should('include', code); // Verify it contains the selected code
    }

    validatePhoneCode() {
        if (!this.storedPhoneCode) {
            throw new Error('No phone code is stored. Please select a phone code first.');
        }

        cy.get(this.savedPhoneCode)
            .invoke('text') // Get the text content of the saved phone code element
            .then((actualText) => {
                const isValid = actualText.includes(this.storedPhoneCode as string) || /[^\d]/.test(actualText);
                expect(isValid, `Validation failed. Expected to find: ${this.storedPhoneCode}`).to.be.true;
            });
    }


    // Function to enterPhone Number
    enterPhoneNumber(no: string) {
        this.storedPhnmbr = no;

        // Ensure the placeholder is correct
        cy.get('#mat-input-3')
            .should('have.attr', 'placeholder', 'Phone number'); // Check placeholder

        // Attempt to type the provided height
        cy.get(this.phoneNumberForm)
            .clear() // Clear the field before typing
            .type(no) // Type the input value (string)
            .then(($input) => {
                const filteredPhoneNmbr = no.replace(/\D/g, ''); // Remove all non-numeric characters
                const value = $input.val(); // Get the current value of the input

                if (filteredPhoneNmbr) {
                    // If there are numeric characters
                    expect(value).to.equal(filteredPhoneNmbr); // Ensure the input value matches the filtered numeric height
                } else {
                    // If no numeric characters exist
                    expect(value).to.equal(''); // Ensure the input value is empty
                }
            });
    }



    validatePhoneNumber() {
        if (!this.storedPhnmbr) {
            throw new Error('No phone number is stored. Please enter a phone number first.');
        }

        // Retrieve the saved phone number element's value
        cy.get(this.savedPhoneCode)
            .invoke('text') // Get the text content of the saved phone number element
            .then((actualText) => {
                const filteredStoredPhoneNumber = this.storedPhnmbr!.replace(/\D/g, ''); // Remove non-numeric characters from the stored phone number
                const containsStoredPhoneNumber = actualText.includes(filteredStoredPhoneNumber); // Check if the actual text contains the stored phone number
                const hasInvalidCharacters = /[^\d]/.test(actualText); // Check for non-numeric characters

                // Pass if the stored phone number is found, regardless of extra characters
                expect(
                    containsStoredPhoneNumber || hasInvalidCharacters,
                    `Validation failed. The stored phone number (${filteredStoredPhoneNumber}) was not found in the container text: ${actualText}`
                ).to.be.true;
            });
    }




    enterContactMail() {
        // Generate a random email and store it
        const randomContactEmail = faker.internet.email();
        this.storedContactMail = randomContactEmail;

        // Interact with the form and type the generated email
        cy.get(this.contactMailForm)
            .should('have.attr', 'placeholder', 'Alternative email') // Check placeholder
            .clear() // Clear input field
            .type(randomContactEmail); // Type generated email
    }

    validateContactMail() {
        if (!this.storedContactMail) {
            throw new Error('No contact email is stored. Please enter a contact email first.');
        }

        // Normalize both stored email and actual text to lowercase
        const storedEmailLower = this.storedContactMail.toLowerCase();
        cy.get(this.savedContactMail)
            .invoke('text') // Get the text content of the container
            .then((actualText) => {
                const actualTextLower = actualText.toLowerCase(); // Normalize actual text to lowercase
                const isValid = actualTextLower.includes(storedEmailLower); // Check if the stored email is present in the text

                // Assert that the stored email is present
                expect(
                    isValid,
                    `Validation failed. Stored contact email (${this.storedContactMail}) not found in the container text: ${actualText}`
                ).to.be.true;
            });
    }



    // Method to enter contact address
    enterContatAddress(address: string) {
        this.storedContactAddress = address
        cy.get(this.contactAddressForm)
            .should('have.attr', 'placeholder', 'Address') // Check placeholder
            .clear()
            .type(address); // Convert number to string before typing
    }

    validateContactAddress() {
        if (!this.storedContactAddress) {
            throw new Error('No contact Address is stored. Please enter a contact Address first.');
        }

        // Normalize the stored address and actual text by trimming whitespace
        const storedAddressNormalized = this.storedContactAddress.trim().toLowerCase();
        cy.get(this.savedContactAddress)
            .invoke('text') // Get the text content of the container
            .then((actualText) => {
                const actualTextNormalized = actualText.trim().toLowerCase(); // Normalize actual text by trimming and converting to lowercase
                const isValid = actualTextNormalized.includes(storedAddressNormalized); // Check if the stored address is present in the text

                // Assert that the stored address is present
                expect(
                    isValid,
                    `Validation failed. Stored contact address (${this.storedContactAddress}) not found in the container text: ${actualText}`
                ).to.be.true;
            });
    }



    // Method to enter city
    enterContactDistrict(dist: string) {
        this.storedContactDistrict = dist
        cy.get(this.contactDistrictForm)
            .should('have.attr', 'placeholder', 'District') // Check placeholder
            .clear()
            .type(dist); // Convert number to string before typing
    }

    validateContactDistrict() {
        if (!this.storedContactDistrict) {
            throw new Error('No contact district is stored. Please enter a contact district first.');
        }

        // Retrieve and validate the saved contact email
        cy.get(this.savedContactAddress)
            .invoke('text') // Get the text content of the container
            .then((actualText) => {
                const isValid = actualText.includes(this.storedContactDistrict!); // Check if the stored email is present in the text

                // Assert that the stored email is present
                expect(
                    isValid,
                    `Validation failed. Stored contact email (${this.storedContactDistrict}) not found in the container text: ${actualText}`
                ).to.be.true;
            });
    }


    // Method to enter city
    enterContactCity(city: string) {
        this.storedContactCity = city
        cy.get(this.contactCityForm)
            .should('have.attr', 'placeholder', 'City') // Check placeholder
            .clear()
            .type(city); // Convert number to string before typing
    }

    validateContactCity() {
        if (!this.storedContactCity) {
            throw new Error('No contact city is stored. Please enter a contact city first.');
        }

        // Retrieve and validate the saved contact email
        cy.get(this.savedContactAddress)
            .invoke('text') // Get the text content of the container
            .then((actualText) => {
                const isValid = actualText.includes(this.storedContactCity!); // Check if the stored email is present in the text

                // Assert that the stored email is present
                expect(
                    isValid,
                    `Validation failed. Stored contact email (${this.storedContactCity}) not found in the container text: ${actualText}`
                ).to.be.true;
            });
    }



    enterContatState(state: string) {
        this.storedContactState = state
        cy.get(this.contactStateForm)
            .should('have.attr', 'placeholder', 'State') // Check placeholder
            .clear()
            .type(state);
    }

    validateContactState() {
        if (!this.storedContactState) {
            throw new Error('No contact state is stored. Please enter a contact state first.');
        }

        // Retrieve and validate the saved contact email
        cy.get(this.savedContactAddress)
            .invoke('text') // Get the text content of the container
            .then((actualText) => {
                const isValid = actualText.includes(this.storedContactState!); // Check if the stored email is present in the text

                // Assert that the stored email is present
                expect(
                    isValid,
                    `Validation failed. Stored contact email (${this.storedContactState}) not found in the container text: ${actualText}`
                ).to.be.true;
            });
    }




    enterContactPincode(pin: string) {
        this.storedContactPincode = pin
        cy.get(this.contactPincodeForm)
            .should('have.attr', 'placeholder', 'Pincode') // Check placeholder
            .clear()
            .type(pin);
    }

    validateContactPincode() {
        if (!this.storedContactPincode) {
            throw new Error('No contact Pincode is stored. Please enter a contact Pincode first.');
        }

        // Retrieve and validate the saved contact email
        cy.get(this.savedContactAddress)
            .invoke('text') // Get the text content of the container
            .then((actualText) => {
                const isValid = actualText.includes(this.storedContactPincode!); // Check if the stored email is present in the text

                // Assert that the stored email is present
                expect(
                    isValid,
                    `Validation failed. Stored contact email (${this.storedContactPincode}) not found in the container text: ${actualText}`
                ).to.be.true;
            });
    }


    // Validate all the details
    validateAllContactDetails() {
        this.validatePhoneCode();
        this.validatePhoneNumber();
        this.validateContactAddress();
        this.validateContactMail();
        this.validateContactDistrict();
        this.validateContactCity();
        this.validateContactState();
        this.validateContactPincode();

    }




    //Contact Info Message  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    contactInfoMsg = '#toast-container > .ng-trigger';

    contactInfotMsg() {
        cy.get(this.contactInfoMsg)
            .wait(3000)
            .should('be.visible')
            .and('contain.text', ' Profile saved.')
            .and('contain.text', ' Contact information is saved.');
    }


    //Educational Information >>>>>>>>>>>>>>>>>>>>>>>>>>>>


    editEducation = '[style="display: flex; justify-content: space-between;"] > .ng-star-inserted';
    universityNmaeForm = '.d-flex > :nth-child(1) > .col-sm-12 > .form-control';
    courseNameForm = ':nth-child(2) > .col-sm-12 > .form-control';
    styearForm = ':nth-child(1) > .form-group > .col-sm-12 > .form-control';
    endyearForm = ':nth-child(3) > :nth-child(2) > .form-group > .col-sm-12 > .form-control';
    saveEduBtn = ':nth-child(2) > .form-group > .col-sm-12 > .btn';
    cancelEduBtn = ':nth-child(1) > .form-group > .col-sm-12 > .btn';
    dltOptionBtn = '.dropdown > .bi';
    dltEduBtn = ''
    dltConfirmBtn = '.swal2-confirm';
    dltCancelBtn = '.swal2-cancel';
    savedEductionDetailsCard = ':nth-child(3) > .card > :nth-child(1) > .w-100 > :nth-child(1)';
    educationalSuccessToaster = '#toast-container > .ng-trigger';
    warningToaster = '#toast-container > .ng-trigger';



    storedUniversity: string | undefined;
    storedCourse: string | undefined;
    storedYearin: string | undefined;
    storedYearOut: string | undefined;



    clickaddEducation() {
        cy.get(this.editEducation)
            .scrollIntoView()
            .click({ force: true })
    }

    clickSaveEducationDetails() {
        cy.get(this.saveEduBtn)
            .click();
    }

    clickCancelEduInfo() {
        cy.get(this.cancelEduBtn)
            .click();
    }

    //Pop-up >>>>>>>>>>>>>>>>>>>>>>
    clickDltConform() {
        cy.get(this.dltConfirmBtn)
            .click()
    }

    clickCancelConform() {
        cy.get(this.dltCancelBtn)
            .click()
    }

    dltEduDetails() {
        // Click the dropdown button to open the menu
        cy.get('.dropbtn').first() // Use .first() if there are multiple dropbtns
            .click();

        // Verify the dropdown content is visible and click the "Delete" option
        cy.get('.dropdown-content').first() // Use .first() or a more specific selector
            .contains('Delete')
            .click();

        // Handle the SweetAlert2 confirmation dialog
        cy.get('swal') // Locate the SweetAlert modal
        //.should('be.visible'); // Ensure it's visible before interacting
        //this.clickDltConform(); / / Call your confirmation function
    }



    enterUniversityName(university: string) {
        this.storedUniversity = university
        cy.get(this.universityNmaeForm)
            .should('have.attr', 'placeholder', 'University*') // Check placeholder
            .clear()
            .type(university); // Convert number to string before typing
    }



    enterCourse(course: string) {
        this.storedCourse = course
        cy.get(this.courseNameForm)
            .should('have.attr', 'placeholder', 'Course*') // Check placeholder
            .clear()
            .type(course); // Convert number to string before typing
    }

    enterStyear(yearin: string) {
        this.storedYearin = yearin
        cy.get(this.styearForm)
            .should('have.attr', 'placeholder', 'Year in*') // Check placeholder
            .type(yearin); // Convert number to string before typing
    }

    enterEndYear(yearout: string) {
        this.storedYearOut = yearout
        cy.get(this.endyearForm)
            .should('have.attr', 'placeholder', 'Year out*') // Check placeholder
            .type(yearout); // Convert number to string before typing
    }



    // Method to verify education details including course
    verifySavedEducationDetails() {
        // Retrieve the displayed education details from the DOM
        const displayedUniversity = cy.get('.over-flow-word .text-bold.mb-1').first().invoke('text');
        const displayedYears = cy.get('.over-flow-word .text-bold.mb-3').first().invoke('text');
        const displayedCourse = cy.get(':nth-child(1) > .ml-2 > .text-base').invoke('text');

        // Verify university name
        displayedUniversity.then((university) => {
            expect(university.trim()).to.equal(this.storedUniversity);
        });

        // Verify years
        displayedYears.then((years) => {
            expect(years.trim()).to.equal(`${this.storedYearin} - ${this.storedYearOut}`);
        });

        // Verify course name
        displayedCourse.then((course) => {
            expect(course.trim()).to.equal(this.storedCourse);
        });
    }

    // Educational Qualification Message
    educationalSuccessMsg() {
        cy.get(this.warningToaster)
            .should('be.visible')
            .and('contain.text', ' Education Added!')
            .and('contain.text', ' Education qualification has been added.');
    }

    eduYearValidationMsg() {
        cy.get(this.warningToaster)
            .should('be.visible')
            .and('contain.text', ' Validation Error')
            .and('contain.text', ' University Name, Course Name, Year In, and Year Out cannot be empty.');
    }

    eduYearsValidationMsg() {
        cy.get(this.warningToaster)
            .should('be.visible')
            .and('contain.text', ' Validation Error')
            .and('contain.text', ' Fields cannot be empty.');
    }


    eduYearValidation2Msg() {
        cy.get(this.warningToaster)
            .should('be.visible')
            .and('contain.text', ' Validation Error')
            .and('contain.text', ' Year In should be less than Year Out');
    }

    eduDltMsg() {
        cy.get(this.warningToaster)
            .should('be.visible')
            .and('contain.text', ' Deleted successfully')
            .and('contain.text', '  Selected education has been successfully deleted.');
    }



}






















