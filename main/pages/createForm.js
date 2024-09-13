const { untilIsLocated, untilIsVisible, reloadAndWaitForElement } = require("../../core/interactions/conditions");
const { clickOn, setValue } = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");

class CreateForm {
    nameChannelInput = myByCss('input[data-qa="channel-name-input"]')
    nextButton = myByCss('button[data-qa="create-channel-next-button"]')

    publicOption = myByCss('input[data-qa="public-option"]')
    privateOption = myByCss('input[data-qa="private-option"]')
    createButton = myByCss('button[data-qa="create-channel-next-button"]')
    backButton = myByCss('button[class="c-button c-button--outline c-button--medium"]')

    
    async isVisible() {
        await untilIsLocated(this.nameChannelInput);
        await untilIsLocated(this.nextButton);
    }

    async setNameChannel(name) {
        await untilIsVisible(this.nameChannelInput);
        await setValue(this.nameChannelInput, name);
    }

    async clickNext() {
        await untilIsVisible(this.nextButton)
        await clickOn(this.nextButton)
    }
    

    async clickPublicOption() {
        await untilIsVisible(this.publicOption)
        await clickOn(this.publicOption)
    }

    async clickPrivateOption() {
        await untilIsVisible(this.privateOption)
        await clickOn(this.privateOption)
    }

    async clickCreate() {
        await untilIsVisible(this.createButton)
        await clickOn(this.createButton)
    }

    async clickBack() {
        await untilIsVisible(this.backButton)
        await clickOn(this.backButton)
    }
}

module.exports = new CreateForm(); 
