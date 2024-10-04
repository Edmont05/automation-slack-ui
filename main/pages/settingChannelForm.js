const { untilIsLocated, untilIsVisible, reloadAndWaitForElement, findUntilIsVisible } = require("../../core/interactions/conditions");
const { clickOn, setValue, setCleanValue } = require("../../core/interactions/action");
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
    initButtonChannelButton = myByCss('button[data-qa="huddle_button_menu_item"]')
    copyLinkButtonChannelButton = myByCss('button[data-qa="copy-link-menu-item"]')


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
    async isVisibleGuest() {
        await untilIsLocated(this.aboutTab);
        await untilIsLocated(this.membersTab);
        await untilIsLocated(this.detailTab);
        await untilIsLocated(this.integrationTab);
        await untilIsLocated(this.settingTab);

        // await untilIsLocated(this.iconFavoriteChannelButton);
        // await untilIsLocated(this.notificationChannelSelect);
        // await untilIsLocated(this.iconCallChannelButton);
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
    async clickinitButtonChannelButton() {
        await untilIsVisible(this.initButtonChannelButton)
        await clickOn(this.initButtonChannelButton)
    }
    async clickcopyLinkButtonChannelButton() {
        await untilIsVisible(this.copyLinkButtonChannelButton)
        await clickOn(this.copyLinkButtonChannelButton)
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

    inputEditNameChannel = myByCss('input[data-qa="channel-name-input"]')
    buttonCancelEditNameChannel = myByCss('body > div:nth-child(24) > div > div > div.c-sk-modal_footer > div > button.c-button.c-button--outline.c-button--medium')
    buttonSaveEditNameChannel = myByCss('body > div:nth-child(24) > div > div > div.c-sk-modal_footer > div > button.c-button.c-button--primary.c-button--medium')
    errorEditNameChannel = myByCss('[data-qa-alert="true"]')

    async setinputEditNameChannel(nameChannel) {
        await untilIsVisible(this.inputEditNameChannel);
        await setCleanValue(this.inputEditNameChannel);
        await setValue(this.inputEditNameChannel, nameChannel);

    }
    async clickbuttonCancelEditNameChannel() {
        await untilIsVisible(this.buttonCancelEditNameChannel)
        await clickOn(this.buttonCancelEditNameChannel)
    }
    async clickbuttonSaveEditNameChannel() {
        await untilIsVisible(this.buttonSaveEditNameChannel)
        await clickOn(this.buttonSaveEditNameChannel)
    }
    async iserrorEditNameChannelVisible() {
        await untilIsVisible(this.errorEditNameChannel)
    }

    inputEditThemeChannel = myByCss('body > div.ReactModalPortal > div > div > div.c-dialog__body.c-dialog__body--slack_scrollbar > div.c-basic_container.c-basic_container--size_medium.c-basic_container--bordered > div > div > div > div.ql-editor > p')
    buttonCancelEditThemeChannel = myByCss('[data-qa="dialog_cancel"]')
    buttonSaveEditThemeChannel = myByCss('[data-qa="dialog_go"]')

    async setinputEditNameChannel(themeChannel) {
        await untilIsVisible(this.inputEditThemeChannel);
        await setCleanValue(this.inputEditThemeChannel);
        await setValue(this.inputEditThemeChannel, themeChannel);

    }
    async clickbuttonCancelEditThemeChannel() {
        await untilIsVisible(this.buttonCancelEditThemeChannel)
        await clickOn(this.buttonCancelEditThemeChannel)
    }
    async clickbuttonSaveEditThemeChannel() {
        await untilIsVisible(this.buttonSaveEditThemeChannel)
        await clickOn(this.buttonSaveEditThemeChannel)
    }

    inputEditDescripcionChannel = myByCss('body > div.ReactModalPortal > div > div > div.c-dialog__body.c-dialog__body--slack_scrollbar > div.c-basic_container.c-basic_container--size_medium.c-basic_container--bordered > div > div > div > div.ql-editor.ql-blank > p')
    buttonCancelEditDescripcionChannel = myByCss('[data-qa="dialog_cancel"]')
    buttonSaveEditDescripcionChannel = myByCss('[data-qa="dialog_go"]')

    async setinputEditDescripcionChannel(descriptionChannel) {
        await untilIsVisible(this.inputEditDescripcionChannel);
        await setCleanValue(this.inputEditDescripcionChannel);
        await setValue(this.inputEditDescripcionChannel, descriptionChannel);

    }
    async clickbuttonCancelEditDescripcionChannel() {
        await untilIsVisible(this.buttonCancelEditDescripcionChannel)
        await clickOn(this.buttonCancelEditDescripcionChannel)
    }
    async clickbuttonSaveEditDescripcionChannel() {
        await untilIsVisible(this.buttonSaveEditDescripcionChannel)
        await clickOn(this.buttonSaveEditDescripcionChannel)
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
    changeChannelButton = myByCss('button[class="c-button-unstyled p-field p-field--button"]')

    archiveChannelButton = myByCss('button[data-qa="archive-channel"]')
    deleteChannelButton = myByCss('button[class="c-button-unstyled sk_raspberry_red p-field p-field--button"]')
    canceldeleteChannelButton = myByCss('button[class="c-button c-button--outline c-button--medium"]')
    convertdeleteChannelButton = myByCss('button[class="c-button c-button--danger c-button--medium"]')

    
    changePrivateChannelButton = myByCss('body > div:nth-child(24) > div > div > div.c-sk-modal_footer > div > button.c-button.c-button--danger.c-button--medium')
    changePublicChannelButton = myByCss('body > div:nth-child(26) > div > div > div.c-sk-modal_footer > div > button.c-button.c-button--primary.c-button--medium')
    changePublicChannelButton2 = myByCss('button[data-qa="private-to-public-modal-convert-btn"]')
    changearchiveChannelButton = myByCss('button[data-qa="archive_modal_go"]')

    async clickchangePrivateChannelButton() {
        await findUntilIsVisible(this.changeChannelButton)
        await clickOn(this.changeChannelButton)

    }
    async clickarchiveChannelButton() {
        await untilIsVisible(this.archiveChannelButton)
        await clickOn(this.archiveChannelButton)
    }
    async clickdeleteChannelButton() {
        await untilIsVisible(this.deleteChannelButton)
        await clickOn(this.deleteChannelButton)
    }
    async clickcanceldeleteChannelButton() {
        await untilIsVisible(this.canceldeleteChannelButton)
        await clickOn(this.canceldeleteChannelButton)
    }
    async clickconvertdeleteChannelButton() {
        await untilIsVisible(this.convertdeleteChannelButton)
        await clickOn(this.convertdeleteChannelButton)
    }
    async clickchangePropertyChannel() {
        try {
            await findUntilIsVisible(this.changePrivateChannelButton)
            await clickOn(this.changePrivateChannelButton)
        } catch (error) {
            await findUntilIsVisible(this.changePublicChannelButton)
            await clickOn(this.changePublicChannelButton)
        }
    }
    async clickchangePropertyChanneltoPublic() {
        await findUntilIsVisible(this.changePublicChannelButton2)
        await clickOn(this.changePublicChannelButton2)

    }
    async clickchangearchiveChannelButton() {
        await findUntilIsVisible(this.changearchiveChannelButton)
        await clickOn(this.changearchiveChannelButton)

    }
    async isnotchangePrivateChannelButton() {
        await untilElementDoesNotExist(this.changeChannelButton)
        // await clickOn(this.changeChannelButton)

    }
    
    // async setAddUser(email) {
    //     await untilIsVisible(this.usersInput);
    //     await setValue(this.usersInput, email);
    // }
}

module.exports = new SettingChannelForm(); 
