import chromium from 'chrome-aws-lambda';

const pilotsUrlList = [
  // [Kit Básico X-Wing]: https://xwing-miniaturas.fandom.com/pt/wiki/Kit_B%C3%A1sico_X-Wing
  // Impire
  'https://xwing-miniaturas.fandom.com/pt/wiki/%22Mauler_Mithel%22',
  'https://xwing-miniaturas.fandom.com/pt/wiki/%22Dark_Curse%22',
  'https://xwing-miniaturas.fandom.com/pt/wiki/%22Night_Beast%22',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Negro',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Obsidian',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_da_Academia',
  /*
  // Rebels
  'https://xwing-miniaturas.fandom.com/pt/wiki/Luke_Skywalker',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Biggs_Darklighter',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Vermelho',
  'https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_Recruta',
  */
];

export default async (req,res) => {
    const options = {
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
    };
    const browser = await chromium.puppeteer.launch(options);
    
    
    const pilotsPromise = pilotsUrlList.map(async (pilotUrl) => {
      const page = await browser.newPage();
      await page.goto(pilotUrl);
      const dimensions = await page.evaluate(() => {
        return {
          name: document.querySelector('.page-header__title').innerHTML,
          description: '',
        };
      });
      return dimensions;
    });

    const pilots = await Promise.all(pilotsPromise);
  
    await browser.close();
  
    res.send({
        statusCode: 200,
        pilots,
    })

}