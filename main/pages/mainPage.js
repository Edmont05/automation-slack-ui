const {
  untilIsLocated,
  untilIsVisible,
  untilIsNotVisible,
  reloadAndWaitForElement,
  myFindElement,
  myFindElements,
} = require("../../core/interactions/conditions");
const {
  clickOn,
  rightClickOn,
  pressRightArrow,
  sleep,
  setValue,
  pressEnter,
  getColumnTexts,
  pressDownArrow,
} = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");
const { Key } = require("selenium-webdriver");

class MainPage {
  // Button Add Drop
  iconHome = myByCss('[data-qa="tab_rail_home_button"]');
  iconCreateNew = myByCss(
    'button.p-control_strip__create_button[data-qa="unstyled-button"]'
  );
  optionChannel = myByCss('button[aria-labelledby="create-channels-label"]');
  message = myByCss('[data-qa="message_container"]');

  nameChannels = myByCss(
    '[data-qa="virtual-list-item"] [data-qa-channel-sidebar-is-you="false"] span span'
  );

  async clickCreateNew() {
    await untilIsVisible(this.iconCreateNew);
    await clickOn(this.iconCreateNew);
  }
  async clickOptionChannel() {
    await untilIsVisible(this.optionChannel);
    await clickOn(this.optionChannel);
  }

  // Manage Channels
  manageChannel = myByCss('button[data-qa="section_heading_button__channels"]');
  adminOptionChannel = myByCss(
    'button[data-qa="channel_section_submenu_manage"]'
  );

  async clickmanageChannel() {
    await untilIsVisible(this.manageChannel);
    await clickOn(this.manageChannel);

  }
  async clickadminOptionChannel() {
    await untilIsVisible(this.adminOptionChannel);
    await clickOn(this.adminOptionChannel);

  }
  async clickDerChannel() {
    await untilIsVisible(this.adminOptionChannel);
    await pressRightArrow(this.adminOptionChannel);
    await sleep(500);
    const activeElement = await this.getActiveElement();
    await activeElement.sendKeys(Key.ENTER);
  }

  async clickDerChannel2() {
    await untilIsVisible(this.adminOptionChannel);
    await pressRightArrow(this.adminOptionChannel);
    const activeElement1 = await this.getActiveElement();
    await activeElement1.sendKeys(Key.ARROW_DOWN);
    const activeElement2 = await this.getActiveElement();
    await activeElement2.sendKeys(Key.ARROW_DOWN);
    await sleep(500);
    const activeElement = await this.getActiveElement();
    await activeElement.sendKeys(Key.ENTER);
  }

  // Specific Options Channels
  channel = myByCss('span[data-qa="channel_sidebar_name_edmont"]');
  channelAddUser = myByCss('span[data-qa="channel_sidebar_name_adduser"]');
  moreInfoChannel = myByCss('button[data-qa="channel_details_modal"]');
  copyMenuChannel = myByCss('button[data-qa="copy_submenu"]');
  silenceChannel = myByCss('button[data-qa="channel_ctx_menu_mute"]');
  notificationsChannel = myByCss(
    'button[data-qa="channel_ctx_menu_change_notifications"]'
  );
  addToFavoriteChannel = myByCss('button[data-qa="channel_ctx_menu_star"]');
  removeToFavoriteChannel = myByCss(
    'button[data-qa="channel_ctx_menu_unstar"]'
  );
  leaveChannel = myByCss('button[data-qa="channel_ctx_menu_leave"]');

  async clickChannel() {
    await untilIsVisible(this.channel);
    await clickOn(this.channel);
  }
  async clickNameChannel(nameChannel) {
    let name = myByCss(`span[data-qa="channel_sidebar_name_${nameChannel}"]`);
    await untilIsVisible(name);
    await clickOn(name);
  }
  async clickRightNameChannel(nameChannel) {
    let name = myByCss(`span[data-qa="channel_sidebar_name_${nameChannel}"]`);
    await untilIsVisible(name);
    await rightClickOn(name);
  }
  async clickRightChannel() {
    await untilIsVisible(this.channel);
    await rightClickOn(this.channel);
  }
  async clickRightChannelAddUser() {
    await untilIsVisible(this.channelAddUser);
    await rightClickOn(this.channelAddUser);
  }
  async clickMoreInfoChannel() {
    await untilIsVisible(this.moreInfoChannel);
    await clickOn(this.moreInfoChannel);
  }
  async clickCopyMenuChannel() {
    await untilIsVisible(this.copyMenuChannel);
    await clickOn(this.copyMenuChannel);
  }
  async clickSilenceChannel() {
    await untilIsVisible(this.silenceChannel);
    await clickOn(this.silenceChannel);
  }
  async clickNotificationsChannel() {
    await untilIsVisible(this.notificationsChannel);
    await clickOn(this.notificationsChannel);
  }
  async clickAddToFavoriteChannel() {
    await untilIsVisible(this.addToFavoriteChannel);
    await clickOn(this.addToFavoriteChannel);
  }
  async clickremoveToFavoriteChannel() {
    await untilIsVisible(this.removeToFavoriteChannel);
    await clickOn(this.removeToFavoriteChannel);
  }
  async clickLeaveChannel() {
    await untilIsVisible(this.leaveChannel);
    await clickOn(this.leaveChannel);
  }

  // New
  // optionChannel = myByCss('')

  // General
  async isVisible() {
    await untilIsLocated(this.iconHome);
  }
  async sleeping() {
    await sleep(5000);
  }
  async isVisibleMessages() {
    await untilIsLocated(this.message);
  }
  async isNotVisibleChannel() {
    await untilIsNotVisible(this.channel);
  }

  /**
   * Enter
   * @returns {WebElement}
   */
  async getActiveElement() {
    return await myFindElement(myByCss(":focus"));
  }

  async getNameChannels(){
    return getColumnTexts(this.nameChannels)
  }
  
}

module.exports = new MainPage();
