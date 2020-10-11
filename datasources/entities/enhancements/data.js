import { alianceTypes } from '../aliances/data';
import { shipSizes } from '../ships/data';

export const enhancementSides = {
  FRONT: 'FRONT', // Talento de Elite
  BACK: 'BACK', // Modificação
}

export const enhancementTypes = {
  ELITE_TALENT: 'ELITE_TALENT', // Talento de Elite
  MODIFICATION: 'MODIFICATION', // Modificação
  MISSILE: 'MISSILE', // Missíl
  CREW: 'CREW', // Tripulação
  TITLE: 'TITLE', // Melhoria de nave, Título
  ASTROMECH: 'ASTROMECH', // Astromecânico (ex: R2-D2)
  TORPEDO: 'TORPEDO', // Torpedo (ex: Torpedo de prótons)
}

export default [
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [],
    slug: 'chewbacca-tripulacao',
    name: 'Chewbacca (Tripulação)',
    cost: 4,
    type: enhancementTypes.CREW,
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Apenas Rebelde.
        Quando você receber uma carta de Dano, você pode imediatamente descartá-la e recuperar 1 escudo.
        Em seguida, descarte esta carta de Melhoria.`,
      }
    ],
  },
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [
      'yt-1300'
    ],
    slug: 'millennium-falcon-classica',
    name: 'Millennium Falcon (Clássica)',
    cost: 1,
    type: enhancementTypes.TITLE,
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Apenas YT-1300. Título.
        Sua barra de ações ganha o ícone de ação desvio.`,
      }
    ]
  },
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [
      'yt-1300'
    ],
    slug: 'millennium-falcon-hrd',
    name: 'Millennium Falcon (HdR)',
    cost: 1,
    type: enhancementTypes.TITLE,
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Somente YT-1300. Título.
        Após executar uma manobra de curva [curva leve à esquerda ou curva leve à direita] com velocidade 3, se não estiver encostado em ou outra nave e não estiver estressado, você pode receber 1 ficha de estresse para rotacionar sua nave em 180º.`,
      }
    ]
  },
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [],
    slug: 'luke-skywalker-tripulacao',
    name: 'Luke Skywalker (Tripulação)',
    cost: 7,
    type: enhancementTypes.CREW,
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Apenas Rebelde.
        Depois que você realizar um ataque que não acerte, você pode realizar imediatamente um ataque com a arma primária.
        Você pode mudar 1 resultado foco para um resultado acerto. Você não pode realizar outro ataque nesta rodada.`,
      }
    ]
  },
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [],
    slug: 'nien-nunb-tripulacao',
    name: 'Nien Nunb (Tripulação)',
    cost: 1,
    type: enhancementTypes.CREW,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Nien_Nunb_(Tripula%C3%A7%C3%A3o)',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Apenas Rebelde.
        Você pode considerar todas as manobras **retas** como manobras verdes.`,
      }
    ]
  },
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [],
    slug: 'engenheiro-de-armas',
    name: 'Engenheiro de Armas',
    cost: 1,
    type: enhancementTypes.CREW,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Engenheiro_de_Armas',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Você pode manter 2 miras (apenas 1 por nave inimiga).
        Quando você adquire uma mira, você pode mirar em 2 naves diferentes.`,
      }
    ]
  },
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [],
    slug: 'engenheiro-de-armas',
    name: 'Engenheiro de Armas',
    cost: 1,
    type: enhancementTypes.CREW,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Engenheiro_de_Armas',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Você pode manter 2 miras (apenas 1 por nave inimiga).
        Quando você adquire uma mira, você pode mirar em 2 naves diferentes.`,
      }
    ]
  },
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [
      'u-wing',
    ],
    slug: 'asas-pivotantes',
    name: 'Asas Pivotantes',
    cost: 0,
    type: enhancementTypes.TITLE,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Asas_Pivotantes',
    sides: [
      {
        type: enhancementSides.FRONT,
        nickname: 'Ataque',
        description: `Somente U-Wing. Título. Carta Dupla.
        Aumente seu valor de agilidade em 1.
        Após executar uma manobra, você pode virar esta carta.`,
      },
      {
        type: enhancementSides.BACK,
        nickname: 'Pouso',
        description: `Somente U-Wing. Título. Carta Dupla.
        Ao revelar uma manobra [parada 0], você pode rotacionar sua nave 180º.
        Após executar uma manobra, você pode virar esta carta.`
      }
    ] 
  },
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [],
    restrictions: {
      ships: {
        size: [
          shipSizes.SMALL
        ]
      }
    },
    slug: 'intensidade',
    name: 'Intensidade',
    cost: 2,
    type: enhancementTypes.ELITE_TALENT,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Intensidade',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Somente Nave Pequena. Carta Dupla.
        Após realizar uma ação de impulso ou de pirueta, você pode colocar 1 ficha de foco ou de desvio em sua nave. Se fizer isso, vire esta carta.`,
      },
      {
        type: enhancementSides.BACK,
        nickname: 'Consumida',
        description: `Somente Nave Pequena. Carta Dupla.
        No final da fase de Combate, você pode gastar 1 ficha de foco ou de desvio para virar esta carta.`
      }
    ] 
  },
  // 
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [],
    restrictions: {
      ships: {
        size: [
          shipSizes.SMALL
        ]
      }
    },
    slug: 'r2-d2',
    name: 'R2-D2',
    cost: 4,
    type: enhancementTypes.ASTROMECH,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/R2-D2',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Depois de efetuar uma manobra verde, você pode recuperar um escudo (até o valor de seu escudo).`,
      },
    ] 
  },
  //
  {
    alianceNames: [
      alianceTypes.REBELS
    ],
    ships: [],
    restrictions: {},
    slug: 'r2-f2',
    name: 'R2-f2',
    cost: 4,
    type: enhancementTypes.ASTROMECH,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/R2-F2',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Ação: Aumente o valor de sua agilidade em 1 até o final deste turno.`,
      },
    ] 
  },
  {
    ships: [],
    restrictions: {},
    slug: 'r2-f2',
    name: 'R2-f2',
    cost: 3,
    type: enhancementTypes.ASTROMECH,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/R2-F2',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Ação: Aumente o valor de sua agilidade em 1 até o final deste turno.`,
      },
    ] 
  },
  {
    ships: [],
    restrictions: {},
    slug: 'determinacao',
    name: 'Determinação',
    cost: 1,
    type: enhancementTypes.ELITE_TALENT,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Determina%C3%A7%C3%A3o',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Quando você recebe uma carta de Dano virada para cima do tipo Piloto, descarte-a imediatamente sem resolver seu efeito.`,
      },
    ] 
  },
  {
    ships: [],
    restrictions: {},
    slug: 'franco-atirador',
    name: 'Franco-Atirador',
    cost: 3,
    type: enhancementTypes.ELITE_TALENT,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Franco-Atirador',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Ação: Ao atacar nesta rodada, você pode mudar 1 de seus resultados foco para um resultado crítico e todos os seus outros resultados foco para resultados acerto.`,
      },
    ] 
  },
  {
    ships: [],
    restrictions: {},
    slug: 'torpedos-de-proton',
    name: 'Torpedos de Próton',
    cost: 4,
    type: enhancementTypes.TORPEDO,
    url: 'https://xwing-miniaturas.fandom.com/pt/wiki/Torpedos_de_Pr%C3%B3ton',
    sides: [
      {
        type: enhancementSides.FRONT,
        description: `Ataque (mira): Gaste sua mira e descarte esta carta para realizar este ataque.
Você pode mudar 1 de seus resultados foco para um resultado crítico.`,
      },
    ] 
  },
  
];