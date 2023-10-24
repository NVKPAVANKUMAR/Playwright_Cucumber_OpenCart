const { Given, Then, defineStep, setDefaultTimeout } = require('@cucumber/cucumber')
const { HomePage } = require("../page-objects/home-page");
const homePage = new HomePage()

setDefaultTimeout(60000);

const locators = {
    accountHolder: "//a[@title='View my customer account']//span",
    automationPracticeLogo: "//img[@alt='naveenopencart']",
    backToHomeButton: ".fa-home",
    emailAddressInput: "#input-email",
    loginForm: "#login_form",
    loginFormSignInButton: "[type='submit']",
    myAccount: "//span[.='My Account']",
    myAccountBreadCrumb: "//span[.='My Account']",
    passwordInput: "#input-password",
    searchInput: "[name='search']",
    signInButton: "//ul[@class='dropdown-menu dropdown-menu-right']//a[.='Login']",
    signOutLink: "//a[@title='Log me out']",
    myOrders: "h2:nth-of-type(2)"
}

Given('I Navigate To The Automation Practice Home Page', async () => {
    await homePage.launchApplication();
    await homePage.validateElementPresent(locators.automationPracticeLogo);
    await homePage.validateElementPresent(locators.myAccount);
    await homePage.clickElement(locators.myAccount);
    await homePage.validateElementPresent(locators.signInButton);
    await homePage.clickElement(locators.signInButton);

    await homePage.enterInputValue(locators.emailAddressInput, '');
    await homePage.enterInputValue(locators.passwordInput, '');
    await homePage.clickElement(locators.loginFormSignInButton);

    await homePage.pause(5000);
    await homePage.validateElementPresent(locators.myAccount);
    await homePage.validateElementPresent(locators.myOrders);
})

Then('I Should See The {string} Element On Home Page', async (elementName) => {
    switch (elementName) {
        case 'Sign out':
            await homePage.compareElementTextContent(locators.signOutLink, elementName);
            break;
        case 'My account':
            await homePage.compareElementTextContent(locators.myAccountBreadCrumb, elementName);
            break;
        default:
            console.log('Please Pass A Valid Element Name');
    }
});

Then('I Should See The Search Input Element', async () => {
    await homePage.validateElementPresent(locators.searchInput);
});

Then('I Should See The Back To Home Button', async () => {
    await homePage.validateElementPresent(locators.backToHomeButton);
});

