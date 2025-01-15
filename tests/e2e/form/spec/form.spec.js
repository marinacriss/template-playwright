import { test } from '@playwright/test';
import formPage from "../page/form.page";
import formValidation from "../validations/form.validation";
import loginSetup from '../../../support/login.setup';

test.beforeEach(async ({ page }) => {
    global.page = page;
    await loginSetup();
});

test.describe('Registrar novo usuário', () => {
    test('Fill form', async () => {
        await formValidation.verifyTextTitle();
        await formPage.fillAdressInformation();
        await formPage.selectCheckBoxes();
        await formPage.fillAccountInformation();
        await formValidation.verifyTextCount();
    });
});
