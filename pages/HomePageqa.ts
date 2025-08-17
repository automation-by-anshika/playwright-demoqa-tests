import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly getStartedButton = 'text=Get started';
  readonly titleLocator = '.navbar__title';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async clickGetStarted() {
    await this.page.click(this.getStartedButton);
  }

  async assertTitle() {
    await expect(this.page.locator(this.titleLocator)).toHaveText('Playwright');
  }
}
