const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: { width: 1920, height: 1080 }
    });

    await page.goto('http://localhost:4200', { waitUntil: 'networkidle' });

    // Wait a few seconds for animations (like typing text, slides) to finish beautifully
    await page.waitForTimeout(4000);

    // We should create a demo picture for the user! Let's save it to artifacts if we know the path, 
    // but let's save it directly in the project and the user Desktop to make it super easy for them.
    const screenshotPath = 'C:\\Users\\LENOVO\\Desktop\\Yamen\\Front\\linkedin\\portfolio_demo.png';

    await page.screenshot({ path: screenshotPath, fullPage: false });

    console.log(`Screenshot saved to: ${screenshotPath}`);

    await browser.close();
})();
