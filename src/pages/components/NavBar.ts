import { expect, type Locator, type Page } from '@playwright/test';

export class NavBar {
  readonly page: Page;
  readonly signupLoginLink: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', { name: /signup\s*\/\s*login/i });
    this.logoutLink = page.getByRole('link', { name: /logout/i });
  }

  async goToSignupLogin() {
    await this.signupLoginLink.click();
    await expect(this.page).toHaveURL(/\/login/);
  }

  async logout() {
    await this.logoutLink.click();
    await expect(this.page).toHaveURL(/\/login/);
  }
}


