import { test } from "@playwright/test";
import { title } from "process";
test("Bài tập 4", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]").click();
    //await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe");
    for (let i = 0; i < 10; i++) {
        const title = ` Khoa học công nghệ`;
        const content = `Tài sản số, tiền mã hóa được bảo vệ như tài sản thực`;
        await page.locator("//input[@id='note-title']").fill(title + "");
        await page.locator("//textarea[@id='note-content']").fill(content + "");
        await page.locator("//button[@id='add-note']").click();
    }
    await page.locator("//input[@id='search']").fill("khoa học công nghệ");
});

// Phần chữa bài nâng cao
test("Avance:add personal notes", async ({ page }) => {
    let titles, contents;
    await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe", { waitUntil: 'domcontentloaded' });
    titles = await page.locator("//h3[@class='title-news']/a").allTextContents();
    contents = await page.locator("//p[@class='description']/a").allTextContents();
    console.log(titles);
    console.log(contents);
    await test.step("vào playWrightVN> lesson 3", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]").click();
    })
    await test.step("Thêm mới 10 note có nội dung là tiêu đề và 1 phần ngắn", async () => {
        for (let i = 0; i <= 5; i++) {
            await page.locator("//input[@id='note-title']").fill(titles[i] +"");
            await page.locator("//textarea[@id='note-content']").fill(contents[i]+"");
            await page.locator("//button[@id='add-note']").click();
        }
    })
    await test.step("thực hiện search nội dung bất kỳ", async () => {
        await page.locator("//input[@id='search']").fill("doanh nghiệp");
    })

})



