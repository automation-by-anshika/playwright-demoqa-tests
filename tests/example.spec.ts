import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePageqa';

test('Validate Playwright Home Page', async ({ page }) => {
  const homePage = new HomePage(page);
  test.setTimeout(60000);
  await homePage.goto();
  await homePage.assertTitle();
  await homePage.clickGetStarted();
});
