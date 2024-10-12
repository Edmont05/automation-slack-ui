const { expect } = require('chai');
const tags = require('mocha-tags');

const testConfig = require('../../testConfig.json');
const LoginPage = require('../../main/pages/loginPage');
const { myBefore, myAfter, myAfterScreen } = require('../../main/hooks');
const MainPage = require('../../main/pages/mainPage');
const CreateForm = require('../../main/pages/createForm');
const AddUserForm = require('../../main/pages/addUserForm');
const SettingChannelForm = require('../../main/pages/settingChannelsFrom');

describe('Test 30', function () {
    this.timeout(100000);
    before(async () => {
        await myBefore();
    });

    afterEach(async function () {
        await myAfterScreen.call(this);
    });

    after(async () => {
        await myAfter();
    });

    tags('e2e').it('Intento de Cambiar Acceso sin Permisos', async () => {
        await LoginPage.isVisible();
        await LoginPage.setCredentials(testConfig.credentialsGuest.username, testConfig.credentialsGuest.password);
        await LoginPage.clickLoginButton();
        await LoginPage.clickLinkSlack();

        await MainPage.isVisible();
        await MainPage.clickRightNameChannel('edmont2');
        await MainPage.clickMoreInfoChannel();

        expect(await SettingChannelForm.isVisible()).to.be.true;

    })
});