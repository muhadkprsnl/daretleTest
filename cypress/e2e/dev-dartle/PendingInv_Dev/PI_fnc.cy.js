import { personalInfo } from "../../sample/dev-dartleComponent/PendingInvites/persomalInfo"
import { parentalInfo } from "../../sample/dev-dartleComponent/PendingInvites/parentalInfo"
import { addionalInfo } from "../../sample/dev-dartleComponent/PendingInvites/additionalInfo"
import { navigation } from "../../sample/dev-dartleComponent/PendingInvites/navigation"
import { addPlayer } from "../../sample/dev-dartleComponent/PendingInvites/addPlayer"
import { randomDetails } from "../../sample/dev-dartleComponent/PendingInvites/randomdetails"

describe('Pending Invites', () => {
    const PI_PersonalInfo = new personalInfo();
    const PI_ParentalInfo = new parentalInfo();
    const PI_AdditionalInfo = new addionalInfo();
    const PI_nav = new navigation();
    const PI_addPlayer = new addPlayer();
    const PI_randomDetail = new randomDetails();

    beforeEach(() => {
        // Assuming cy.login is a valid custom command
        cy.intercept('GET', '/ngsw.json*', { statusCode: 404 });
        cy.login('academy@roninaks.com', 'P@ssw0rd');
    });

    it('should navigate to the pending invites page', () => {
        PI_PersonalInfo.enterPersonalInfo('das@12.com321', 'Janqe', 'Georqge', 'username', 'Female')
        PI_ParentalInfo.enterParentInfo('ddh@3qsq4.com');
        PI_AdditionalInfo.addionalInformation();
        // PI_AdditionalInfo.fillphysic('100', '100');
        // PI_AdditionalInfo.sport('Tennis', 'Attacker')
        // PI_AdditionalInfo.addressInfo('India', '11th Area', 'Kerala', 'Ernakulam', '638680')
        // PI_AdditionalInfo.educationalINfo('long way', 'good', '2000', '2010')
        // PI_AdditionalInfo.achievementINfo('long way', 'good', '2000')
        // PI_AdditionalInfo.careerINfo('Stanford', 'lecture', '2018', 'jan', '31', '2020', 'feb', '5');
        PI_addPlayer.addMember();


    });

    xit('Verify that Enter the Invalid Email.', () => {
        PI_PersonalInfo.enterPersonalInfo('MNAPOUTY', 'Janqe', 'Georqge', 'username', 'Female')
        PI_addPlayer.checkfunction();

    });


    xit('Verify that Enter the Duplicate Email.', () => {
        PI_PersonalInfo.enterPersonalInfo('MNAPOUTY', 'Janqe', 'Georqge', 'username', 'Female')
        PI_addPlayer.checkfunction();

    });

    xit('Verify that Enter the invalid First Name.', () => {
        PI_PersonalInfo.visitPendinginvites();
        PI_randomDetail.randomEmail();
        PI_randomDetail.randomLname();
        PI_PersonalInfo.enterUsername();
        PI_randomDetail.randomGender();
        PI_addPlayer.checkfunction();
        PI_PersonalInfo.dtfname();
    });




});
