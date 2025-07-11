import { test } from "@playwright/test";
test("Navigate to Todo Page", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
    for (let i = 0; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill("Todo " + i);
        await page.waitForTimeout(100);
        await page.locator("//button[@id='add-task']").click();
    };
    page.on('dialog', async dialog => dialog.accept());
    for (let j = 100; j >=0; j--) {
        if (j % 2 === 1) {
            await page.locator(`//button[@onclick='deleteTask(${j})']`).click();
            await page.waitForTimeout(100);

        }
    };
});