import {test} from "@playwright/test";
test ("", async ({page})=> {
await page.goto("https://material.playwrightvn.com/");
await page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]").click();
//await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe");
for (let i =0; i<10; i++) {
const title = ` Khoa học công nghệ`;
const content = `Tài sản số, tiền mã hóa được bảo vệ như tài sản thực`;
await page.locator("//input[@id='note-title']").fill(title+"");
await page.locator("//textarea[@id='note-content']").fill(content +"");
await page.locator("//button[@id='add-note']").click();
}
await page.locator("//input[@id='search']").fill("khoa học công nghệ");

});
