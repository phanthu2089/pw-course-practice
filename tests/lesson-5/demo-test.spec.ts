import { test } from "@playwright/test";
let isChecked;
test("test case name", async ({ page }) => {
    await test.step("Navigate to material regesster", async () => {
        await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html")
    })
    await test.step("fill infomation", async () => {
        await page.locator("//input[@id='username']").fill("PlayWright VN");
        isChecked = await page.locator("//input[@id='reading']").isChecked();
        console.log(isChecked); // false
        await page.locator("//input[@id='reading']").check();
        isChecked = await page.locator("//input[@id='reading']").isChecked();
        console.log(isChecked); // true
        await page.locator("//input[@id='reading']").setChecked(false);
        isChecked = await page.locator("//input[@id='reading']").isChecked();
        console.log(isChecked);
        await page.locator("//select[@id='interests']").selectOption({value : "technology"});
        await page.locator("//input[@id='profile']").setInputFiles("data-test/hinh-nen-may-tinh-4k-7.jpg")
    })
    // await test.step("Click button register", async () => {
    //     await page.locator("//input[@id='email']") .pressSequentially('Playwright VN', {
    //         delay : 100
    //     })
    // })
});
test("test case click", async ({ page }) => {
    await test.step("Navigate to Mouse and click", async ({ }) => {
        await page.goto("https://material.playwrightvn.com/018-mouse.html")
    })
    await test.step("sigle click", async () => {
        await page.locator("//div[@id='topLeft']").click();
    })
    await test.step("double click", async () => {
        await page.locator("//div[@id='topLeft']").dblclick();
    })
 await test.step("Click right mouse", async () => {
        await page.locator("//div[@id='topLeft']").click({
        button: 'right'
        });
    })
     await test.step("Click option mouse", async () => {
        await page.locator("//div[@id='topLeft']").click({
        modifiers: ['Shift']
        });
    })
});