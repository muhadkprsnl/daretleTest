import { loginPage } from "../../sample/Dev_Component/Login/login_page.ts"


let loginPage1 = new loginPage()

describe('Testing of Login_page', () => {
    beforeEach(() => {
        // Code to run before each test in this describe block
        loginPage1.navigate('/');
    });

    it.only('Login Test', () => {
        loginPage1.enterUsername('academy@roninaks.com');
        loginPage1.enterPassword('P@ssw0rd');
        loginPage1.clickLogin();
    })

    it('Wrong Email ', () => {
        loginPage1.enterUsername('academy@roninaks.co');
        loginPage1.enterPassword('P@ssw0rd');
        loginPage1.clickLogin();
        loginPage1.invalidEmailnotification();
    })

    it('Wrong Password ', () => {
        loginPage1.enterUsername('academy@roninaks.com');
        loginPage1.enterPassword('P@ssw');
        loginPage1.clickLogin();
        loginPage1.invalidPasswordnotification();
    })

    it('View Password', () => {
        loginPage1.enterPassword('P@ssw0rd');
        loginPage1.clickViewPassword_btn()
        loginPage1.viewPassword()
    })


    it('Empty Email ', () => {
        loginPage1.emptyUsername();
        loginPage1.clickLogin();

    })

    it('Empty Password ', () => {
        loginPage1.emptyPassword();
        //loginPage1.emptyPasswordWaningtext();
        loginPage1.clickLogin({ force: true });
        //loginPage1.emptyPasswordWaningtext();

    })


    it('Forgot Password ', () => {
        loginPage1.forgotPassword();
    })

    it('Recovery Email ', () => {
        loginPage1.forgotPassword();
        loginPage1.enterrRecoveryUsername('xesulaxe@citmo.net');
        loginPage1.clickEmailRecovery();
        loginPage1.recoveryMailnotification();
        loginPage1.clickGotologinpage();
    })
});

