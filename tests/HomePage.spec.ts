import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("Website should be properly load", async ({ page }) => {
  const homePage = new HomePage(page);
  test.setTimeout(60000);
  await homePage.goto();
  await homePage.assertLogo();
});

test("Verify Element Menu", async ({ page }) => {
  const homePage = new HomePage(page);
  test.setTimeout(60000);
  await homePage.goto();
//  await homePage.scrollToElementMenu();
  await homePage.clickElementMenu();
});
