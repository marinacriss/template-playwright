import selector from './login.selector';
import validEmailGenerator from '../../../helpers/valid-email-generator';
import userCredentials from '../../../fixtures/user-credentials.json' with { type: 'json' };

const open = async () => {
  const url = 'http://automationexercise.com';
  await page.goto(url);
  await page.click(selector.CONCENT);
};

const clickSignLogin = async () => {
  await page.click(selector.LINK_SIGNUP);
};

const enterSignUpDetails = async () => {
  let email = validEmailGenerator();
  await page.fill(selector.LOGIN_NAME, userCredentials.name);
  await page.fill(selector.LOGIN_MAIL, email);
  await page.click(selector.BTN_SIGNUP);
};

export default {
  open,
  clickSignLogin,
  enterSignUpDetails,
};
