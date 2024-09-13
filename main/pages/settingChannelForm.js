const { untilIsLocated, untilIsVisible, reloadAndWaitForElement } = require("../../core/interactions/conditions");
const { clickOn, setValue } = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");

class SettingChannelForm {
    //Secction Tab
    aboutTab = myByCss('button[data-qa="channel_details_about_tab"]')
    membersTab = myByCss('button[data-qa="channel_details_members_tab"]')
    detailTab = myByCss('button[data-qa="channel_details_tabs_tab"]')
    integrationTab = myByCss('button[data-qa="channel_details_integrations_tab"]')
    settingTab = myByCss('button[data-qa="channel_details_settings_tab"]')

    iconFavoriteChannelButton = myByCss('button[data-qa="channel-header-star-button"]')
    notificationChannelSelect = myByCss('button[data-qa="control_button"]')
    iconCallChannelButton = myByCss('button[data-qa="call"]')
    
    
    // Secction Detail
    // optionChannel = myByCss('')

    // Secction Integration
    // optionChannel = myByCss('')

    // Secction Setting

    // optionChannel = myByCss('')
    // optionChannel = myByCss('')
    // optionChannel = myByCss('')
    // optionChannel = myByCss('')

    async isVisible() {
        await untilIsLocated(this.aboutTab);
        await untilIsLocated(this.membersTab);
        await untilIsLocated(this.detailTab);
        await untilIsLocated(this.integrationTab);
        await untilIsLocated(this.settingTab);

        await untilIsLocated(this.iconFavoriteChannelButton);
        await untilIsLocated(this.notificationChannelSelect);
        await untilIsLocated(this.iconCallChannelButton);
    }


    async clickAboutTab() {
        await untilIsVisible(this.aboutTab)
        await clickOn(this.aboutTab)
    }
    async clickMembersTab() {
        await untilIsVisible(this.membersTab)
        await clickOn(this.membersTab)
    }
    async clickDetailTab() {
        await untilIsVisible(this.detailTab)
        await clickOn(this.detailTab)
    }
    async clickIntegrationTab() {
        await untilIsVisible(this.integrationTab)
        await clickOn(this.integrationTab)
    }
    async clickSettingTab() {
        await untilIsVisible(this.settingTab)
        await clickOn(this.settingTab)
    }


    async clickIconFavoriteChannelButton() {
        await untilIsVisible(this.iconFavoriteChannelButton)
        await clickOn(this.iconFavoriteChannelButton)
    }
    async clickNotificationChannelSelect() {
        await untilIsVisible(this.notificationChannelSelect)
        await clickOn(this.notificationChannelSelect)
    }
    async clickIconCallChannelButton() {
        await untilIsVisible(this.iconCallChannelButton)
        await clickOn(this.iconCallChannelButton)
    }

    // Secction About
    nameEditChannel = myByCss('button[data-qa="undefined-edit-button"]')
    themeEditChannel = myByCss('button[data-qa="about__topic_field-edit-button"]')
    descripcionEditChannel = myByCss('button[data-qa="about__purpose_field-edit-button"]')
    leaveChannel = myByCss('button[data-qa="about__leave_channel_btn"]')

    async clicknameEditChannel() {
        await untilIsVisible(this.nameEditChannel)
        await clickOn(this.nameEditChannel)
    }
    async clickthemeEditChannel() {
        await untilIsVisible(this.themeEditChannel)
        await clickOn(this.themeEditChannel)
    }
    async clickdescripcionEditChannel() {
        await untilIsVisible(this.descripcionEditChannel)
        await clickOn(this.descripcionEditChannel)
    }
    async clickleaveChannel() {
        await untilIsVisible(this.leaveChannel)
        await clickOn(this.leaveChannel)
    }

    // Secction Members
    userSearchInput = myByCss('input[data-qa="members_dialog_filter_input"]')
    inviteUserButton = myByCss('div[data-qa="invite-members"]')
    addUserButton = myByCss('button[data-qa="ia_details_members_list_item_add"]')
    UserExist = myByCss('div[data-qa="medium_member_list_entity"]')

    async userCompatibility() {
        await untilIsLocated(this.UserExist);
        await untilIsVisible(this.UserExist);
    }
    async setAddUser(email) {
        await untilIsVisible(this.userSearchInput);
        await setValue(this.userSearchInput, email);
    }
    async clickInviteUserButton() {
        await untilIsVisible(this.inviteUserButton)
        await clickOn(this.inviteUserButton)
    }
    async clickAddUserButton() {
        await untilIsVisible(this.addUserButton)
        await clickOn(this.addUserButton)
    }

    // Secction Detail    

    // Secction Integration

    // Secction Setting



    // async setAddUser(email) {
    //     await untilIsVisible(this.usersInput);
    //     await setValue(this.usersInput, email);
    // }
}

module.exports = new SettingChannelForm(); 
