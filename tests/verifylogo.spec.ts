import { test, expect } from '@playwright/test';

test('Logo should be visible on ToolsQA homepage', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Locate logo with exact selector
  const logo = page.locator("img[src='/images/Toolsqa.jpg']");

  // Assert visibility
  await expect(logo).toBeVisible();
});
