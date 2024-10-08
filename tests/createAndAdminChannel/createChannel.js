const { expect } = require('chai');
const tags = require('mocha-tags');

const testConfig = require('../../testConfig.json');
const LoginPage = require('../../main/pages/loginPage');
const { myBefore, myAfter, myAfterScreen } = require('../../main/hooks');
const MainPage = require('../../main/pages/mainPage');
const CreateForm = require('../../main/pages/createForm');
const AddUserForm = require('../../main/pages/addUserForm');

describe('Login Test', function () {
    this.timeout(50000);
    before(async () => {
        await myBefore();
    });

    afterEach(async function () {
        await myAfterScreen.call(this);
    });

    after(async () => {
        await myAfter();
    });

    tags('e2e').it('Test', async () => {
        await LoginPage.isVisible();
        await LoginPage.setCredentials(testConfig.credentials.username, testConfig.credentials.password);
        await LoginPage.clickLoginButton();
        await LoginPage.clickLinkSlack();

        await MainPage.isVisible();
        await MainPage.clickCreateNew();
        await MainPage.clickOptionChannel();

        await CreateForm.isVisible();
        await CreateForm.setNameChannel("Edmont");
        await CreateForm.clickNext();
        await CreateForm.clickPublicOption();
        await CreateForm.clickCreate();


        await AddUserForm.isVisible();
        await AddUserForm.clickOmit();

    })
});