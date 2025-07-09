import { test } from "@playwright/test";
test("Navigate to product-page ", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[contains(text(), 'Bài học 2: Product page')]").click();
    await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 });
    await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    await page.locator("//button[@data-product-id='3']").click();

});