import { test } from '@playwright/test';
import loginPage from '../page/login.page';
import loginValidation from '../validations/login.validation';

test.beforeEach(async ({ page }) => {
  global.page = page;
});

test.describe('Check new user', () => {
  test('Validate new user', async () => {
    await loginPage.open();
    await loginValidation.verifyPageLoaded();
    await loginPage.clickSignLogin();
    await loginValidation.verifyTextSignUp();
    await loginPage.enterSignUpDetails();
    await loginValidation.verifyForm();
  });
});
