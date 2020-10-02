import { launch } from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

const exePath = process.platform === 'win32'
? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
: process.platform === 'linux'
? '/usr/bin/google-chrome'
: 'Applications/Chromium.app/Contents/MacOS/Chromium';
// : '/Applications/Chromium.app/Contents/MacOS/Chromium'

export async function getOptions(isDev) {
  let options
  if (isDev) {
      options = {
          args: [],
          executablePath: exePath,
          headless: true
      };
  } else {
      options = {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
      };
  }
  console.log('[[[[[[[[[options]]]]]]]]]', options, '[isDev]', isDev);
  return options;
}

/// =====================
/// =====================

let _page;
async function getPage(isDev) {
  if (_page) {
    return _page;
  }
  const options = await getOptions(isDev);
  const browser = await launch(options);
  _page = await browser.newPage();
  return _page;
}

async function getScreenshot(html, isDev) {
  const page = await getPage(isDev);
  await page.setViewport({ width: 2048, height: 1170 });
  await page.setContent(html);
  const file = await page.screenshot();
  return file;
}

/// =====================
/// =====================

function getHTML() {
  return `
    <p>Vrau!</p>
  `;
}

const isDev = !process.env.AWS_REGION;
process.env.OG_HTML_DEBUG = '0';
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

/// =====================
/// =====================

export default async function handler(req, res) {
  try {

    const html = getHTML();

    if (isHtmlDebug) {
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
        return;
    }

    const response = await getScreenshot(html, isDev);

    res.send({
      response
    })
  } catch (e) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
    console.error(e);
  }
}