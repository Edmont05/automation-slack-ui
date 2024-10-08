const { By, until, WebElement } = require("selenium-webdriver")
const myLogger = require("../tools/myLogger")
const DriverFactory = require("../browser/driverFactory")

/**
 * 
 * @param {By} locator 
 */
exports.untilIsLocated = async (locator) => {
    myLogger.info(`Checking element is located ${locator.value}`)
    await DriverFactory.myDriver.wait(until.elementLocated(locator));
}

/**
 * 
 * @param {By} locator 
 * @returns {Promise<WebElement>} 
 */
exports.myFindElement = async (locator) => {
    myLogger.info(`Finding element with locator: ${locator.value}`);
    const element = await DriverFactory.myDriver.findElement(locator);
    return element;
};

/**
 * 
 * @param {By} locator 
 * @returns {Promise<WebElement[]>} 
 */
exports.myFindElements = async (locator) => {
    myLogger.info(`Finding elements with locator: ${locator.value}`);
    const elements = await DriverFactory.myDriver.findElements(locator);
    myLogger.info(`Found ${elements.length} elements with locator: ${locator.value}`);
    return elements;
};

/**
 * 
 * @param {By} locator 
 */
exports.untilIsVisible = async (locator) => {
    const element = await this.myFindElement(locator);
    myLogger.info(`Checking if element is visible with locator: ${locator.value}`);
    await DriverFactory.myDriver.wait(until.elementIsVisible(element));
};

/**
 *
 * @param {By} locator 
 */
exports.removeElement = async (locator) => {
    const element = await this.myFindElement(locator);
    myLogger.info(`Removing element with locator: ${locator.value}`);
    await DriverFactory.myDriver.executeScript("arguments[0].remove();", element);
};

/**
 * 
 * @param {By} locator 
 */
exports.untilIsEnabled = async (locator) => {
    const element = await this.myFindElement(locator);
    myLogger.info(`Checking if element is enabled with locator: ${locator.value}`);
    await DriverFactory.myDriver.wait(until.elementIsEnabled(element));
};


exports.findUntilIsVisible = async (locator, timeout = 1000) => {
    try {
        // Localizar el elemento
        const element = await this.myFindElement(locator);

        // Esperar a que el elemento sea visible dentro del tiempo límite
        await DriverFactory.myDriver.wait(until.elementIsVisible(element), timeout);

        // Si el elemento es visible, retornar sin errores
        myLogger.info(`Elemento visible: ${locator.value}`);
        return element;
    } catch (error) {
        // Si ocurre un error, lanzar una excepción explícitamente
        myLogger.error(`Error: No se pudo encontrar o hacer visible el elemento con el locator ${locator.value} en el tiempo de espera.`);
        throw new Error(`El elemento con el locator ${locator.value} no es visible dentro del tiempo permitido.`);
    }
};

/**
 * 
 * 
 * @param {By} locator 
 */
exports.untilElementDoesNotExist = async (locator) => {
    myLogger.info(`Checking if element does NOT exist with locator: ${locator.value}`);

    const driver = DriverFactory.myDriver;

    try {
        // Intentamos encontrar los elementos
        const elements = await driver.findElements(locator);

        // Si no hay elementos, significa que no existe
        if (elements.length === 0) {
            myLogger.info(`Element with locator: ${locator.value} does not exist in the DOM.`);
            return true;  // El elemento no existe
        } else {
            myLogger.info(`Element with locator: ${locator.value} is still present in the DOM.`);
            return false;  // El elemento aún existe
        }
    } catch (error) {
        // Si ocurre otro error, lo lanzamos
        myLogger.error(`Error while checking if element does not exist: ${error}`);
        throw error;
    }
};

/**
 * 
 * @param {By} locator 
 */
exports.waitUntilElementsStops = async (locator) => {
    myLogger.info(`Waiting until the element stops moving ${locator.value}`);
    let previousPosition = {};
    await DriverFactory.myDriver.wait(async () => {
        const element = await this.myFindElement(locator);
        const currentPosition = await element.getRect();
        myLogger.info(`Current position: ${JSON.stringify(currentPosition)}`);
        const hasStopped =
            previousPosition.x === currentPosition.x &&
            previousPosition.y === currentPosition.y;

        previousPosition = currentPosition;
        return hasStopped;
    });
    myLogger.info(`Element ${locator.value} has stopped moving`);
}

/**
 * Scroll to the bottom of the page.
 */
exports.scrollToBottom = async () => {
    await DriverFactory.myDriver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
    myLogger.info('Scrolled to the bottom of the page');
};

/**
 * 
 * @returns {Promise<string>} 
 */
exports.getCurrentUrlId = async () => {
    myLogger.info('Fetching the current URL');
    const url = await DriverFactory.myDriver.getCurrentUrl();
    myLogger.info(`Current URL: ${url}`);

    const match = url.match(/\/([^\/]+)\/?$/);
    const fragment = match ? match[1] : '';

    myLogger.info(`Extracted URL fragment: ${fragment}`);
    return fragment;
};

/**
 * 
 * @param {number} ms -
 */
exports.sleep = async (ms = 900) => {
    myLogger.info(`Waiting for ${ms} milliseconds`);
    return new Promise(resolve => setTimeout(resolve, ms));
};

exports.reloadAndWaitForElement = async (locator) => {
    myLogger.info(`Reloading page and waiting for element: ${locator.value}`);

    await DriverFactory.myDriver.navigate().refresh();
    myLogger.info('Page reloaded.');

    await DriverFactory.myDriver.wait(until.elementLocated(locator));
    myLogger.info(`Element located after reload: ${locator.value}`);
};