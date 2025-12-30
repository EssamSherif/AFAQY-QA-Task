import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { SignupLoginPage } from '../src/pages/SignupLoginPage';
import { SignupFormPage } from '../src/pages/SignupFormPage';
import { AccountCreatedPage } from '../src/pages/AccountCreatedPage';
import { loadBaseUsers } from '../src/utils/loadUsers';
import { buildRandomUser } from '../src/utils/userFactory';

const baseUsers = loadBaseUsers();

for (const base of baseUsers) {
  test(`Sign up For: ${base.label} then log out`, async ({ page }) => {
    const home = new HomePage(page);
    const signupLogin = new SignupLoginPage(page);
    const signupForm = new SignupFormPage(page);
    const accountCreated = new AccountCreatedPage(page);

    const user = buildRandomUser(base);

    await test.step('Open website', async () => {
      await home.open();
    });

    await test.step('Go to Signup', async () => {
      await home.nav.goToSignupLogin();
      await signupLogin.assertLoaded();
    });

    await test.step('Start signup with random user', async () => {
      await signupLogin.startSignup(`${user.firstName} ${user.lastName}`, user.email);
      await signupForm.assertLoaded();
    });

    await test.step('Fill full registration data and create account', async () => {
      await signupForm.fillAndSubmit(user);
      await accountCreated.assertLoaded();
    });

    await test.step('Continue after account creation', async () => {
      await accountCreated.continue();
      await expect(page.locator('body')).toBeVisible();
    });

    await test.step('Sign out', async () => {
      await home.nav.logout();
      await signupLogin.assertLoaded();
    });
  });
}


