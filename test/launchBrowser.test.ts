import {chromium } from "playwright";
describe ('Launch Browser', () => {

    test ('Open Wikipedia', async()=> {
        const browser = await chromium.launch({
            headless: true
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.wikipedia.org/');
        await browser.close();
    });
    test ('Open Wikipedia and Navigate to English', async()=> {
        const browser = await chromium.launch({
            headless: true
        });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.wikipedia.org/');
        await page.click('text=English');
        expect(page.url()).toContain('https://en.wikipedia.org/wiki/Main_Page');
        await browser.close();
    })
})