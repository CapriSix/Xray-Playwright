import {chromium } from "playwright";
describe ('Open Mathematics section in wikipedia', () => {
    beforeAll(done => {
        done()
    })
    test ('Wikipedia EN -> Maths', async()=> {
      const browser = await chromium.launch({ 
        headless : false,
        slowMo: 1000
      })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://en.wikipedia.org/wiki/Main_Page');
        await page.click('text=Mathematics');
        expect(page.url()).toContain('https://en.wikipedia.org/ki/Portal:Mathematics');
        await browser.close();
    });
    afterAll(async done => {
        done();
      });
})