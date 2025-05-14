import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.1';
import { ProductsPage } from '../pages/ProductPage';
import { ProductDetailPage } from '../pages/ProductDetails';

test.describe('Verify All Products and Product Detail Page', () => {
  test('should verify products list and product details', async ({ page }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);

    // Step 1: Navigate to URL
    await homePage.goto();

    // Step 2: Verify that home page is visible
    await expect(page).toHaveURL(/automationexercise\.com/);
    await homePage.isHomeVisible();

    // Step 3: Click on 'Products' button
    await homePage.clickProducts();

    // Step 4: Verify navigation to ALL PRODUCTS page
    await expect(page).toHaveURL(/\/products/);
    await productsPage.isProductsPageVisible();

    // Step 5: Verify product list is visible
    await productsPage.verifyProductsListVisible();

    // Step 6: Click on 'View Product' of the first product
    await productsPage.clickFirstViewProduct();

    // Step 7: Verify URL and product detail page
    await expect(page).toHaveURL(/\/product_details\//);

    // Step 8: Verify product detail elements
    await productDetailPage.verifyProductDetails();
  });
});
