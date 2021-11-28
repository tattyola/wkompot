import Page from './page';

class LoginPage extends Page {
    get inputUsername() {return $('[qa-id="email"]');}
    get inputPassword() {return $('[qa-id="password"]');}
    get buttonSubmit() {return $('.login-form-button');}
    get notification() {return $('.ant-notification-notice-message');}
    get loginError() {return $('//div[@data-qa="normalEmail"]//div[@class="ant-form-item-explain-error"]');}
    get passwordError() {return $('//div[@class="ant-form-item-explain-error"]');}
    get errorEmailIsNotValid() {return $('//div[@class="ant-form-item-explain-error"][contains(text(), "\'email\' is not a valid email")]')}

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await expect (this.buttonSubmit).toBeEnabled();
        await this.buttonSubmit.click();
    }

    open() {
        return super.open('/user/login');
    }
}

export default new LoginPage();
