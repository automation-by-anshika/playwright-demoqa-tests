import { expect, Page } from "@playwright/test";

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

}

