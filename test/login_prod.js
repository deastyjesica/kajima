const {By, Key, Builder, until} = require('selenium-webdriver');
require('chromedriver');
const assert = require('assert');
const fs = require('fs');

let credentials;
    try {
        const data = fs.readFileSync('credentials.json', 'utf8');
        credentials = JSON.parse(data);
    } catch (error) {
        console.error('Error reading credentials file:', error);
        process.exit(1); 
    }

describe('E2E UPBOND Kajima PROD', function(){
    it('01. Login Existing User & Check Dashboard', async function(){
            const chai = await import('chai');
            chai.should();
            let driver = await new Builder().forBrowser('chrome').build();
            //https://kjm-gohey.jp/?site_id=1
            //deasty.jesica@upbond.io
            //Deasty Admin
            //wallet address 0x6818Ce225e26Ae15540CB0A12CF85E4596F9387f
            //didkey zQ3shq8KmkFUmzNcKVNoCcpV9mzCWdihLQJ2jxdq3hjwNdpDy

            //https://kjm-gohey.jp/?site_id=1
            //deastyj@gmail.com
            //lineid U365344b25bec3570737a4534dcd5de9f
            //wallet address 0xf4FE7d4270f03c4cC0F64f4ab2DFF7fD787eDAF1
            // didkey zQ3shoKZyprpSFeHxgkBezCmVA4Vj5T979dspmhffb5xhbZDX
            await driver.get('https://kjm-gohey.jp/');
            await driver.manage().window().maximize();
            await driver.sleep(10000);
            await driver.findElement(By.xpath("//button[contains(@class,'rounded-lg bg-[#002076] px-4 py-2 text-white')]")).click();
            await driver.sleep(500);
            await driver.findElement(By.xpath("//span[@class='btn-social__text new-style-button-text']")).click();
            await driver.wait(until.elementLocated(By.xpath('//div/input[@type="text" and @placeholder="Email address"]')), 10000);
            await driver.findElement(By.xpath('//div/input[@type="text" and @placeholder="Email address"]')).sendKeys(credentials.USRLINE_deastyj);
            await driver.sleep(500);
            await driver.findElement(By.xpath("//input[@name='tpasswd']")).sendKeys(credentials.PWDLINE);
            await driver.sleep(500);
            await driver.findElement(By.xpath("//button[@type='submit']")).click();
            await driver.sleep(20000);
            await driver.wait(until.elementLocated(By.xpath('//p[text()="現在の保有ポイント"]')), 20000);
            
            await driver.sleep(500);
            await driver.quit();
        
        // //checking siteID
        // await driver.wait(until.elementLocated(By.xpath('//p[text()="テスト用現場"]')));
        // await driver.quit();

        // //Go to Mission
        // await driver.findElement(By.xpath('//a[@href="/missions"]')).click();
        // //await driver.wait(until.elementLocated(By.xpath("//div[@class='flex h-[80px] flex-col items-center justify-center bg-[#002076] pt-1']"))).click();
        // await driver.sleep(500);

        // // Go to Gacha
        // await driver.findElement(By.xpath('//a[@href="/gacha"]')).click();
        // await driver.sleep(500);

        // let gachascroll = await driver.findElement(By.xpath('//span[text()="ガチャを回す"]'));
        // await driver.executeScript("arguments[0].scrollIntoView(true);", gachascroll); 
        // //await driver.executeScript(driver.findElement(By.xpath('//span[text()="ガチャを回す"]')).click());
        // await driver.sleep(20000);
        // await driver.quit();
    })
})

