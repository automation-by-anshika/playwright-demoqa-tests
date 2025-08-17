import { expect, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://demoqa.com/"); // or ToolsQA URL
  }

  async assertLogo() {
    const logo = this.page.locator("img[src='/images/Toolsqa.jpg']");
    await expect(logo).toBeVisible();
  }

  async scrollToElementMenu() {
  const elementMenu = this.page.locator("//h5[normalize-space()='Elements']");
  await elementMenu.scrollIntoViewIfNeeded();
}
async clickElementMenu() {
    const elementMenu = this.page.locator("(//*[name()='svg'][@stroke='currentColor'])[1]");
    await elementMenu.waitFor({ state: "visible", timeout: 10000 });
    await elementMenu.scrollIntoViewIfNeeded();
    await elementMenu.click();  
  }
 

}
