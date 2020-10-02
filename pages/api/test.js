import chromium from 'chrome-aws-lambda';

export default async (req,res) => {
    const options = {
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
    };
    const browser = await chromium.puppeteer.launch(options);
    
    const page = await browser.newPage();

    await page.goto('https://example.com');

    const dimensions = await page.evaluate(() => {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio
      };
    });
  
    console.log('Dimensions:', dimensions);
  
    await browser.close();
  
    res.send({
        statusCode: 200,
        response: dimensions,
    })

}