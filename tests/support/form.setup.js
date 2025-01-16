import loginSetup from '../support/login.setup';
import formPage from '../e2e/form/page/form.page';

export default async () => {
  await loginSetup();
  await formPage.fillAdressInformation();
  await formPage.selectCheckBoxes();
  await formPage.fillAccountInformation();
  await formPage.clickCreatedCount();
};
