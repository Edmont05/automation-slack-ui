const { expect } = require("chai");
const tags = require("mocha-tags");

const testConfig = require("../../testConfig.json");
const LoginPage = require("../../main/pages/loginPage");
const { myBefore, myAfter, myAfterScreen } = require("../../main/hooks");
const MainPage = require("../../main/pages/mainPage");
const CreateForm = require("../../main/pages/createForm");
const AddUserForm = require("../../main/pages/addUserForm");
const ChannelPage = require("../../main/pages/ChannelPage");

describe("Test 11", function () {
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

  tags("e2e").it("Búsqueda Básica de Canales", async () => {
    await LoginPage.isVisible();
    await LoginPage.setCredentials(
      testConfig.credentials.username,
      testConfig.credentials.password
    );
    await LoginPage.clickLoginButton();
    await LoginPage.clickLinkSlack();

    await MainPage.isVisible();
    await MainPage.clickmanageChannel();
    await MainPage.clickadminOptionChannel();
    await MainPage.clickDerChannel();

    await ChannelPage.reload();
    await ChannelPage.setCredentials("an");
    await ChannelPage.isfilterVisible();

    const channelNames = await ChannelPage.getNameChannelsSearch();
    const containsAll = channelNames.some((name) => name.includes("an"));
    expect(containsAll).to.be.true;
  });
});
