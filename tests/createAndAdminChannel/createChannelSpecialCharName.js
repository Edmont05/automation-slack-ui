const { expect } = require("chai");
const tags = require("mocha-tags");

const testConfig = require("../../testConfig.json");
const LoginPage = require("../../main/pages/loginPage");
const { myBefore, myAfter, myAfterScreen } = require("../../main/hooks");
const MainPage = require("../../main/pages/mainPage");
const CreateForm = require("../../main/pages/createForm");
const AddUserForm = require("../../main/pages/addUserForm");

describe("Test 3", function () {
  this.timeout(50000);
  var nameChannel = "";
  before(async () => {
    await myBefore();
  });

  afterEach(async function () {
    await myAfterScreen.call(this);
  });

  after(async () => {
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
    nameChannel = `#${Math.random()
      .toString(36)
      .substring(2, 8)}`.toLowerCase();
    await CreateForm.setNameChannel(nameChannel);
    await CreateForm.visibleError();
    expect(await CreateForm.getTextError()).to.equal(
      "Los nombres de canal no pueden contener espacios ni otros signos de puntuación. Usa guiones para separar las palabras."
    );
  });
});
