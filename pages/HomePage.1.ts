import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly productsButton: Locator;
  readonly homeImage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsButton = page.getByRole('link', { name: 'Products' });
    this.homeImage = page.locator('img[alt="Website for automation practice"]');
  }

  async goto() {
    await this.page.goto('http://automationexercise.com');
  }

  async isHomeVisible() {
    await this.homeImage.waitFor({ state: 'visible' });
  }

  async clickProducts() {
    await this.productsButton.click();
  }
}
