import Page from './page';

class LoginPage extends Page {
    get inputUsername() {
        return $('[qa-id="email"]');
    }
    
    get inputPassword() {
        return $('[qa-id="password"]');
    }
    
    get buttonSubmit() {
        return $('.login-form-button ');
    }

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
