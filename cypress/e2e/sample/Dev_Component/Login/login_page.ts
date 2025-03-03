export class loginPage {
    // Selectors
    loginPage_username = '#email';
    loginPage_password = '#password';
    login_button = '.mt-6';
    login_warningEmail = '.toast-warning';
    login_warningPassword = '.toast-error';
    login_forgotPassword = 'a > .pt-3';
    login_emailRecovery = '.btn';
    login_recoveryUsername = '#email';
    login_warnigRecoverymail = '.toast-success';
    login_Gotologin_btn = '.btn';
    login_Email_dangertext = ':nth-child(1) > .pt-2 > .text-danger';
    login_Password_dangertext = ':nth-child(2) > .pt-2 > .text-danger';
    login_warningVerifyaccnnt = '.toast-message';
    login_viewPasswordBtn = '.password-toggle';


    // Methods
    navigate(url: string) {
        cy.visit('https://academy.dartle.app/login', { failOnStatusCode: false });
    }


    //**Click_Button*** */

    //login_buttion
    clickLogin() {
        cy.get(this.login_button).click();
    }

    //email recovery link button
    clickEmailRecovery() {
        cy.get(this.login_emailRecovery)
            .contains('Email the Recovery Link')
            .click()

    }

    //Go to Loginpage bbutton
    clickGotologinpage() {
        cy.get(this.login_Gotologin_btn).click()
        // Verify that the URL is correct after navigation
        cy.url().should('eq', 'https://academy.dartle.app/login');
    }

    //View Password Button
    clickViewPassword_btn() {
        cy.get(this.login_viewPasswordBtn).click()

    }




    //***Enter the fields***** */

    //enter the username
    enterUsername(username: string) {
        cy.get(this.loginPage_username)
            .should('have.attr', 'placeholder', 'Email Address/ Username') // Check that the placeholder attribute is 'username'
            .type(username);
    }

    //enter the password
    enterPassword(password: string) {
        cy.get(this.loginPage_password)
            .should('have.attr', 'placeholder', 'Password') // Check that the placeholder attribute is 'Password'
            .type(password);
    }

    //enter recovery username
    enterrRecoveryUsername(username: string) {
        cy.get(this.login_recoveryUsername)
            .should('have.attr', 'placeholder', 'email') // Check that the placeholder attribute is 'username'
            .type(username);
    }




    //***Empty Fields**** */

    //username is invalid or empty
    emptyUsername() {
        // Check that the placeholder attribute is 'Username'
        cy.get(this.loginPage_username)
            //.should('have.attr', 'placeholder', 'Username') // Check placeholder
            .clear() // Clear the input field
            .should('have.value', ''); // Assert that the field is empty
    }

    //empty username warning text
    emptyUsernameWaningtext() {
        cy.get(this.login_Email_dangertext).as('warningEmailText');  // Alias the element
        cy.get('@warningEmailText').should('be.visible');
        cy.get('@warningEmailText').should('contain', 'Email is required');
    }

    //enter empty password
    emptyPassword() {
        // Check that the placeholder attribute is 'Username'
        cy.get(this.loginPage_password)
            .should('have.attr', 'placeholder', 'Password') // Check placeholder
            .clear() // Clear the input field
            .should('have.value', ''); // Assert that the field is empty
        // Verify that the URL is correct after navigation
        //cy.url().should('eq', ' https:/ / academy - dev.dartle.app / user / login');

    }

    //empty Password Warning Text
    emptyPasswordWaningtext() {
        cy.get(this.login_Password_dangertext).as('warningPasswordText');  // Alias the element
        cy.get('@warningPasswordText').should('be.visible');
        cy.get('@warningPasswordText').should('contain', 'Password is required');

    }



    //***Notification**** */

    //Notification for invalid email
    invalidEmailnotification() {
        cy.get(this.login_warningEmail).as('warningEmail');  // Alias the element
        cy.get('@warningEmail').should('be.visible');
        cy.get('@warningEmail').should('contain', 'Wrong Email')
            .and('contain', 'Your email account is not registered.');
    }

    //Notification for invalid Password
    invalidPasswordnotification() {
        cy.get(this.login_warningPassword).as('warningPassword');
        cy.get('@warningPassword').should('be.visible');
        cy.get('@warningPassword').should('contain', 'Wrong Password')
            .and('contain', 'Password was not correct, Please try again!');
    }

    //Notification for recovery email
    recoveryMailnotification() {
        cy.get(this.login_warnigRecoverymail).as('warningRecoveryEmail');  // Alias the element
        cy.get('@warningRecoveryEmail').should('be.visible');
        cy.get('@warningRecoveryEmail').should('contain', ' Password Reset Link')
            .and('contain', 'Password reset link is sent to your registered email.')
    }

    // Invalid recovery mail notification
    invalidRecoveryMailNotification() {
        cy.get(this.recoverymailwarning)
            .as('invalidWarningRecoveryEmail') // Alias the element
            .should('be.visible')
            .and('contain', 'Wrong Email')
            .and('contain', 'Your email account is not registered.');
    }

    // Invalid recovery mail danger text
    invalidRecoveryMailDangerText() {
        cy.get(this.invalidrecoverymaildt)
            .should('be.visible')
            .and('contain', '*This email is not registered with Dartle.');
    }


    // forgot password
    forgotPassword() {
        cy.get(this.login_forgotPassword)
            .contains('Forgot Password?')
            .click(); // Clicks the Forgot Password link


        // Verify that the URL is correct after navigation
        cy.url().should('eq', 'https://academy.dartle.app/password');
    }

    //View Password
    viewPassword() {
        cy.get(this.loginPage_password)
            .should('have.attr', 'type', 'text');

    }

    //invalid recovery mail warning >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    recoverymailwarning = '#toast-container > .ng-trigger'
    invalidrecoverymaildt = '.text-danger2';
}





