import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Aut', function () {
    beforeEach(async function () {
        await LoginPage.open();
    });

    it('Successful log in', async function () {
        await expect(LoginPage.buttonSubmit)
            .toBeDisplayed();
        await LoginPage.login('astrouskaya@yahoo.com', '123Green123');
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();
    })

    it('Log in attempt with non-registred email', async function () {
        await LoginPage.login('invalid@yahoo.com', '123Green123');
        await expect(LoginPage.notification).toHaveText('Email is not registered');
    })

    it('Log in attempt with non-registred password', async function () {
        await LoginPage.login('astrouskaya@yahoo.com', 'invalid');
        await expect(LoginPage.notification).toHaveText('Incorrect password');
    })

    it('Credentials are required - uesername', async function () {
        await LoginPage.inputUsername.setValue('test');
        await LoginPage.inputUsername.smartClear();
        await expect(LoginPage.loginError).toHaveText('Required');
        // await LoginPage.inputPassword.setValue('test');
        // await LoginPage.inputPassword.smartClear();
        // await expect(LoginPage.passwordError).toHaveText('Required');
    })

    it('Credentials are required - password', async function () {
        await LoginPage.inputPassword.setValue('test');
        await LoginPage.inputPassword.smartClear();
        await expect(LoginPage.passwordError).toHaveText('Required');
    })

    it('Error Email is not valid', async function () {
        await LoginPage.inputUsername.setValue('astrouskaya');
        await expect(LoginPage.errorEmailIsNotValid).toHaveText('\'email\' is not a valid email');
    })

})