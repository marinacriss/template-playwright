import loginPage from '../e2e/login/page/login.page';

export default async () => {
    await loginPage.open();
    await loginPage.clickSignLogin();
    await loginPage.enterSignUpDetails();
};