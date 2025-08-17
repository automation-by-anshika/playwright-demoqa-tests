import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Logo should be visible on ToolsQA homepage", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await homePage.assertLogo();
});

test("Verify Element Menu", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
//  await homePage.scrollToElementMenu();
  await homePage.clickElementMenu();
});
