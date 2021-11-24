import LoginPage from '../pages/login.page';
import ProfilePage from '../pages/profile.page';

describe('Aut', function () {
    it('Successful log in', async function () {
        await LoginPage.open();
        await expect(LoginPage.buttonSubmit)
            .toBeDisplayed();
        await LoginPage.login('astrouskaya@yahoo.com', '123Green123');
        await expect(ProfilePage.iconUser)
            .toBeDisplayed();
    })
})