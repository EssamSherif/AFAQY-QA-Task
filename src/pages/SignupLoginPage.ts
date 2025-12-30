import { expect, type Locator, type Page } from '@playwright/test';

export class SignupLoginPage {
  readonly page: Page;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupNameInput = page.locator('[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
  }

  async assertLoaded() {
    await expect(this.page).toHaveURL(/\/login/);
    await expect(this.signupButton).toBeVisible();
  }

  async startSignup(name: string, email: string) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();

    // On success, site navigates to /signup and shows account info section.
    await expect(this.page).toHaveURL(/\/signup/);
    await expect(this.page.getByText(/enter account information/i)).toBeVisible();
  }
}


