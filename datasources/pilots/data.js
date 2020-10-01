import { enhancementTypes } from '../enhancements/data';

export default [
  {
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/1/19/Han-solo.png/revision/latest?cb=20160406204910&path-prefix=pt',
    slug: "han-solo",
    name: "Han Solo",
    cost: 46,
    description: "Ao atacar, você pode rerrolar todos os seus dados. Se escolher fazer isso, você deve rerrolar a maior quantidade possível de seus dados.",
    ships: [
      "yt-1300"
    ],
    enhancements: [
      enhancementTypes.ELITE_TALENT,
      enhancementTypes.MISSILE,
      enhancementTypes.CREW,
      enhancementTypes.CREW
    ],
    url: '',
  },
  {
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/a/a6/Lando-calrissian.png/revision/latest?cb=20160406205059&path-prefix=pt',
    slug: "lando-calrissian",
    name: "Lando Calrissian",
    cost: 44,
    description: "Após executar uma manobra verde, escolha 1 outra nave amiga em Alcance 1. Esta nave pode realizar 1 ação gratuita exibida em sua barra de ação.",
    ships: [
      "yt-1300"
    ],
    enhancements: [
      enhancementTypes.ELITE_TALENT,
      enhancementTypes.MISSILE,
      enhancementTypes.CREW,
      enhancementTypes.CREW,
    ],
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Lando_Calrissian',
  },
  {
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/f/f1/Chewbacca.png/revision/latest?cb=20160406204718&path-prefix=pt',
    slug: "chewbacca",
    name: "Chewbacca",
    cost: 42,
    description: "Quando você recebe uma carta de Dano virada para cima, vire-a imediatamente para baixo (sem resolver sua habilidade).",
    ships: [
      "yt-1300"
    ],
    enhancements: [
      enhancementTypes.ELITE_TALENT,
      enhancementTypes.MISSILE,
      enhancementTypes.CREW,
      enhancementTypes.CREW,
    ],
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Chewbacca',
  },
  {
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/7/76/Contrabandista-orla-exterior.png/revision/latest?cb=20160406204718&path-prefix=pt',
    slug: "contrabandista-da-orla-exterior",
    name: "Contrabandista da Orla Exterior",
    cost: 27,
    description: "Conhecida por sua durabilidade e desenho modular, a YT-1300 é um dos transportes mais populares e amplamente utilizados da galáxia.",
    ships: [
      "yt-1300"
    ],
    enhancements: [
      enhancementTypes.CREW,
      enhancementTypes.CREW,
    ],
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Contrabandista_da_Orla_Exterior', 
  },
  {
    image: 'https://vignette.wikia.nocookie.net/xwing-miniaturas/images/1/16/Poe-dameron-hotr.jpg/revision/latest?cb=20170626122704&path-prefix=pt',
    slug: "contrabandista-da-orla-exterior",
    name: "Poe Dameron (HdR)",
    cost: 27,
    description: "Ao atacar ou defender, se você tiver uma ficha de foco, você pode mudar 1 de seus resultados foco para um resultado dano ou desvio.",
    ships: [
      "yt-1300"
    ],
    enhancements: [
      enhancementTypes.CREW,
      enhancementTypes.CREW,
    ],
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Poe_Dameron_(HdR)',
  }
]