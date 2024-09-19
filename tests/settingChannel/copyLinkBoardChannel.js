const { expect } = require('chai');
const tags = require('mocha-tags');

const testConfig = require('../../testConfig.json');
const LoginPage = require('../../main/pages/loginPage');
const { myBefore, myAfter, myAfterScreen } = require('../../main/hooks');
const MainPage = require('../../main/pages/mainPage');
const CreateForm = require('../../main/pages/createForm');
const AddUserForm = require('../../main/pages/addUserForm');
const SettingChannelForm = require('../../main/pages/SettingChannelForm');

describe('Test 27', function () {
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
    /*
    const clipboardy = require('clipboardy');

    async function verifyClipboardHasContent() {
        // Leer el contenido del portapapeles
        const clipboardContent = clipboardy.readSync();
    
        // Verificar que el contenido no esté vacío
        if (clipboardContent && clipboardContent.trim().length > 0) {
            console.log('El contenido del portapapeles existe:', clipboardContent);
        } else {
            console.log('Error: El portapapeles está vacío o no contiene datos.');
        }
    }*/
    tags('e2e').it('Test', async () => {
        await LoginPage.isVisible();
        await LoginPage.setCredentials(testConfig.credentials.username, testConfig.credentials.password);
        await LoginPage.clickLoginButton();
        await LoginPage.clickLinkSlack();

        await MainPage.isVisible();
        await MainPage.clickRightNameChannel('edmont2');
        await MainPage.clickMoreInfoChannel();

        await SettingChannelForm.isVisible();
        await SettingChannelForm.clickIconCallChannelButton();
        await SettingChannelForm.clickcopyLinkButtonChannelButton();
        // await SettingChannelForm.isVisible();

        // await verifyClipboardHasContent();

    })
});