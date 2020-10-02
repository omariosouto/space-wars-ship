import chromium from 'chrome-aws-lambda';
import fs from 'fs';
import path from 'path';

const pilotsUrlList = [
  // [Kit Básico X-Wing]: https://xwing-miniaturas.fandom.com/pt/wiki/Kit_B%C3%A1sico_X-Wing
  // Impire
  'https://xwing-miniaturas.fandom.com/pt/wiki/%22Mauler_Mithel%22',
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
];


function localStorage() {
  const dataCachePath = path.join(process.cwd(), '_data-cache.json');
  const dataCached = JSON.parse(fs.readFileSync(dataCachePath).toString());
  const db = dataCached || {};

  function persist() {
    if(process.env.NODE_ENV !== 'production') {
      fs.writeFileSync(dataCachePath, JSON.stringify(db, null, 2));
    }
  }

  function get(key) {
    return db[key];
  }
  function set(key, value) { 
    db[key] = value;
  }

  function getAll() {
    return db
  }
  
  return {
    set,
    get,
    persist,
    getAll,
  }
}

export default async (req,res) => {
  const cacheStorage = localStorage();
  const browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true,
  });

  const pilotsPromise = pilotsUrlList.map(async (pilotUrl) => {
    const pilotRegistered = cacheStorage.get('pilots').find(
      (pilot) => pilot.url === pilotUrl
    );

    const isPilotRegistered = Boolean(pilotRegistered);
    if(isPilotRegistered) {
      return pilotRegistered;
    }


    const page = await browser.newPage();
    await page.goto(pilotUrl);
    return {
      url: pilotUrl,
      ...await page.evaluate(() => {
        return {
          name: document.querySelector('.page-header__title').innerHTML,
          description: (() => {
            if (document.getElementById('Texto.2FHabilidades_da_Carta')) {
              return document.getElementById('Texto.2FHabilidades_da_Carta').parentNode.nextElementSibling.innerText
            }

            return '';
          })(),
          image: document.querySelector('.thumbimage').getAttribute('src'),
          slug: '', // name com slugify
          cost: 'N/A',
          ships: [], // How to get the ship?,
          enhancements: Array.from(document.getElementById('Melhorias_Poss.C3.ADveis').parentNode.nextElementSibling.querySelectorAll('a')).map(($a) => {
              return $a.innerHTML;
          })
        };
      }),
    }
  });

  const pilots = await Promise.all(pilotsPromise);
  cacheStorage.set('pilots', pilots);
  cacheStorage.persist();
  
  await browser.close();
  res.send({
    statusCode: 200,
    pilots: cacheStorage.get('pilots'),
  })

}