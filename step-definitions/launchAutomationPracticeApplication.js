const { Given, Then, defineStep, When, setDefaultTimeout} = require('@cucumber/cucumber');
const { BasePage } = require('../page-objects/base-page');
const { HomePage } = require('../page-objects/home-page');
const basePage = new BasePage();
const homePage = new HomePage();

setDefaultTimeout(60000);
const locators = {
    automationPracticeLogo : "//img[@alt='naveenopencart']",
    contactUsButton : "//a[.='Contact Us']",
    createAccountSection : "[href='https://naveenautomationlabs.com/opencart/index.php?route=account/register']",
    emailAddressInput : "#input-email",
    loginForm : "#login_form",
    loginFormSignInButton : "[type='submit']",
    myAccount : "//span[.='My Account']",
    errorMessage: ".alert",
    passwordInput : "#input-password",
    signInButton : "[type='submit']",
    shoppingCartLabel : "//span[.='Shopping Cart']",
};

Given('I Navigate To The Automation Practice Page', async () => {
    await basePage.launchApplication();
    await basePage.validateElementPresent(locators.automationPracticeLogo);
});

Then('I Should See The {string} Element On Landing Page', async (elementName) => {
    switch (elementName) {
        case 'Contact Us':
            await basePage.compareElementTextContent(locators.contactUsButton, elementName);
            break;
        case 'Sign in':
            await basePage.compareElementTextContent(locators.signInButton, elementName);
            break;
        default:
            console.log('Please Pass A Valid Tile Name');
    }
});

Then('Shopping Cart Element Should Be Present', async() => {
    await basePage.validateElementPresent(locators.shoppingCartLabel);
});

When('I Click On The Sign In Element', async() => {
    await homePage.validateElementPresent(locators.myAccount);
    await homePage.clickElement(locators.myAccount);
    await basePage.validateElementPresent(locators.signInButton);
    await basePage.clickElement(locators.signInButton);
});

Then('I Should See The Create Account Section', async() => {
    await homePage.validateElementPresent(locators.myAccount);
    await homePage.clickElement(locators.myAccount);
    await basePage.validateElementPresent(locators.createAccountSection);
});

Then('I Should See The Already Registered Section', async() => {
    await basePage.validateElementPresent(locators.loginForm);
});

Given('I Am On The Automation Practice Login Page', async() => {
    await basePage.navigateToLoginPage();
});

When('I Enter My Mail Address {string}', async(email) => {
    await basePage.enterInputValue(locators.emailAddressInput, email);
});

When('I Enter My Password {string}', async(password) => {
    await basePage.enterInputValue(locators.passwordInput, password);
});

When('I Click On The Sign Button', async() => {
    await basePage.clickElement(locators.loginFormSignInButton);
});

Then('I Should Navigate To The Automation Practice Home Page', async() => {
    await basePage.pause(5000);
    await basePage.validateElementPresent(locators.myAccount);
});

Then('I Should See Error Message', async() => {
    await basePage.pause(5000);
    await basePage.validateElementPresent(locators.errorMessage);
});