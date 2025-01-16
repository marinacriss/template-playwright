import selector from '../page/conclusion.selector';
import { expect } from '@playwright/test';

//Verifique se o botão 'Logged in as username' está visível.
const validateUserName = async () => {
  expect(selector.USERNAME).toBeTruthy();
};

//Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
const validateSucessDeleted = async () => {
  await expect(page.locator(selector.TXT_COUNT_DELETED)).toHaveText(
    'Account Deleted!',
  );
  await page.click(selector.BTT_CONTINUE);
};

export default {
  validateUserName,
  validateSucessDeleted,
};
