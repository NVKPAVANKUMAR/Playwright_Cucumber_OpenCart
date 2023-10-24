class BasePage {

    async pause() {
        await page.waitForTimeout(3000)
    }

    async validateElementPresent(selector) {
        await page.waitForSelector(selector);
        await page.locator(selector).waitFor({ state: "visible" });
    }

    async launchApplication() {
        await page.goto('https://naveenautomationlabs.com/opencart/');
    }

    async clickElement(selector) {
        await page.waitForSelector(selector);
        await page.locator(selector).click();
    }

    async compareElementTextContent(selector, textValue) {
        await page.waitForSelector(selector);
        const elementTextContent = await page.locator(selector).textContent();
        expect(elementTextContent.trim()).equal(textValue);
    }

    async navigateToLoginPage() {
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account', { setTimeout: 20000 })
    }

    async enterInputValue(selector, value) {
        await this.clickElement(selector);
        await page.fill(selector, value);
    }

}

module.exports = { BasePage }
