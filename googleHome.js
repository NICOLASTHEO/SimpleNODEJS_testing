const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

async function run() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.google.com');
    const bottunAceitar = await driver.findElement(By.xpath('//*[@id="L2AGLb"]/div'));
    await bottunAceitar.click();
    const inputValue = await driver.findElement(By.xpath('/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'));
    await inputValue.sendKeys('AUTOMATION WITH NODE JS');
    await inputValue.sendKeys(Key.ENTER);

    const title = await driver.getTitle();
    if (title === "AUTOMATION WITH NODE JS - Pesquisa Google") {
        console.log("Title is as expected: " + title);
    } else {
        console.log("Title is not as expected. Actual title: " + title);
    }
    await driver.quit();
}

run();