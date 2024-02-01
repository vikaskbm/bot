async function videoRecorder() {
  require('puppeteer-stream');
  const puppeteer = require('puppeteer');
  const fs = require('fs');

  const filename = `./recordings/test.mp4`;

  const file = fs.createWriteStream(filename);

  const browser = await puppeteer.launch({
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    defaultViewport: null,
    devtools: false,
    args: [
      '--window-size=1920,1080',
      '--window-position=1921,0',
      '--autoplay-policy=no-user-gesture-required',
    ],
    ignoreDefaultArgs: ['--mute-audio'],
  });

  const page = await browser.newPage();

  await page.goto(pathToPageWithVideo, {
    waitUntil: 'load',
  });

  const stream = await page.getStream({
    audio: true,
    video: true,
  });

  stream.pipe(file);

  setTimeout(async () => {
    await stream.destroy();
    file.close();
    console.log('finished');
  }, 10000);
}
