import { expect, Page } from "@playwright/test";
import * as fs from "fs";

export class ElementPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://demoqa.com/elements"); // or ToolsQA URL
  }

    async verifyElementScreenText(){
    const elementText = this.page.locator(".col-12.mt-4.col-md-6");
    await expect(elementText).toBeVisible();
  }

  async clickOnTextBoxMenu(){
    const clickTextMenu = this.page.locator("//span[normalize-space()='Text Box']")
    await clickTextMenu.click()
  }

  async scrollToSubmitButton() {
  const submitBtn = this.page.locator("#submit");
  await submitBtn.scrollIntoViewIfNeeded(); // scrolls until visible
  await expect(submitBtn).toBeVisible();    // optional check
}
async assertFormLabelsAndPlaceholders() {
  // Labels
  await expect(this.page.locator("#userName-label")).toHaveText("Full Name");
  await expect(this.page.locator("#userEmail-label")).toHaveText("Email");
  await expect(this.page.locator("#currentAddress-label")).toHaveText("Current Address");
  await expect(this.page.locator("#permanentAddress-label")).toHaveText("Permanent Address");

  // Placeholders
  await expect(this.page.locator("#userName")).toHaveAttribute("placeholder", "Full Name");
  await expect(this.page.locator("#userEmail")).toHaveAttribute("placeholder", "name@example.com");
  await expect(this.page.locator("#currentAddress")).toHaveAttribute("placeholder", "Current Address");
//  await expect(this.page.locator("#permanentAddress")).toHaveAttribute("placeholder", "Permanent Address");
}

async fillFormFields() {
  await this.page.locator("#userName").fill("Anshika Yadav");
  await this.page.locator("#userEmail").fill("anshika@example.com");
  await this.page.locator("#currentAddress").fill("RamPur, Varanasi");
  await this.page.locator("#permanentAddress").fill("RamPur, Varanasi");
}
async clickOnSubmit(){
  await this.page.locator("#submit").click()
}

async clickOnCheckBoxMenu(){
  await this.page.locator("//span[contains(.,'Check Box')]").click()
}
async verifyScreenCheckBoxText(){
  await expect(this.page.locator(".text-center")).toHaveText("Check Box");
}

async expandHomeNode(){
  const expandButton = this.page.locator("(//button[@title='Toggle'])[1]");
  if (await expandButton.isVisible()) {
    await expandButton.click();
  }
  const homeCheckbox = this.page.locator('//span[contains(text(),"Home")]/preceding-sibling::span[@class="rct-checkbox"]');
  await homeCheckbox.click();
  await expect(homeCheckbox.locator('svg')).toHaveClass(/rct-icon-check/);
}
async verifyCheckResult(){
  const expectedItems = [
    'home', 'desktop', 'notes', 'commands',
    'documents', 'workspace', 'react', 'angular',
    'veu', 'office', 'public', 'private',
    'classified', 'general', 'downloads', 'wordFile',
    'excelFile'
  ];
  // Get the result text from the output panel
  const resultText = await this.page.locator('#result').textContent();
  // Verify each expected item is present in the result
  for (const item of expectedItems) {
    expect(resultText?.toLowerCase()).toContain(item.toLowerCase());
  }
}
async clickOnRadioButton(){
  await this.page.locator("//span[.='Radio Button']").click();
}

async verifyPageText(){
  await expect(this.page.locator(".text-center")).toHaveText("Radio Button");
}

async verifyQuesText(){
  await expect(this.page.locator(".mb-3")).toHaveText("Do you like the site?")
}

async YesRadioButtonSelectAndResponse(){
  await this.page.locator("label[for='yesRadio']").click();
  // Verify the message
  const message = await this.page.locator(".mt-3").textContent();
  await expect(message).toBe("You have selected Yes");

}
async ImpressiveRadioButtonSelectAndResponse(){
  await this.page.locator("label[for='impressiveRadio']").click();
  // Verify the message
  const message = await this.page.locator(".mt-3").textContent();
  await expect(message).toBe("You have selected Impressive");

}

async verifyNoRadioIsDisabled() {
  const noRadio = this.page.locator("label[for='noRadio']"); // input element
  await expect(noRadio).toBeDisabled();
}

async clickOnWebTableMenu(){
  await this.page.locator("//span[contains(.,'Web Tables')]").click()
}

async verifyWebTableText(){
  await expect(this.page.locator(".text-center")).toBe("Web Tables");

}
async EnterFormFields() {
  await this.page.locator("#firstName").fill("Anshika Yadav");
  await this.page.locator("#firstName").fill("anshika@example.com");
  await this.page.locator("#currentAddress").fill("RamPur, Varanasi");
  await this.page.locator("#permanentAddress").fill("RamPur, Varanasi");
}
async VerifyWebTableScreen(){
  await this.page.locator("//span[contains(.,'Web Tables')]").click();
  await expect(this.page.locator(".text-center")).toHaveText("Web Tables");
}
  // add data for table
async EnterDataInTable(){
  await this.page.locator("#addNewRecordButton").click()
  await expect(this.page.locator("#registration-form-modal")).toHaveText("Registration Form");
  await this.page.locator("#firstName").fill("Anshika");
  await this.page.locator("#lastName").fill("Yadav");
  await this.page.locator("#userEmail").fill("anshikayad02@gmail.com");
  await this.page.locator("#age").fill("23");
  await this.page.locator("#salary").fill("5");
  await this.page.locator("#department").fill("QA/Testing")
  await this.page.locator("#submit").click();
}
async SearchEntry(){
  await this.page.locator("#searchBox").fill("Anshika")
}

async EditEntry(){
  await this.page.locator("//span[starts-with(@id, 'edit-record-')]").click();
  await this.page.locator("#submit").click();

}
async DeleteEntry(){
  await this.page.locator("//span[starts-with(@id,'delete-record-')]").click();
}

async ButtonFeature(){
  await this.page.locator("//span[contains(.,'Buttons')]").click();
  await expect(this.page.locator(".text-center")).toContainText("Buttons");
}
async DoubleClick(){
  await this.page.locator("#doubleClickBtn").dblclick();
  await expect(this.page.locator("#doubleClickMessage")).toHaveText("You have done a double click");
}
async RightClick(){
  await this.page.locator("#rightClickBtn").click({ button: 'right' });
  await expect (this.page.locator("#rightClickMessage")).toHaveText("You have done a right click");
}
async LeftClick(){
  await this.page.locator("//button[text()='Click Me']").click();
  await expect(this.page.locator("#dynamicClickMessage")).toHaveText("You have done a dynamic click");
}
async LinkNavigateion(){
  await this.page.locator("//span[text()='Links']").click();
  await expect(this.page.locator(".text-center")).toHaveText("Links")
}
async LinkOpenInNewtab(){
  await expect (this.page.locator("//strong[.='Following links will open new tab']")).toHaveText("Following links will open new tab");
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent('page'), // listen for new tab
    this.page.locator("#simpleLink").click()   // click the link
  ]);

  // Wait for the new page to load
  await newPage.waitForLoadState();

  // Assert new tab URL
  await expect(newPage).toHaveURL("https://demoqa.com/"); // replace with expected URL
  await expect(this.page.locator("//strong[.='Following links will open new tab']")).toBeVisible();

}
async VerifyDownloadAndUpload(){
  await this.page.locator("//li[contains(.,'Upload and Download')]").click();
  await expect(this.page.locator(".text-center")).toHaveText("Upload and Download");
}
async DownloadFile(){
  const [download] = await Promise.all([
    this.page.waitForEvent("download"),
    this.page.locator("#downloadButton").click()
  ]);
  const suggestedFileName = download.suggestedFilename();
  const downloadPath = `downloads/${suggestedFileName}`;
  // Ensure downloads folder exists
  if (!fs.existsSync("downloads")) {
    fs.mkdirSync("downloads");
  }
  await download.saveAs(downloadPath);
  //  Correct usage
  expect(fs.existsSync(downloadPath)).toBeTruthy();
}
async UploadFile(){
   await expect(this.page.locator("label[for='uploadFile']")).toHaveText("Select a file");
   await this.page.setInputFiles("#uploadFile", "fixtures/sampleFile.jpeg");
   await expect(this.page.locator("#uploadedFilePath")).toContainText("sampleFile.jpeg");
}
}

