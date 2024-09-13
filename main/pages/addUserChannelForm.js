const { untilIsLocated, untilIsVisible, reloadAndWaitForElement } = require("../../core/interactions/conditions");
const { clickOn, setValue } = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");

class AddUserForm {
    usersInput = myByCss('div[data-qa="add_people_modal_select-input"]')
    usersSwitch = myByCss('input[aria-label="Agregar automáticamente a cualquier persona que se una a Personal"]')
    saveButton = myByCss('data-qa="invite_to_workspace_submit_button"')


    
    async isVisible() {
        await untilIsLocated(this.usersInput);
        await untilIsLocated(this.usersSwitch);
        await untilIsLocated(this.saveButton);
    }

    async setAddUser(email) {
        await untilIsVisible(this.usersInput);
        await setValue(this.usersInput, email);
    }

    async clickSwitch() {
        await untilIsVisible(this.usersSwitch)
        await clickOn(this.usersSwitch)
    }

    async clickSaveButton() {
        await untilIsVisible(this.saveButton)
        await clickOn(this.saveButton)
    }
    
}

module.exports = new AddUserForm(); 
