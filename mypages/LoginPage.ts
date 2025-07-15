export class LoginPage {
    constructor(public page) {}

    async navigate() {
        await this.page.goto('https://automationexercise.com/login');
    }

    async login(email : string, password: string) {
        await this.page.waitForSelector('input[data-qa="login-email"]', {state: 'visible'});
        await this.page.fill('input[data-qa="login-email"]', email, { timeout: 60000});
        await this.page.fill('input[data-qa="login-password"]', password);
        await this.page.click('button[data-qa="login-button"]');
    }

    async isLoggedIn(): Promise<boolean> {
        return this.page.locator('text-Logged in as');
    }
}