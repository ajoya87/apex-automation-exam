import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly productInfoSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productInfoSection = page.locator('.product-information');
  }

  async verifyProductDetails() {
    const info = this.productInfoSection;
    await info.locator('h2').waitFor(); // Product Name
    await info.getByText('Category:').waitFor();
    await info.getByText('Rs.').waitFor();
    await info.getByText('Availability:').waitFor();
    await info.getByText('Condition:').waitFor();
    await info.getByText('Brand:').waitFor();
  }
}
