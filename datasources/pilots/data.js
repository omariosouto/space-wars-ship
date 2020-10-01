import { enhancementTypes } from '../enhancements/data';

export default [
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
  {
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
    ]
  },
]