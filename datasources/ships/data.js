import { alianceTypes } from '../aliances/data';

const shipSizes = {
  LARGE: 'LARGE',
  MEDIUM: 'MEDIUM',
  SMALL: 'SMALL',
}

export default [
  {
    // TODO: Add ship size condition and relate it to "ships" in enhancements
    aliances: [
      alianceTypes.REBELS
    ],
    size: shipSizes.LARGE,
    slug: "yt-1300",
    name: "YT 1300",
    nickname: "Milleniumm Falcon",
    urls: [
      'https://xwing-miniaturas.fandom.com/pt/wiki/Pacote_de_Expans%C3%A3o_Millennium_Falcon',
      'https://xwing-miniaturas.fandom.com/pt/wiki/Pacote_de_Expans%C3%A3o_Her%C3%B3is_da_Resist%C3%AAncia'
    ],
    // TODO: Return amount based in URLs
    amount: 2,
  },
  {
    aliances: [
      alianceTypes.REBELS
    ],
    size: shipSizes.MEDIUM,
    slug: "u-wing",
    name: "U-Wing",
    urls: [
      'https://xwing-miniaturas.fandom.com/pt/wiki/Pacote_de_Expans%C3%A3o_U-Wing',
    ],
    amount: 1,
  },
  {
    aliances: [
      alianceTypes.REBELS
    ],
    size: shipSizes.SMALL,
    slug: "x-wing",
    name: "X-Wing",
    urls: [
      'https://xwing-miniaturas.fandom.com/pt/wiki/Kit_B%C3%A1sico_X-Wing',
    ],
    amount: 1,
  },
  {
    aliances: [
      alianceTypes.EMPIRE
    ],
    size: shipSizes.SMALL,
    slug: "tie-fighter",
    name: "Tie Fighter",
    urls: [
      'https://xwing-miniaturas.fandom.com/pt/wiki/Kit_B%C3%A1sico_X-Wing',
      'https://xwing-miniaturas.fandom.com/pt/wiki/Kit_B%C3%A1sico_X-Wing',
    ],
    amount: 2,
  },
]