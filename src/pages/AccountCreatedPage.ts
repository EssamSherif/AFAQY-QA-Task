import { expect, type Locator, type Page } from '@playwright/test';

export class AccountCreatedPage {
  readonly page: Page;
  readonly accountCreatedHeading: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.accountCreatedHeading = page.getByRole('heading', { name: /account created/i });
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }

  async assertLoaded() {
    await expect(this.accountCreatedHeading).toBeVisible();
  }

  async continue() {
    // Sometimes the "Continue" button does not have the data-qa attribute; fallback to text.
    const continueBtn = (await this.continueButton.count())
      ? this.continueButton
      : this.page.getByRole('link', { name: /continue/i });

    await continueBtn.click();
  }
}


