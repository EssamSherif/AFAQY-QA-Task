import { expect, type Locator, type Page } from '@playwright/test';
import type { User } from '../models/User';

export class SignupFormPage {
  readonly page: Page;

  readonly titleMr: Locator;
  readonly titleMrs: Locator;
  readonly passwordInput: Locator;
  readonly daySelect: Locator;
  readonly monthSelect: Locator;
  readonly yearSelect: Locator;
  readonly newsletterCheckbox: Locator;
  readonly offersCheckbox: Locator;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly address1Input: Locator;
  readonly address2Input: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipInput: Locator;
  readonly mobileInput: Locator;

  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.titleMr = page.locator('#id_gender1');
    this.titleMrs = page.locator('#id_gender2');
    this.passwordInput = page.locator('[data-qa="password"]');
    this.daySelect = page.locator('[data-qa="days"]');
    this.monthSelect = page.locator('[data-qa="months"]');
    this.yearSelect = page.locator('[data-qa="years"]');
    this.newsletterCheckbox = page.locator('#newsletter');
    this.offersCheckbox = page.locator('#optin');

    this.firstNameInput = page.locator('[data-qa="first_name"]');
    this.lastNameInput = page.locator('[data-qa="last_name"]');
    this.companyInput = page.locator('[data-qa="company"]');
    this.address1Input = page.locator('[data-qa="address"]');
    this.address2Input = page.locator('[data-qa="address2"]');
    this.countrySelect = page.locator('[data-qa="country"]');
    this.stateInput = page.locator('[data-qa="state"]');
    this.cityInput = page.locator('[data-qa="city"]');
    this.zipInput = page.locator('[data-qa="zipcode"]');
    this.mobileInput = page.locator('[data-qa="mobile_number"]');

    this.createAccountButton = page.locator('[data-qa="create-account"]');
  }

  async assertLoaded() {
    await expect(this.page).toHaveURL(/\/signup/);
    await expect(this.createAccountButton).toBeVisible();
  }

  async fillAndSubmit(user: User) {
    if (user.title === 'Mr') await this.titleMr.check();
    if (user.title === 'Mrs') await this.titleMrs.check();

    await this.passwordInput.fill(user.password);
    await this.daySelect.selectOption({ label: user.dob.day });
    await this.monthSelect.selectOption({ label: user.dob.month });
    await this.yearSelect.selectOption({ label: user.dob.year });

    if (user.newsletter) await this.newsletterCheckbox.check();
    if (user.offers) await this.offersCheckbox.check();

    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.companyInput.fill(user.address.company);
    await this.address1Input.fill(user.address.address1);
    if (user.address.address2) await this.address2Input.fill(user.address.address2);

    await this.countrySelect.selectOption({ label: user.address.country });
    await this.stateInput.fill(user.address.state);
    await this.cityInput.fill(user.address.city);
    await this.zipInput.fill(user.address.zip);
    await this.mobileInput.fill(user.address.mobile);

    await this.createAccountButton.click();
  }
}


