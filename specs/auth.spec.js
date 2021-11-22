describe('Aut', function () {
    it('Successful log in', async function () {
        await browser.url('/user/login');
        await expect($('.login-form-button'))
            .toBeDisplayed();
        await $('[qa-id="email"]')
            .setValue('astrouskaya@yahoo.com');
        await $('[qa-id="password"]')
            .setValue('123Green123');
        await expect($('.login-form-button'))
            .toBeEnabled();
        await $('.login-form-button')
            .click();
        await expect($('img[alt="avatarIcon"]'))
            .toBeDisplayed();
    })
})