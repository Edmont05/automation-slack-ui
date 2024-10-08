const {
  untilIsLocated,
  untilIsVisible,
  untilIsEnabled,
} = require("../../core/interactions/conditions");
const { clickOn, setValue, sleep } = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");

class CreateForm {
  nameChannelInput = myByCss('input[data-qa="channel-name-input"]');
  nextButton = myByCss('button[data-qa="create-channel-next-button"]');
  spinnerIcon = myByCss('[data-qa="infinite_spinner"]');
  optionsModal = myByCss(".ReactModalPortal");
  nextButtonDisabled = myByCss(
    '.c-button--disabled[data-qa="create-channel-next-button"]'
  );

  errorMessage = myByCss('div[data-qa-error="true"]');

  publicOption = myByCss('input[data-qa="public-option"]');
  privateOption = myByCss('input[data-qa="private-option"]');
  createOmitButton = myByCss('button[data-qa="create-channel-next-button"]');
  createSubmitButton = myByCss('button[data-qa="create-channel-next-button"]');
  omitPrivateButton = myByCss(
    'button[data-qa="invite_to_workspace_skip_button"]'
  );

  backButton = myByCss(
    'button[class="c-button c-button--outline c-button--medium"]'
  );

  async isVisible() {
    await untilIsLocated(this.nameChannelInput);
    // await untilIsLocated(this.nextButton);
  }
  async setNameChannel(name) {
    await untilIsVisible(this.nameChannelInput);
    await setValue(this.nameChannelInput, name);
  }
  async clickNext() {
    //await removeElement(this.optionsModal)
    await untilIsVisible(this.nextButton);
    await untilIsEnabled(this.nextButton);
    await clickOn(this.nextButton);
  }

  async disabledNext() {
    return untilIsVisible(this.nextButtonDisabled);
  }

  async visibleError() {
    await untilIsVisible(this.errorMessage);
  }
  async clickPublicOption() {
    await untilIsVisible(this.publicOption);
    await clickOn(this.publicOption);
  }
  async clickPrivateOption() {
    await untilIsVisible(this.privateOption);
    await clickOn(this.privateOption);
  }
  async clickCreate() {
    await untilIsVisible(this.createSubmitButton);
    await clickOn(this.createSubmitButton);
  }
  async clickcreateOmitButton() {
    await untilIsVisible(this.createSubmitButton);
    await clickOn(this.createSubmitButton);
  }
  async clickBack() {
    await untilIsVisible(this.backButton);
    await clickOn(this.backButton);
  }

  async clickomitPrivateButton() {
    await untilIsVisible(this.omitPrivateButton);
    await clickOn(this.omitPrivateButton);
    sleep(1000);
  }
}

module.exports = new CreateForm();
