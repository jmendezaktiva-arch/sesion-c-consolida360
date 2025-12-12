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
      src: 'assets/images/slide-4.png',
    }
  },

// Lámina 5 (Diapositiva 6): Reglas (1 Min)
  {
    // Layout: Centrado, para un mensaje clave y conciso sobre el compromiso.
    layout: 'layout-center-focus',
    title: 'Reglas del Juego y Dinámica', // Títulos: Reglas del Juego y Dinámica [cite: 1322]
    subtitle: 'Marco de Responsabilidad y Compromiso',
    image: {
        src: 'assets/images/slide-5.png',
        alt: 'Logo'
        }
  },
 // Lámina 6 (Diapositiva 7): Objetivos de Hoy (3 Min)
  {
    layout: 'layout-infographic', // Ideal para mostrar el "Kit" de herramientas visualmente
    title: 'Objetivos de Hoy: Tu Kit de Herramientas', //
    subtitle: 'Herramientas Duras y Mindset del Arquitecto', //
    content: `
      <p>Al final de la sesión tendrán herramientas duras y un nuevo mindset:</p>
      <ul>
        <li><strong>El "termómetro" del Flujo de Caja Libre.</strong></li>
        <li><strong>El sistema de Filtros $4+1$.</strong></li>
        <li><strong>La "calculadora" de ROI.</strong></li>
        <li><strong>El Mapa de Riesgos.</strong></li>
      </ul>
      <p><em>Mindset: Disciplina, confianza en los datos y visión estratégica.</em></p>
    `, //
    // RUTA ACTUALIZADA CON EL CONTENT_ID DE LA IMAGEN GENERADA
    image: {
      src: 'assets/images/slide-7.png', 
      alt: 'Kit de herramientas: Termómetro, Filtros, Calculadora y Mapa'
    }
  }, 




  // Lámina 6 (Diapositiva 7): Objetivos de Hoy (3 Min)
  {
    layout: 'layout-infographic', // Ideal para mostrar el "Kit" de herramientas visualmente
    title: 'Objetivos de Hoy: Tu Kit de Herramientas', // [cite: 70]
    subtitle: 'Herramientas Duras y Mindset del Arquitecto', // [cite: 74, 76]
    image: {
      src: 'assets/images/slide-7.png',
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

// --- SERIE DE EJERCICIOS (MODIFICADO) ---
  {
    layout: 'layout-center-focus',
    title: 'Plan de implementación',
    subtitle: 'Diagnosticando tu Ecosistema Digital',
    workbookLink: {
        url: '../workbook/index.html#diagnostico',
        text: 'Abrir Plan de Implementación'
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
    title: 'Consolida 360º.', // [cite: 203]
    image: {
      src: 'assets/images/Copia de slide-2.1.png',
    }
  }

];