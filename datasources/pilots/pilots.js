import enhancements from '../enhancements/enhancements';

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
      enhancements.ELITE_TALENT,
      enhancements.MISSILE,
      enhancements.CREW,
      enhancements.CREW,
      enhancements.CREW,
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
      enhancements.ELITE_TALENT,
      enhancements.MISSILE,
      enhancements.CREW,
      enhancements.CREW,
    ]
  },
]