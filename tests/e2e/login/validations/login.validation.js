import selector from '../../login/page/login.selector';
import { test, expect } from '@playwright/test';
import loginPage from '../page/login.page';

const verifyPageLoaded = async () => {
  expect(selector.LOGO).toBeTruthy();
}

const verifyTextSignUp = async () => {
  await expect(page.locator(selector.TXT_SIGNUP)).toHaveText('New User Signup!');
}

const verifyForm = async () => {
  await expect(page.locator(selector.TITLE_FORM)).toHaveText('Enter Account Information');
}

export default {
  verifyPageLoaded,
  verifyTextSignUp,
  verifyForm,
};
