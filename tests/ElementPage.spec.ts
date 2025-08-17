import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ElementPage } from "../pages/ElementPage";


test("Verify Element Page", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  await elementPage.goto();
  await elementPage.verifyElementScreenText();

});

test("Verify Text Box Test Cases", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  await elementPage.goto();
  await elementPage.verifyElementScreenText();
  await elementPage.clickOnTextBoxMenu();
  await elementPage.scrollToSubmitButton();
  await elementPage.assertFormLabelsAndPlaceholders();
  await elementPage.fillFormFields();
  await elementPage.clickOnSubmit();

});

test("Verify Check Box Test Cases", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  await elementPage.goto();
  await elementPage.verifyElementScreenText();
  await elementPage.clickOnCheckBoxMenu();
  await elementPage.verifyScreenCheckBoxText();
  await elementPage.expandHomeNode();
  await elementPage.verifyCheckResult();

});

test("Verify Radio Button Test Cases", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  await elementPage.goto();
  await elementPage.verifyElementScreenText();
  await elementPage.clickOnRadioButton();
  await elementPage.verifyPageText();
  await elementPage.verifyQuesText();
  await elementPage.YesRadioButtonSelectAndResponse();
  await elementPage.ImpressiveRadioButtonSelectAndResponse();
  await elementPage.verifyNoRadioIsDisabled();

});