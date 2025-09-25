export const calcularSigno = (fecha) => {
  const date = new Date(fecha);
  const dia = date.getDate();
  const mes = date.getMonth() + 1;

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return 'Aries';
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return 'Tauro';
  if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return 'Géminis';
  if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return 'Cáncer';
  if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return 'Leo';
  if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return 'Virgo';
  if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return 'Libra';
  if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return 'Escorpio';
  if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return 'Sagitario';
  if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return 'Capricornio';
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return 'Acuario';
  if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return 'Piscis';
  
  return null;
};

export const obtenerMensajeSigno = (signo) => {
  const mensajes = {
    Aries: [
      `${signo}: Eres una persona llena de energía y entusiasmo.`,
      'Tu espíritu aventurero te lleva a buscar nuevos retos.',
      'Hoy es un buen día para tomar la iniciativa.'
    ],
    Tauro: [
      `${signo}: Eres práctico y te gusta la estabilidad.`,
      'Valoras la seguridad y las cosas bien hechas.',
      'Confía en tu perseverancia para alcanzar tus metas.'
    ],
    Géminis: [
      `${signo}: Eres comunicativo y adaptable.`,
      'Tu curiosidad te lleva a aprender constantemente.',
      'Hoy puedes conectar con personas interesantes.'
    ],
    Cáncer: [
      `${signo}: Eres intuitivo y emocional.`,
      'Proteges a tus seres queridos con gran dedicación.',
      'Escucha tu intuición para tomar decisiones importantes.'
    ],
    Leo: [
      `${signo}: Eres creativo y lleno de vitalidad.`,
      'Tu carisma natural atrae a las personas hacia ti.',
      'Comparte tu alegría con los demás hoy.'
    ],
    Virgo: [
      `${signo}: Eres analítico y perfeccionista.`,
      'Tu atención al detalle es una de tus mayores virtudes.',
      'Organízate para maximizar tu productividad.'
    ],
    Libra: [
      `${signo}: Eres armonioso y diplomatico.`,
      'Buscas el equilibrio en todas las áreas de tu vida.',
      'Hoy es buen día para resolver conflictos.'
    ],
    Escorpio: [
      `${signo}: Eres pasional y determinado.`,
      'Tu intensidad te ayuda a profundizar en todo lo que haces.',
      'Confía en tu poder de transformación.'
    ],
    Sagitario: [
      `${signo}: Eres optimista y amante de la libertad.`,
      'Tu filosofía de vida te lleva a buscar nuevas experiencias.',
      'Aprovecha para expandir tus horizontes hoy.'
    ],
    Capricornio: [
      `${signo}: Eres disciplinado y ambicioso.`,
      'Tu paciencia te ayuda a construir bases sólidas.',
      'Sigue trabajando hacia tus objetivos con determinación.'
    ],
    Acuario: [
      `${signo}: Eres innovador y humanitario.`,
      'Tu mente visionaria te permite ver más allá de lo convencional.',
      'Comparte tus ideas originales con el mundo.'
    ],
    Piscis: [
      `${signo}: Eres sensible y compasivo.`,
      'Tu conexión espiritual te guía en tu camino.',
      'Deja fluir tu creatividad hoy.'
    ]
  };

  return mensajes[signo] || [`${signo}: Hoy es un día especial para ti.`, 'Confía en el universo y sigue tu corazón.'];
};