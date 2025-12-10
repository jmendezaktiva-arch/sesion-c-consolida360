// Archivo de Contenido para la Presentación: Sesión C Flujo 4.2 - Gasto Inteligente, Inversiones Efectivas

const slideContent = [

// Lámina 0 (Diapositiva 1): Inicio / Recepción (2 Min)
  {
    // Layout: Centrado, ideal para la diapositiva de recepción o título principal.
    layout: 'layout-center-focus',
    title: 'Gasto Inteligente, Inversiones Efectivas', // Títulos: Gasto Inteligente, Inversiones Efectivas [cite: 1273]
    image: {
    src: 'assets/images/Copia de slide-2.1.png',
      alt: 'Logo de Mi Empresa Crece'
    }
  },

// Lámina 1 (Diapositiva 2): Portada / Problema-Promesa (2 Min)
  {
    // Layout: Dos Columnas, ideal para mostrar la imagen dividida (Caos vs. Control) y el texto de la promesa.
    layout: 'layout-two-columns',
    title: '¡Bienvenidos a Consolidación 360°!', // Títulos: ¡Bienvenidos a Consolidación 360°! [cite: 1277]
    subtitle: 'Gasto Inteligente, Inversiones Efectivas', // Subtítulos: Gasto Inteligente, Inversiones Efectivas [cite: 1278]
    image: {
      src: 'assets/images/slide-1.jpeg',
      alt: 'Representación visual del Caos vs. el Control Financiero'
    }
  },
  
// Lámina 2 (Diapositiva 3): Nuestra Esencia (1 Min)
  {
    // Layout: Dos Columnas, para equilibrar el texto sobre la misión con la imagen de soporte.
    layout: 'layout-two-columns',
    title: 'Mi Empresa Crece: Nuestra Esencia', // Títulos: Mi Empresa Crece: Nuestra Esencia [cite: 1290]
    subtitle: 'Socio Estratégico para la Transformación Sostenible',
    image: {
      src: 'assets/images/slide-2.jpeg',
      alt: 'Andamio sólido alrededor de una planta en crecimiento: Metodología Probada'
    }
  },

// Lámina 3 (Diapositiva 4): Programa de Transformación (2 Min)
  {
    // Layout: Infográfico, ideal para mostrar una conexión visual entre los 3 pilares con iconos y flechas.
    layout: 'layout-infographic',
    title: 'Tu Programa de Transformación', // Títulos: Tu Programa de Transformación [cite: 1298]
    subtitle: 'Los 3 Pilares de la Sostenibilidad del negocio',
    image: {
      src: 'assets/images/slide-3.png',
      alt: 'Diagrama de los tres pilares: Equipo, Ventas e Inversión'
    }
  },
  
// Lámina 4 (Diapositiva 5): Guías y Modelo Híbrido (2 Min)
  {
    // Layout: Dos Columnas, para la presentación de los facilitadores (fotos) y el diagrama de flujo del modelo.
    layout: 'layout-two-columns',
    title: 'Sus Guías en este Viaje', // Títulos: Sus Guías en este Viaje [cite: 1311]
    subtitle: 'Nuestro Modelo Híbrido: Responsabilidad Compartida',
    image: {
      src: 'assets/images/slide-5.png',
      alt: 'Fotos de Facilitadores y Diagrama de Flujo del Modelo Híbrido'
    }
  },

// Lámina 5 (Diapositiva 6): Reglas (1 Min)
  {
    // Layout: Centrado, para un mensaje clave y conciso sobre el compromiso.
    layout: 'layout-center-focus',
    title: 'Reglas del Juego y Dinámica', // Títulos: Reglas del Juego y Dinámica [cite: 1322]
    subtitle: 'Marco de Responsabilidad y Compromiso',
    image: {
        src: 'assets/images/Copia de slide-2.1.png',
        alt: 'Logo'
        }
  },
  
// Lámina 6 (Diapositiva 7): Objetivos de Hoy (3 Min)
  {
    layout: 'layout-infographic', // Ideal para mostrar el "Kit" de herramientas visualmente
    title: 'Objetivos de Hoy: Tu Kit de Herramientas', // [cite: 70]
    subtitle: 'Herramientas Duras y Mindset del Arquitecto', // [cite: 74, 76]
    image: {
      src: 'assets/images/slide-7.png',
      alt: 'Kit de herramientas: Termómetro, Filtros, Calculadora y Mapa'
    }
  },

// Lámina 7 (Diapositiva 8): Mapa de Conceptos (2 Min)
  {
    layout: 'layout-center-focus', // Enfoque central para el mapa mental
    title: 'El Mapa de Conceptos', // [cite: 82]
    subtitle: 'El "Porqué" detrás del Método', // [cite: 82, 87]
    image: {
      src: 'assets/images/slide-8.png',
      alt: 'Mapa Mental: Relación entre FCL y Marco 4+1'
    }
  },

// Lámina 8 (Diapositiva 9): Ruta de Implementación (2 Min)
  {
    layout: 'layout-infographic', // Visualización de proceso/ruta
    title: 'Nuestra Ruta de Implementación', // [cite: 90]
    subtitle: 'El "Cómo": Flujo Consultivo', // [cite: 90, 94]
    image: {
      src: 'assets/images/slide-9.png',
      alt: 'Ruta de implementación estilo línea de metro'
    }
  },

// BLOQUE 2: TALLER DE CONSTRUCCIÓN

// Lámina 9 (Diapositiva 10): Actividad 1 (7 Min)
  {
    layout: 'layout-two-columns', // Pantalla dividida: Instrucciones | Visual Workbook
    title: 'Actividad 1: Diagnóstico de Consolidación de Finanzas', // [cite: 100]
    subtitle: 'Construyendo el Muro de Contención', // [cite: 105]
    workbookLink: {
        url: '../workbook/index.html#ejercicio1',
        text: 'Ir al Ejercicio 1'
    },
    image: {
      src: 'assets/images/slide-10.png',
      alt: 'Visual del Ejercicio 1: Salario y Dividendos'
    }
  },

// Lámina 10 (Diapositiva 11): Actividad 2 (7 Min)
  {
    layout: 'layout-two-columns',
    title: 'Actividad 2: Plan de Acción Financiera', // [cite: 111]
    subtitle: 'De Políticas a Compromisos', // [cite: 117]
    workbookLink: {
        url: '../workbook/index.html#ejercicio2',
        text: 'Ir al Ejercicio 2'
    },
    image: {
      src: 'assets/images/slide-11.png',
      alt: 'Visual del Ejercicio 2: Plan de Acción'
    }
  },

// Lámina 11 (Diapositiva 12): Actividad 3 (7 Min)
  {
    layout: 'layout-two-columns',
    title: 'Actividad 3: Diagnóstico de Hábitos de Inversión', // [cite: 122]
    subtitle: 'Honestidad Radical y Anclas Visuales', // [cite: 127]
    workbookLink: {
        url: '../workbook/index.html#ejercicio3',
        text: 'Ir al Ejercicio 3'
    },
    image: {
      src: 'assets/images/slide-12.png',
      alt: 'Visual del Ejercicio 3: Escenario del Espejo'
    }
  },

// Lámina 12 (Diapositiva 13): Actividad 4 (10 Min)
  {
    layout: 'layout-two-columns',
    title: 'Actividad 4: Midiendo mi Oxígeno Real', // [cite: 134]
    subtitle: 'Simulador de Vuelo Financiero', // [cite: 139]
    workbookLink: {
        url: '../workbook/index.html#ejercicio4',
        text: 'Ir al Ejercicio 4'
    },
    image: {
      src: 'assets/images/slide-13.png',
      alt: 'Fórmula FCL y Semáforo de Alerta'
    }
  },

// Lámina 13 (Diapositiva 14): Actividad 5 (8 Min)
  {
    layout: 'layout-two-columns',
    title: 'Actividad 5: Selección de Proyecto Prioritario', // [cite: 145]
    subtitle: 'Enfoque y Priorización', // [cite: 151]
    workbookLink: {
        url: '../workbook/index.html#ejercicio5',
        text: 'Ir al Ejercicio 5'
    },
    image: {
      src: 'assets/images/slide-14.jpeg', // Asumiendo jpeg por patrón o png
      alt: 'Matriz de Priorización: Impacto vs Urgencia'
    }
  },

// Lámina 14 (Diapositiva 15): Actividad 6 a 10 (15 Min)
  {
    layout: 'layout-center-focus', // Layout central para destacar el flujo de los filtros
    title: 'Actividad 6 a 10: El Laboratorio de Decisión', // [cite: 155]
    subtitle: 'Marco de Evaluación $4+1$', // [cite: 5, 155]
    workbookLink: {
        url: '../workbook/index.html#ejercicio6',
        text: 'Iniciar Laboratorio (Ej 6-10)'
    },
    image: {
      src: 'assets/images/slide-15.png',
      alt: 'Diagrama de flujo: Los 5 Filtros del Marco 4+1'
    }
  },

// Lámina 15 (Diapositiva 16): Actividad 11 (7 Min)
  {
    layout: 'layout-two-columns',
    title: 'Actividad 11: El Argumento Irrefutable', // [cite: 165]
    subtitle: 'Tu One-Pager / Caso de Negocio', // [cite: 165, 171]
    workbookLink: {
        url: '../workbook/index.html#ejercicio11',
        text: 'Ir al Ejercicio 11'
    },
    image: {
      src: 'assets/images/slide-16.png',
      alt: 'Formato One-Pager: Argumento Irrefutable'
    }
  },

// BLOQUE 3: CIERRE

// Lámina 16 (Diapositiva 17): Conclusiones (3 Min)
  {
    layout: 'layout-center-focus',
    title: 'Conclusiones: De Reaccionar a Construir', // [cite: 175]
    subtitle: 'El Sistema Vence a la Intuición',
    image: {
      src: 'assets/images/slide-17.png',
      alt: 'Transformación de Problemas a Soluciones'
    }
  },

// Lámina 17 (Diapositiva 18): Llamado a la Acción (2 Min)
  {
    layout: 'layout-center-focus',
    title: 'Llamado a la Acción: Eres el Arquitecto', // [cite: 185]
    subtitle: 'Tu PYME Merece un Arquitecto, no un Apostador', // [cite: 186]
    image: {
      src: 'assets/images/slide-1.jpeg',
      alt: 'Arquitecto observando una maqueta bien construida'
    }
  },

// Lámina 18 (Diapositiva 19): Agradecimiento y Pasos (2 Min)
  {
    layout: 'layout-center-focus',
    title: 'Gracias. El Viaje Continúa.', // [cite: 195]
    subtitle: 'Próximos Pasos de tu Transformación',
    image: {
      src: 'assets/images/Copia de slide-2.1.png',
      alt: 'Información de Contacto y Próximos Pasos'
    }
  },

// Lámina 19 (Diapositiva 20): Despedida (2 Min)
  {
    layout: 'layout-center-focus',
    title: 'Equipo Proactivo, Empresa Exitosa: De Tareas a Resultados.', // [cite: 203]
    image: {
      src: 'assets/images/Copia de slide-2.1.png',
      alt: 'Logo Final Mi Empresa Crece'
    }
  }

];