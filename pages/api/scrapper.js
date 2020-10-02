import chromium from 'chrome-aws-lambda';
import { launch } from 'puppeteer-core';


let _page
const isDev = !process.env.AWS_REGION;

const exePath = process.platform === 'win32'
? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
: process.platform === 'linux'
? '/usr/bin/google-chrome'
: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function getOptions(isDev) {
  let options;
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
  return options;
}


async function getPage(isDev) {
  if (_page) {
      return _page;
  }
  const options = await getOptions(isDev);
  const browser = await launch(options);
  _page = await browser.newPage();
  return _page;
}

// =====

const pilotList = [
  // [Kit Básico X-Wing]: https://xwing-miniaturas.fandom.com/pt/wiki/Kit_B%C3%A1sico_X-Wing
  // Impire
  'https://xwing-miniaturas.fandom.com/pt/wiki/%22Mauler_Mithel%22',
  /*
  'https://xwing-miniaturas.fandom.com/pt/wiki/%22Dark_Curse%22',
  'https://xwing-miniaturas.fandom.com/pt/wiki/%22Night_Beast%22',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Negro',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Obsidian',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_da_Academia',
  // Rebels
  'https://xwing-miniaturas.fandom.com/pt/wiki/Luke_Skywalker',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Biggs_Darklighter',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Vermelho',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_Recruta',
  */
];

function createPilot() {
  return {};
}

function createEnhancement() {
  return {};
}


export default async function(req, res) {
  // 1 - Add the scrapper
  // 2 - Create a file "cache" for don't do the request again
  // 3 - 

  const url = 'https://xwing-miniaturas.fandom.com/pt/wiki/%22Mauler_Mithel%22';
  const page = await getPage(isDev);
  await page.goto(url);
  // await page.screenshot({path: 'example.png'});
  const title = await page.evaluate(() => {
    return {
      title: document.querySelector('.page-header__title').innerHTML,
    };
  });
  await browser.close();

  // const browser = await webkit.launch();
  // const page = await browser.newPage();
  // await page.goto('https://xwing-miniaturas.fandom.com/pt/wiki/%22Mauler_Mithel%22');
  // const title = await page.innerHTML('.page-header__title');
  // await browser.close();

  res.send({
    name: 'X-Wing Scrapper',
    pilots: [
    ],
    enhancements: [
    ],
    response: title,
  })
}