import selector from '..//page/form.selector';
import userCredentials from '../../../fixtures/user-credentials.json' with { type: 'json' };

const fillAccountInformation = async () => {
  await page.click(selector.TITLE);
  await page.fill(selector.PASSWORD, userCredentials.password);
  await page.locator(selector.BIRTH_DAY).selectOption(userCredentials.days);
  await page.locator(selector.BIRTH_MONTH).selectOption(userCredentials.months);
  await page.locator(selector.BIRTH_YEAR).selectOption(userCredentials.years);
};

const selectCheckBoxes = async () => {
  await page.click(selector.NEWSLETTER);
  await page.click(selector.SPECIALOFFERS);
};

const fillAdressInformation = async () => {
  await page.fill(selector.FIRST_NAME, userCredentials.firstName);
  await page.fill(selector.LAST_NAME, userCredentials.lastName);
  await page.fill(selector.COMPANY, userCredentials.company);
  await page.fill(selector.ADRESS, userCredentials.address);
  await page.fill(selector.ADRESS2, userCredentials.complement);
  await page.locator(selector.COUNTRY).selectOption(userCredentials.country);
  await page.fill(selector.STATE, userCredentials.state);
  await page.fill(selector.CITY, userCredentials.city);
  await page.fill(selector.ZIPCODE, userCredentials.zipcode);
  await page.fill(selector.MOBILENUMBER, userCredentials.mobile);
  await page.click(selector.BTT_CREATE_ACCOUNT);
};

export default {
  fillAccountInformation,
  selectCheckBoxes,
  fillAdressInformation,
};
