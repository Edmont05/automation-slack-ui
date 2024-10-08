const { expect } = require("chai");
const tags = require("mocha-tags");

const testConfig = require("../../testConfig.json");
const LoginPage = require("../../main/pages/loginPage");
const { myBefore, myAfter, myAfterScreen } = require("../../main/hooks");
const MainPage = require("../../main/pages/mainPage");
const CreateForm = require("../../main/pages/createForm");
const AddUserForm = require("../../main/pages/addUserForm");

describe("Test 1", function () {
  this.timeout(100000);
  var nameChannel = "";
  before(async () => {
    await myBefore();
  });

  afterEach(async function () {
    await myAfterScreen.call(this);
  });

  after(async () => {
    // await MainPage.isVisible();
    // await MainPage.clickRightNameChannel('edmont2');
    // await MainPage.clickMoreInfoChannel();
    // await SettingChannelForm.isVisible();
    // await SettingChannelForm.clickSettingTab();
    // await SettingChannelForm.clickdeleteChannelButton();
    // await SettingChannelForm.clickacceptedeleteChannelCheck();
    // await SettingChannelForm.clickconfirmdeleteChannelButton();
    await myAfter();
  });

  tags("e2e").it("Test", async () => {
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
    nameChannel = `ran${Math.random()
      .toString(36)
      .substring(2, 8)}`.toLowerCase();
    await CreateForm.setNameChannel(nameChannel);

    await CreateForm.clickNext();
    await CreateForm.clickPublicOption();
    await CreateForm.clickCreate();

    await AddUserForm.clickOmit();

    expect(await MainPage.getNameChannels()).to.include(nameChannel);
  });
});
