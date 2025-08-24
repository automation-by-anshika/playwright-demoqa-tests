import { test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { ElementPage } from "../pages/ElementPage";


test("Verify Element Page", async ({ page }) => {

  const elementPage = new ElementPage(page);
  test.setTimeout(60000);
  const homePage = new HomePage(page);
  await elementPage.goto();
  await elementPage.verifyElementScreenText();

});

test("Verify Text Box Test Cases", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  test.setTimeout(60000);
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
  test.setTimeout(60000);
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
  test.setTimeout(60000);
  await elementPage.goto();
  await elementPage.verifyElementScreenText();
  await elementPage.clickOnRadioButton();
  await elementPage.verifyPageText();
  await elementPage.verifyQuesText();
  await elementPage.YesRadioButtonSelectAndResponse();
  await elementPage.ImpressiveRadioButtonSelectAndResponse();
  await elementPage.verifyNoRadioIsDisabled();

});

test("Verify Web Table Test Cases", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  test.setTimeout(60000);
  await elementPage.goto();
  await elementPage.VerifyWebTableScreen();
  await elementPage.EnterDataInTable();
  await elementPage.SearchEntry();
  await elementPage.EditEntry();
  await elementPage.DeleteEntry();
});

test("Verify Button Click Feature", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  test.setTimeout(60000);
  await elementPage.goto();
  await elementPage.ButtonFeature();
  await elementPage.DoubleClick();
  await elementPage.RightClick();
  await elementPage.LeftClick()
  
});
test("Verify Link Open Test Cases", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  test.setTimeout(60000);
  await elementPage.goto();
  await elementPage.LinkNavigateion();
  await elementPage.LinkOpenInNewtab();
  
});
test("Verify Download file test case", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  test.setTimeout(60000);
  await elementPage.goto();
  await elementPage.VerifyDownloadAndUpload();
  await elementPage.DownloadFile();
  });

  test("Verify Upload file test case", async ({ page }) => {
  const elementPage = new ElementPage(page);
  const homePage = new HomePage(page);
  test.setTimeout(60000);
  await elementPage.goto();
  await elementPage.VerifyDownloadAndUpload();
  await elementPage.UploadFile();
  await page.waitForTimeout(3000);
  });