const { untilIsLocated, untilIsVisible, reloadAndWaitForElement } = require("../../core/interactions/conditions");
const { clickOn, setValue, sleep } = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");

class AddUserForm {
    usersInput = myByCss('div[data-qa="add_people_modal_select-input"]')
    usersSwitch = myByCss('input[aria-label="Agregar automáticamente a cualquier persona que se una a Personal"]')
    omitButton = myByCss('div[data-qa="add_button_container"] button')
    omitPrivateButton = myByCss('button[data-qa="invite_to_workspace_skip_button"]')

    
    closeButton = myByCss('button[data-qa="sk_close_modal_button"]')
    
    async isVisible() {
        await untilIsLocated(this.usersInput);
        await untilIsLocated(this.usersSwitch);
        await untilIsLocated(this.omitButton);
    }
    async isVisiblePrivate() {
        await untilIsLocated(this.usersInput);
        await untilIsLocated(this.omitButton);
    }
    async setAddUser(email) {
        await untilIsVisible(this.usersInput);
        await setValue(this.usersInput, email);
    }

    async clickSwitch() {
        await untilIsVisible(this.usersSwitch)
        await clickOn(this.usersSwitch)
    }
    
    async clickOmit() {
        await untilIsVisible(this.omitButton)
        await clickOn(this.omitButton)
        sleep(1000);
    }
    async clickomitPrivateButton() {
        await untilIsVisible(this.omitPrivateButton)
        await clickOn(this.omitPrivateButton)
        sleep(1000);
    }

    
    async clickcloseButton() {
        await untilIsVisible(this.closeButton)
        await clickOn(this.closeButton)
    }
    
}

module.exports = new AddUserForm(); 
