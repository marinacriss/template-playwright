import { chromium } from '@playwright/test';

async function globalSetup(config) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  global.page = page;
}

export default globalSetup;
