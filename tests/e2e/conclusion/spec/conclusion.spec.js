import { test } from '@playwright/test';
import conclusionPage from '../page/conclusion.page';
import conclusionValidation from '../validation/conclusion.validation';
import formSetup from '../../../support/form.setup';

test.beforeEach(async ({ page }) => {
  global.page = page;
  await formSetup();
});

test.describe('Register conclusion', () => {
  test('Validate if registration was sucessfull @conclusion', async () => {
    //Clique no botão 'Continue'.
    await conclusionPage.clickContinue();

    //Verifique se o botão 'Logged in as username' está visível.
    await conclusionValidation.validateUserName();

    //Clique no botão 'Delete Account'.
    await conclusionPage.deleteCount();

    //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    await conclusionValidation.validateSucessDeleted();
  });
});
