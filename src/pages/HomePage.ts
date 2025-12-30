import { expect, type Locator, type Page } from '@playwright/test';
import { NavBar } from './components/NavBar';

export class HomePage {
  readonly page: Page;
  readonly nav: NavBar;
  readonly body: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nav = new NavBar(page);
    this.body = page.locator('body');
  }

  async open() {
    await this.page.goto('/');
    await expect(this.page).toHaveTitle(/automation exercise/i);
    await expect(this.body).toBeVisible();
  }
}


