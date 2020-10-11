import { allianceTypes } from '../alliances/data';
import { enhancementTypes } from '../enhancements/data';

export default [
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/1/19/Han-solo.png/revision/latest?cb=20160406204910&path-prefix=pt',
    slug: "han-solo",
    name: "Han Solo",
    cost: 46,
    expertise: 9,
    description: "Ao atacar, você pode rerrolar todos os seus dados. Se escolher fazer isso, você deve rerrolar a maior quantidade possível de seus dados.",
    ships: [
      "yt-1300"
    ],
    enhancementTypes: [
      enhancementTypes.ELITE_TALENT,
      enhancementTypes.MISSILE,
      enhancementTypes.CREW,
      enhancementTypes.CREW
    ],
    url: '',
  },
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/a/a6/Lando-calrissian.png/revision/latest?cb=20160406205059&path-prefix=pt',
    slug: "lando-calrissian",
    name: "Lando Calrissian",
    expertise: 7,
    cost: 44,
    description: "Após executar uma manobra verde, escolha 1 outra nave amiga em Alcance 1. Esta nave pode realizar 1 ação gratuita exibida em sua barra de ação.",
    ships: [
      "yt-1300"
    ],
    enhancementTypes: [
      enhancementTypes.ELITE_TALENT,
      enhancementTypes.MISSILE,
      enhancementTypes.CREW,
      enhancementTypes.CREW,
    ],
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Lando_Calrissian',
  },
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/f/f1/Chewbacca.png/revision/latest?cb=20160406204718&path-prefix=pt',
    slug: "chewbacca",
    name: "Chewbacca",
    cost: 42,
    expertise: 5,
    description: "Quando você recebe uma carta de Dano virada para cima, vire-a imediatamente para baixo (sem resolver sua habilidade).",
    ships: [
      "yt-1300"
    ],
    enhancementTypes: [
      enhancementTypes.ELITE_TALENT,
      enhancementTypes.MISSILE,
      enhancementTypes.CREW,
      enhancementTypes.CREW,
    ],
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Chewbacca',
  },
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/7/76/Contrabandista-orla-exterior.png/revision/latest?cb=20160406204718&path-prefix=pt',
    slug: "contrabandista-da-orla-exterior",
    name: "Contrabandista da Orla Exterior",
    cost: 27,
    expertise: 1,
    description: "Conhecida por sua durabilidade e desenho modular, a YT-1300 é um dos transportes mais populares e amplamente utilizados da galáxia.",
    ships: [
      "yt-1300"
    ],
    enhancementTypes: [
      enhancementTypes.CREW,
      enhancementTypes.CREW,
    ],
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Contrabandista_da_Orla_Exterior', 
  },
  // ======================================================
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/1/16/Poe-dameron-hotr.jpg/revision/latest?cb=20170626122704&path-prefix=pt',
    slug: "poe-dameron-hdr",
    name: "Poe Dameron (HdR)",
    cost: 33,
    expertise: 9,
    description: "Ao atacar ou defender, se você tiver uma ficha de foco, você pode mudar 1 de seus resultados foco para um resultado dano ou desvio.",
    ships: [
      "x-wing-t70",
    ],
    enhancementTypes: [
      enhancementTypes.CREW,
      enhancementTypes.CREW,
    ],
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Poe_Dameron_(HdR)',
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/%22Mauler_Mithel%22",
    name: "\"Mauler Mithel\"",
    description: "Ao atacar em A lcance 1, role 1 dado de ataque adicional.",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/e/e8/Mauler-mithel.png/revision/latest/scale-to-width-down/300?cb=20160406205102&path-prefix=pt",
    slug: "mauler-mithel",
    cost: 17,
    expertise: 9,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: [
      enhancementTypes.ELITE_TALENT,
    ]
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/%22Dark_Curse%22",
    name: "\"Dark Curse\"",
    description: "Quando você estiver defendendo, as naves atacantes não podem gastar fichas de foco ou rerrolar dados de ataque.",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/3/36/Dark-curse.png/revision/latest/scale-to-width-down/300?cb=20160406204720&path-prefix=pt",
    slug: "dark-curse",
    cost: 16,
    expertise: 6,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: [
    ]
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/%22Night_Beast%22",
    name: "\"Night Beast\"",
    description: "Após executar uma manobra verde, você pode realizar uma ação de foco gratuita.",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/4/47/Night-beast.png/revision/latest/scale-to-width-down/300?cb=20160406205104&path-prefix=pt",
    slug: "night-beast",
    cost: 15,
    expertise: 5,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: []
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Negro",
    name: "Piloto do Esquadrão Negro #1",
    description: "",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/8/8d/Piloto-negro.png/revision/latest/scale-to-width-down/300?cb=20160406205228&path-prefix=pt",
    slug: "piloto-do-esquadrao-negro-1",
    cost: 14,
    expertise: 4,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: [
      enhancementTypes.ELITE_TALENT,
    ]
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Negro",
    name: "Piloto do Esquadrão Negro #2",
    description: "",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/8/8d/Piloto-negro.png/revision/latest/scale-to-width-down/300?cb=20160406205228&path-prefix=pt",
    slug: "piloto-do-esquadrao-negro-2",
    cost: 14,
    expertise: 4,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: [
      enhancementTypes.ELITE_TALENT,
    ]
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Obsidian",
    name: "Piloto do Esquadrão Obsidian #1",
    description: "",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/0/02/Piloto-obsidian.png/revision/latest/scale-to-width-down/300?cb=20160406205229&path-prefix=pt",
    slug: "piloto-do-esquadrao-obsidian-1",
    cost: 13,
    expertise: 3,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: []
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Obsidian",
    name: "Piloto do Esquadrão Obsidian #2",
    description: "",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/0/02/Piloto-obsidian.png/revision/latest/scale-to-width-down/300?cb=20160406205229&path-prefix=pt",
    slug: "piloto-do-esquadrao-obsidian-2",
    cost: 13,
    expertise: 3,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: []
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_da_Academia",
    name: "Piloto da Academia #1",
    description: "",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/a/a0/Piloto-academia.png/revision/latest/scale-to-width-down/300?cb=20160406205105&path-prefix=pt",
    slug: "piloto-da-academia-1",
    cost: 12,
    expertise: 1,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: []
  },
  {
    allianceNames: [
      allianceTypes.EMPIRE
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_da_Academia",
    name: "Piloto da Academia #2",
    description: "",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/a/a0/Piloto-academia.png/revision/latest/scale-to-width-down/300?cb=20160406205105&path-prefix=pt",
    slug: "piloto-da-academia-2",
    cost: 12,
    expertise: 1,
    ships: [
      'tie-fighter'
    ],
    enhancementTypes: []
  },
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Luke_Skywalker",
    name: "Luke Skywalker",
    description: "Ao defender, você pode mudar 1 de seus resultados foco para um resultado desvio.",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/8/8c/Luke-skywalker.png/revision/latest/scale-to-width-down/300?cb=20160406205100&path-prefix=pt",
    slug: "luke-skywalker",
    cost: 28,
    expertise: 8,
    ships: [
      'x-wing',
    ],
    enhancementTypes: [
      enhancementTypes.ELITE_TALENT,
      enhancementTypes.ASTROMECH,
      enhancementTypes.TORPEDO
    ]
  },
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Biggs_Darklighter",
    name: "Biggs Darklighter",
    description: "Outras naves amigas em Alcance 1 não podem ser alvo de ataques se o atacante puder, em vez disso, atacar você.",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/9/90/Biggs-darklighter.png/revision/latest/scale-to-width-down/300?cb=20160406204714&path-prefix=pt",
    slug: "biggs-darklighter",
    cost: 25,
    expertise: 5,
    ships: [
      'x-wing',
    ],
    enhancementTypes: [
      enhancementTypes.ASTROMECH,
      enhancementTypes.TORPEDO
    ]
  },
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_do_Esquadr%C3%A3o_Vermelho",
    name: "Piloto do Esquadrão Vermelho",
    description: "",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/b/b6/Piloto-vermelho.png/revision/latest/scale-to-width-down/300?cb=20160406205233&path-prefix=pt",
    slug: "piloto-do-esquadrao-vermelho",
    cost: 23,
    expertise: 4,
    ships: [
      'x-wing',
    ],
    enhancementTypes: [
      enhancementTypes.TORPEDO,
      enhancementTypes.ASTROMECH
    ]
  },
  {
    allianceNames: [
      allianceTypes.REBELS
    ],
    url: "https://xwing-miniaturas.fandom.com/pt/wiki/Piloto_Recruta",
    name: "Piloto Recruta",
    description: "",
    image: "https://vignette.wikia.nocookie.net/xwing-miniaturas/images/3/3a/Piloto-recruta.png/revision/latest/scale-to-width-down/300?cb=20160406205230&path-prefix=pt",
    slug: "piloto-recruta",
    cost: 21,
    expertise: 2,
    ships: [
      'x-wing',
    ],
    enhancementTypes: [
      enhancementTypes.TORPEDO,
      enhancementTypes.ASTROMECH
    ]
  }
].map((pilot) => {
  return {
    ...pilot,
    enhancementTypes: [
      ...pilot.enhancementTypes,
      enhancementTypes.MODIFICATION
    ]
  }
});