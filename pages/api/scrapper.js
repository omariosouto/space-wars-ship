import { webkit } from 'playwright';


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

  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('https://xwing-miniaturas.fandom.com/pt/wiki/%22Mauler_Mithel%22');
  const title = await page.innerHTML('.page-header__title');
  await browser.close();

  res.send({
    name: 'X-Wing Scrapper',
    pilots: [
    ],
    enhancements: [
    ],
    response: title,
  })
}