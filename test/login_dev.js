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

describe('E2E UPBOND Kajima DEV', function(){
    it('01. Login Existing User & Check Dashboard', async function(){
        const chai = await import('chai');
        chai.should();
        let driver = await new Builder().forBrowser('chrome').build();
        //https://dev.kjm-gohey.jp/?site_id=4d5710c4-3df1-4693-b3ac-19bfdc2b783a
        await driver.get('https://dev.kjm-gohey.jp/');
        await driver.manage().window().maximize();
        await driver.sleep(10000);
        await driver.findElement(By.xpath("//button[contains(@class,'rounded-lg bg-[#002076] px-4 py-2 text-white')]")).click();
        await driver.sleep(500);
        await driver.findElement(By.xpath("//span[@class='btn-social__text new-style-button-text']")).click();
        await driver.wait(until.elementLocated(By.xpath('//div/input[@type="text" and @placeholder="Email address"]')), 500);
        await driver.findElement(By.xpath('//div/input[@type="text" and @placeholder="Email address"]')).sendKeys(credentials.USRLINE_juwita);
        await driver.sleep(500);
        await driver.findElement(By.xpath("//input[@name='tpasswd']")).sendKeys(credentials.PWDLINE);
        await driver.sleep(500);
        await driver.findElement(By.xpath("//button[@type='submit']")).click();
        await driver.sleep(8000);
        await driver.wait(until.elementLocated(By.xpath('//p[text()="現在の保有ポイント"]')), 10000);
        
        // //checking siteID
        // await driver.wait(until.elementLocated(By.xpath('//p[text()="学校法人兵庫医科大学　新病院棟（仮称）新築工事"]')));
        // //await driver.quit();

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
        await driver.sleep(500);
        await driver.quit();
    })

    it.skip('02. Go to Mission', async function(){
        const chai = await import('chai');
        chai.should();
        let driver = await new Builder().forBrowser('chrome').build();
        //https://dev.kjm-gohey.jp/?site_id=4d5710c4-3df1-4693-b3ac-19bfdc2b783a
        await driver.get('https://dev.kjm-gohey.jp/');
        await driver.manage().window().maximize();
        await driver.sleep(10000);
        await driver.findElement(By.xpath("//button[contains(@class,'rounded-lg bg-[#002076] px-4 py-2 text-white')]")).click();
        await driver.sleep(500);
        await driver.findElement(By.xpath("//span[@class='btn-social__text new-style-button-text']")).click();
        await driver.wait(until.elementLocated(By.xpath('//div/input[@type="text" and @placeholder="Email address"]')), 500);
        await driver.findElement(By.xpath('//div/input[@type="text" and @placeholder="Email address"]')).sendKeys(credentials.USRLINE_juwita);
        await driver.sleep(500);
        await driver.findElement(By.xpath("//input[@name='tpasswd']")).sendKeys(credentials.PWDLINE);
        await driver.sleep(500);
        await driver.findElement(By.xpath("//button[@type='submit']")).click();
        await driver.sleep(8000);
        await driver.wait(until.elementLocated(By.xpath('//p[text()="現在の保有ポイント"]')), 8000);

        //Go to Mission
        await driver.findElement(By.xpath('//a[@href="/missions"]')).click();
        //await driver.wait(until.elementLocated(By.xpath("//div[@class='flex h-[80px] flex-col items-center justify-center bg-[#002076] pt-1']"))).click();
        await driver.sleep(500);
        await driver.wait(until.elementLocated(By.xpath('//p[text()="一度のみ挑戦できるミッションです。"]'))).click();
        await driver.sleep(500);
    })
    
    it.skip('03. Go to Mission', async function(){
        // //claim BeginnerMission
        // await driver.wait(until.elementLocated(By.xpath('//span[text()="受け取る"]'))).click();

        // move to DailyMission
        await driver.wait(until.elementLocated(By.xpath("//div[text()='デイリー']"))).click();
        await driver.sleep(1000);

        // //click challenge DailyMission
        // await driver.wait(until.elementLocated(By.xpath("//span[text()='挑戦中']"))).click();
        // await driver.sleep(500);

        // // claim reward DailyMission
        // await driver.wait(until.elementLocated(By.xpath('//span[text()="受け取る"]'))).click();

        // move to WeeklyMission
        await driver.wait(until.elementLocated(By.xpath('//div[text()="ウィークリー"]'))).click();
        await driver.sleep(1000);

        // move to TotalMission
        await driver.wait(until.elementLocated(By.xpath('//div[text()="通算"]'))).click();
        await driver.sleep(1000);

        // go to Like
        await driver.findElement(By.xpath('//a[@href="/like"]')).click();
        await driver.sleep(500);
        
        // // click like
        // await driver.wait(until.elementLocated(By.xpath("//span[text()='いいね']"))).click();
        // await driver.sleep(500);
        // await driver.wait(until.elementLocated(By.xpath("//span[text()='閉じる']"))).click();

        // Go to Gacha
        await driver.findElement(By.xpath('//a[@href="/gacha"]')).click();
        await driver.sleep(500);

        let gachascroll = await driver.findElement(By.xpath('//span[text()="ガチャを回す"]'));
        await driver.executeScript("arguments[0].scrollIntoView(true);", gachascroll); 
        //await driver.executeScript(driver.findElement(By.xpath('//span[text()="ガチャを回す"]')).click());
        
        // play gacha
        await driver.findElement(By.xpath('//span[text()="ガチャを回す"]')).click();
        // await driver.wait(until.elementLocated(By.xpath("//span[text()='ガチャを回す']")), 500);
        await driver.sleep(8000);

        // get point result play gacha
        await driver.findElement(By.xpath("//span[text()='ガチャを回す']")).click();
        await driver.sleep(500);

        // back to home
        await driver.findElement(By.xpath("//span[text()='ホームへ戻る']")).click();
        await driver.sleep(500);

        // Go to Point
        await driver.findElement(By.xpath('//a[@href="/points"]')).click();
        await driver.sleep(500);

        // check history point
        await driver.wait(until.elementLocated(By.xpath("//p[text()='ポイント獲得履歴を見る']")), 500);
        await driver.findElement(By.xpath("//p[text()='現在の保有ポイント']")).click();
        await driver.sleep(500);
        await driver.quit();
    })
})

