const { launch, getStream } = require('puppeteer-stream');
const puppeteer = require('puppeteer');

const fs = require('fs');

const filename = `./test.mp4`;

const file = fs.createWriteStream(filename);

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    defaultViewport: null,
    devtools: false,
    ignoreDefaultArgs: ['--mute-audio'],
    args: [
      '--use-fake-ui-for-media-stream',
      '--single-process',
      '--no-zygote',
      '--no-sandbox',
    ],
  });
  const page = await browser.newPage();

  // Navigate to Google Meet
  // await page.goto('https://accounts.google.com/');

  // await delay(3000);

  // await page.type('#identifierId', 'yomoaitest@gmail.com');
  // const emailClick = await page.$x('//*[@id="identifierNext"]/div/button');
  // await emailClick[0].click();
  // await delay(4000);

  // const passwordFill = await page.$x(
  //   '//*[@id="password"]/div[1]/div/div[1]/input'
  // );

  // await passwordFill[0].type('FACEbook10@');
  // const passwordClick = await page.$x('//*[@id="passwordNext"]/div/button');
  // await passwordClick[0].click();
  // await delay(2000);

  await page.goto('https://www.rtp.pt/play/p8157/e518677/telejornal', {
    waitUntil: 'load',
  });

  // const stream = await getStream(page, { audio: true, video: true });
  // stream.pipe(file);
  // setTimeout(async () => {
  //   await stream.destroy();
  //   file.close();
  //   console.log('finished');
  // }, 10000);

  /*
    // Join google meetings
    
    await page.goto('https://meet.google.com/yib-ecuq-zqo');
    await delay(4000);

    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyD');
    await page.keyboard.press('KeyE');
    await page.keyboard.up('ControlLeft');

    const joinClick = await page.$x(
      '//*[@id="yDmH0d"]/c-wiz/div/div/div[20]/div[3]/div/div[2]/div[4]/div/div/div[2]/div[1]/div[2]/div[1]/div[1]/button'
    );
    await joinClick[0].click();
  */

  // Click on the "Join or start a meeting" button
  //   await page.click('div[jscontroller="VXdfxd"] > div[role="button"]');

  // Enter the meeting code and join
  //   await page.waitForSelector('input[placeholder="Enter a code or link"]');
  //   await page.type(
  // 'input[placeholder="Enter a code or link"]',
  // 'YOUR_MEETING_CODE'
  //   ); // Replace with your meeting code
  //   await page.click('span[jsname="Qx7uuf"]'); // Click on the "Join" button

  // Wait for the meeting to load and join
  //   await page.waitForNavigation();

  // You might need to grant permissions to access camera/microphone if prompted
  // You can use Puppeteer to interact with these permission dialogs if necessary

  // Perform other actions within the meeting if needed

  // Close the browser when done
  //   await browser.close();
})();
