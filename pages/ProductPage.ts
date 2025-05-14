import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly allProductsHeading: Locator;
  readonly productsList: Locator;
  readonly singleProducts: Locator;
  readonly firstViewProductButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allProductsHeading = page.getByText('All Products');
    this.productsList = page.locator('.features_items');
    this.singleProducts = page.locator('.single-products');
    this.firstViewProductButton = page.locator('.product-image-wrapper').first().getByText('View Product');
  }

  async isProductsPageVisible() {
    await this.allProductsHeading.waitFor();
    await this.productsList.waitFor();
  }

  async verifyProductsListVisible() {
    await this.singleProducts.first().waitFor();
  }

  async clickFirstViewProduct() {
    await this.firstViewProductButton.click();
  }
}
