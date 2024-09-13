const { untilIsLocated, untilIsVisible, reloadAndWaitForElement } = require("../../core/interactions/conditions");
const { clickOn, setValue } = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");

class LoginPage {
    usernameInput = myByCss('[data-qa="login_email"]');
    passwordInput = myByCss('[data-qa="login_password"]');
    loginButton = myByCss('[data-qa="signin_button"]');
    slackWebLink = myByCss('[data-qa="ssb_redirect_open_in_browser"]')
    iconHome = myByCss('[data-qa="tab_rail_home_button"]')

    async isVisible() {
        await untilIsLocated(this.usernameInput)
        await untilIsLocated(this.passwordInput)
        await untilIsLocated(this.loginButton)
    }

    async setCredentials(username, password) {
        await untilIsVisible(this.usernameInput);
        await untilIsVisible(this.passwordInput);
        await setValue(this.usernameInput, username);
        await setValue(this.passwordInput, password)
    }

    async clickLoginButton() {
        await untilIsVisible(this.loginButton)
        await clickOn(this.loginButton)
    }

    async clickLinkSlack() {
        await untilIsVisible(this.slackWebLink)
        await clickOn(this.slackWebLink)
        await reloadAndWaitForElement(this.iconHome)
    }
}

module.exports = new LoginPage(); 
