import selector from "../page/conclusion.selector";

const clickContinue = async () => {
    await page.click(selector.BTT_CONTINUE);
}

const deleteCount = async () => {
    await page.click(selector.DELETE);
}
export default {
    clickContinue,
    deleteCount,
  };