export const story = {
  question: {
    intro: 'Estás caminando por un bosque encantado. Los árboles parecen susurrar secretos.',
    event: 'De repente, un sonido fuerte rompe la calma.',
    action: 'Ves algo moverse entre los arbustos. ¿Qué haces?',
  },
  answers: [
    {
      text: 'Te acercas al arbusto para investigar',
      next: {
        question: {
          intro: 'Te mueves hacia el arbusto, apartando ramas cuidadosamente.',
          event: 'Un pequeño ser con orejas puntiagudas salta hacia ti.',
          action: "'¡Por favor, ayúdame!', dice. ¿Qué decides hacer?",
        },
        answers: [
          {
            text: 'Ayudar al ser',
            next: { question: { action: 'El ser te guía hacia un claro...' }, answers: [] },
          },
          { text: 'Ignorarlo', next: { question: { action: 'Sigues tu camino...' }, answers: [] } },
        ],
      },
    },
    { text: 'Ignoras el arbusto y sigues caminando', next: null },
  ],
}
