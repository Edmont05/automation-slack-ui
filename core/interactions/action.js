const { By, Key } = require("selenium-webdriver");
const myLogger = require("../tools/myLogger");
const { myFindElement } = require("./conditions");

/**
 * 
 * @param {By} locator 
 */
exports.clickOn = async (locator) => {
    const element = await myFindElement(locator);
    myLogger.info(`Clicking element: ${locator.value}`);
    await element.click();
}

/**
 * 
 * @param {By} locator 
 */
exports.rightClickOn = async (locator) => {
    const element = await myFindElement(locator);
    myLogger.info(`Performing right-click on element: ${locator.value}`);

    const driver = element.getDriver(); // Obtener la instancia del WebDriver desde el elemento
    await driver.actions().contextClick(element).perform(); // Ejecutar la secuencia de acciones para clic derecho
};



/**
 * 
 * @param {By} locator 
 * @param {String} value 
 */
exports.setValue = async (locator, value) => {
    const element = await myFindElement(locator);
    myLogger.info(`Setting value ${value} on locater ${locator.value}`);
    await element.sendKeys(value);
}

// /**
//  * 
//  * @param {By} locator 
//  * @param {String} value 
//  */
// exports.setCleanValue = async (locator, value) => {
//     const element = await myFindElement(locator);
//     myLogger.info(`Setting value ${value} on locater ${locator.value}`);
//     await element.sendKeys(Key.chord(Key.CONTROL, "a"));
//     await element.sendKeys(value);
// }

/**
 * 
 * @param {By} locator 
 */
exports.setCleanValue = async (locator) => {
    const element = await myFindElement(locator);
    myLogger.info(`Setting value on locater ${locator.value}`);
    await element.sendKeys(Key.chord(Key.CONTROL, "a"));
    await element.sendKeys(Key.BACK_SPACE);
}

/**
 * 
 * @param {By} locator 
 */
exports.getText = async (locator) => {
    myLogger.info(`Getting text on locater ${locator.value}`);
    const element = await myFindElement(locator);
    const text = await element.getText();
    myLogger.info(`Text Obtain is ${text}`);
    return text;
}


/**
 * 
 * @param {By} locator 
 */
exports.pressEnter = async (locator) => {
    const element = await myFindElement(locator);
    myLogger.info(`Pressing Enter on locator: ${locator.value}`);
    await element.sendKeys(Key.ENTER);
};


/**
 * 
 * @param {By} locator 
 */
exports.pressRightArrow = async (locator) => {
    const element = await myFindElement(locator);
    myLogger.info(`Pressing Right Arrow on locator: ${locator.value}`);
    await element.sendKeys(Key.ARROW_RIGHT); 
};

/**
 * 
 * @param {By} locator 
 * @returns {Promise<string[]>}
 */
exports.getColumnTexts = async (locator) => {
    myLogger.info(`Getting texts of column with locator: ${locator.value}`);
    const elements = await myFindElements(locator);
    const texts = [];
    for (let element of elements) {
        const text = await element.getText();
        texts.push(text);
        myLogger.info(`Text obtained: ${text}`);
    }
    return texts;
}

/**
 * 
 * @param {By} locator 
 */
exports.clearText = async (locator) => {
    const element = await myFindElement(locator); 
    myLogger.info(`Clear text in locator: ${locator.value}`);
    await element.clear();
};

/**
 * 
 * @param {number} ms -
 */
exports.sleep = async (ms = 100) => {
    myLogger.info(`Waiting for ${ms} milliseconds`);
    return new Promise(resolve => setTimeout(resolve, ms));
};