const { expect } = require('chai');
const tags = require('mocha-tags');

const testConfig = require('../../testConfig.json');
const LoginPage = require('../../main/pages/loginPage');
const { myBefore, myAfter, myAfterScreen } = require('../../main/hooks');
const MainPage = require('../../main/pages/mainPage');
const CreateForm = require('../../main/pages/createForm');
const AddUserForm = require('../../main/pages/addUserForm');
const ChannelPage = require('../../main/pages/ChannelPage');
const SettingChannelForm = require('../../main/pages/settingChannelsFrom');

describe('Test 14', function () {
    this.timeout(100000);
    before(async () => {
        await myBefore();
    });

    afterEach(async function () {
        await myAfterScreen.call(this);
    });

    after(async () => {
        await MainPage.isVisible();
        await MainPage.clickRightNameChannel(nameChannel);
        await MainPage.clickMoreInfoChannel();
        await SettingChannelForm.isVisible();
        await SettingChannelForm.clickSettingTab();
        await SettingChannelForm.clickdeleteChannelButton();
        await SettingChannelForm.clickacceptedeleteChannelCheck();
        await SettingChannelForm.clickconfirmdeleteChannelButton();
        await myAfter();
    });

    tags('e2e').it('Combinación de Filtros', async () => {
        await LoginPage.isVisible();
        await LoginPage.setCredentials(
            testConfig.credentials.username,
            testConfig.credentials.password
        );
        await LoginPage.clickLoginButton();
        await LoginPage.clickLinkSlack();

        await MainPage.isVisible();
        await MainPage.clickCreateNew();
        await MainPage.clickOptionChannel();

        await CreateForm.isVisible();
        nameChannel = `an${Math.random().toString(36).substring(2, 8)}`.toLowerCase();
        await CreateForm.setNameChannel(nameChannel);

        await CreateForm.clickNext();
        await CreateForm.clickPublicOption();
        await CreateForm.clickCreate();

        await AddUserForm.clickOmit();

        await MainPage.isVisible();
        await MainPage.clickmanageChannel();
        await MainPage.clickadminOptionChannel();
        await MainPage.clickDerChannel2();

        await ChannelPage.reload();
        await ChannelPage.setCredentials("an");
        await ChannelPage.clickallChannelSelect();
        await ChannelPage.clickmyoptionChannelSelect();
        await ChannelPage.istypefilterVisible();

        const channelNames = await ChannelPage.getNameChannelsSearch();
        const containsAll = channelNames.some((name) => name.includes("an"));
        expect(containsAll).to.be.true;
        await ChannelPage.clickhomeButton();

    })
});