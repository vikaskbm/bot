const puppeteer = require('puppeteer');

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

async function recordAudioAndVideo() {
  const browser = await puppeteer.launch({
    headless: false, // Set to true if you don't want to see the browser window
    defaultViewport: null,
    args: [
      '--use-fake-ui-for-media-stream',
      '--use-fake-device-for-media-stream',
    ],
  });

  const page = await browser.newPage();

  await page.goto('https://www.rtp.pt/play/p8157/e518677/telejornal', {
    waitUntil: 'load',
  });
  // Start recording
  const videoElement = await page.$('video');
  const stream = await videoElement.evaluate((video) => video.srcObject);

  const mediaRecorder = new MediaRecorder(stream);
  const chunks = [];

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      chunks.push(event.data);
    }
  };

  mediaRecorder.onstop = async () => {
    const blob = new Blob(chunks, { type: 'video/webm' });

    const fs = require('fs');
    const fileWriter = fs.createWriteStream('recordedVideo.webm');
    const blobBuffer = await blob.arrayBuffer();

    fileWriter.write(Buffer.from(blobBuffer));
    fileWriter.end();
  };

  mediaRecorder.start();

  // Record for 5 seconds (you can adjust the duration)
  delay(3000);

  // Stop recording
  mediaRecorder.stop();
  await browser.close();
}

recordAudioAndVideo();
