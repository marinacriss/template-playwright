import selector from "../page/form.selector";
import { expect } from '@playwright/test';


const verifyTextTitle = async () => {
    await expect(page.locator(selector.TITLE_FORM)).toHaveText('Enter Account Information');
}
const verifyTextCount = async () => {
    await expect (page.locator(selector.TXT_COUNT)).toHaveText('Account Created!');
}


export default {
    verifyTextCount,
    verifyTextTitle,
};