const { untilIsLocated, untilIsVisible, reloadAndWaitForElement } = require("../../core/interactions/conditions");
const { clickOn, setValue } = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");

class MainPage {
    iconHome = myByCss('[data-qa="tab_rail_home_button"]')
    iconCreateNew = myByCss('button.p-control_strip__create_button[data-qa="unstyled-button"]')
    optionChannel = myByCss('button[aria-labelledby="create-channels-label"]')
    
    // optionChannel = myByCss('')
    
    async isVisible() {
        await untilIsLocated(this.iconHome)
        await untilIsLocated(this.iconCreateNew)
    }

    // async setCredentials(username, password) {
    //     await untilIsVisible(this.usernameInput);
    //     await untilIsVisible(this.passwordInput);
    //     await setValue(this.usernameInput, username);
    //     await setValue(this.passwordInput, password)
    // }

    async clickCreateNew() {
        await untilIsVisible(this.iconCreateNew)
        await clickOn(this.iconCreateNew)
    }

    async clickOptionChannel() {
        await untilIsVisible(this.optionChannel)
        await clickOn(this.optionChannel)
    }

}

module.exports = new MainPage(); 
