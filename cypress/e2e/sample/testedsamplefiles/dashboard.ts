export class dashBoard {

    db_profileName = '.profile-name';
    db_academyEmail = '.card > :nth-child(2) > .over-flow-word';
    db_academySport = '.flex > div > span';
    db_addStudentbtn = ':nth-child(1) > .stats-add-contain > .stats-add';
    db_addCoachbtn = ':nth-child(2) > .stats-add-contain > .stats-add';
    db_addGroupbtn = ':nth-child(3) > .stats-add-contain > .stats-add';
    db_calendarBtn = '.calendar-view';
    db_galleryAll = '#ngb-nav-3';
    db_galleryImage = '#ngb-nav-4;'
    db_galleryVideo = '#ngb-nav-5';
    db_galleryViewall = '.header > .text-base';
    db_addLogobtn = '.profile-add';
    db_addProfile_pic = '.cover-bg-add';
    db_viewProfile = '#navbarDropdown > .bi';
    db_signOut = '[href="javascript:;"]';

    //****Verification****** */

    verifyAcademy() {
        cy.get(this.db_profileName)
            .contains('Dartle Test Academy')
    }

    verifyAcademyinfo() {
        cy.get(this.db_academyEmail)
            .contains('academy@roninaks.com')
        cy.get(this.db_academySport)
            .contains('Football')
    }

    //***Click******* */

    clickAddstudent() {
        cy.get(this.db_addStudentbtn)
            .click()
    }

    clickAddGroup() {
        cy.get(this.db_addGroupbtn)
            .click()
    }

    clickAddcoach() {
        cy.get(this.db_addCoachbtn)
            .click()
    }

    //*****Navigation************

    navigatetoAddmember() {
        this.clickAddstudent()
        // Verify that the URL is correct after navigation
        cy.url().should('eq', 'https://academy-dev.dartle.app/members/list/add_player?type=Player');
    }

    navigatetoAddgroup() {
        this.clickAddGroup()
        // Verify that the URL is correct after navigation
        cy.url().should('eq', 'https://academy-dev.dartle.app/groups/add');
    }

    navigatetoAddcoach() {
        this.clickAddcoach()
        // Verify that the URL is correct after navigation
        cy.url().should('eq', 'https://academy-dev.dartle.app/members/list/add_coach?type=Coach');
    }
}