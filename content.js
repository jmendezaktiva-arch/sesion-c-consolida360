// Archivo de Contenido para la Presentación: Sesión C Flujo 4.2 - Gasto Inteligente, Inversiones Efectivas

const slideContent = [

// Lámina 0 (Diapositiva 1): Inicio / Recepción (2 Min)
  {
    // Layout: Centrado, ideal para la diapositiva de recepción o título principal.
    layout: 'layout-center-focus',
    title: 'Gasto Inteligente, Inversiones Efectivas', // Títulos: Gasto Inteligente, Inversiones Efectivas [cite: 1273]
    image: {
      src: 'assets/images/logo-miempresacrece.png', // Idea de la imagen: Logo de Mi Empresa Crece. [cite: 1273]
      alt: 'Logo de Mi Empresa Crece'
    }
  },

// Lámina 1 (Diapositiva 2): Portada / Problema-Promesa (2 Min)
  {
    // Layout: Dos Columnas, ideal para mostrar la imagen dividida (Caos vs. Control) y el texto de la promesa.
    layout: 'layout-two-columns',
    title: '¡Bienvenidos a Consolidación 360°!', // Títulos: ¡Bienvenidos a Consolidación 360°! [cite: 1277]
    subtitle: 'Gasto Inteligente, Inversiones Efectivas', // Subtítulos: Gasto Inteligente, Inversiones Efectivas [cite: 1278]
    content: `
      <p>Hoy validamos su decisión de pasar del desorden al control.</p>
      <h2>"De la intuición al método: Transforma cada peso en el motor de tu visión".</h2>
      <p>Si alguna vez han sentido que sus finanzas son un caos o que deciden por impulso, están en el lugar correcto. Les daremos un método para lograrlo.</p>
    `, // Contenido basado en la Idea Central y Diálogos. [cite: 1279, 1280, 1283, 1284, 1285]
    image: {
      src: 'assets/images/slide-2-caos-control.png', // Idea de la imagen: Una imagen dividida: a la izquierda, un escritorio caótico y oscuro; a la derecha, el mismo escritorio ordenado, minimalista y con luz. [cite: 1286, 1287]
      alt: 'Representación visual del Caos vs. el Control Financiero'
    }
  },
  
// Lámina 2 (Diapositiva 3): Nuestra Esencia (1 Min)
  {
    // Layout: Dos Columnas, para equilibrar el texto sobre la misión con la imagen de soporte.
    layout: 'layout-two-columns',
    title: 'Mi Empresa Crece: Nuestra Esencia', // Títulos: Mi Empresa Crece: Nuestra Esencia [cite: 1290]
    subtitle: 'Socio Estratégico para la Transformación Sostenible',
    content: `
      <p>En Mi Empresa Crece tenemos una misión clara: ser el socio estratégico en la transformación de las PYMES.</p>
      <p>No creemos en soluciones mágicas, creemos en **metodologías probadas** que construyen empresas sólidas y sostenibles.</p>
    `, // Ideas Centrales: Misión y Metodología. [cite: 1291, 1293, 1294, 1295]
    image: {
      src: 'assets/images/slide-3-andamio.png', // Idea de la imagen: Una imagen que represente un andamio sólido alrededor de una planta en crecimiento. [cite: 1296]
      alt: 'Andamio sólido alrededor de una planta en crecimiento: Metodología Probada'
    }
  },

// Lámina 3 (Diapositiva 4): Programa de Transformación (2 Min)
  {
    // Layout: Infográfico, ideal para mostrar una conexión visual entre los 3 pilares con iconos y flechas.
    layout: 'layout-infographic',
    title: 'Tu Programa de Transformación', // Títulos: Tu Programa de Transformación [cite: 1298]
    subtitle: 'Los 3 Pilares de la Sostenibilidad del negocio',
    content: `
      <p>Nuestro programa se sostiene sobre tres grandes pilares:</p>
      <ul>
        <li>Un Equipo de alto rendimiento.</li>
        <li>Un sistema de Ventas predecible.</li>
        <li>Una estrategia de **Inversión inteligente**.</li>
      </ul>
      <p>Hoy nos sumergimos de lleno en este tercer pilar, clave para la **Sostenibilidad**.</p>
    `, // Ideas Centrales: Pilares y Enfoque en Inversión. [cite: 1302, 1303, 1304, 1305, 1307]
    image: {
      src: 'assets/images/slide-4-pilares.png', // Idea de la imagen: Tres iconos grandes y claros (Equipo, Ventas, Inversión) conectados por flechas. [cite: 1308]
      alt: 'Diagrama de los tres pilares: Equipo, Ventas e Inversión'
    }
  },
  
// Lámina 4 (Diapositiva 5): Guías y Modelo Híbrido (2 Min)
  {
    // Layout: Dos Columnas, para la presentación de los facilitadores (fotos) y el diagrama de flujo del modelo.
    layout: 'layout-two-columns',
    title: 'Sus Guías en este Viaje', // Títulos: Sus Guías en este Viaje [cite: 1311]
    subtitle: 'Nuestro Modelo Híbrido: Responsabilidad Compartida',
    content: `
      <p>En este viaje no están solos. Nosotros, [Nombres de los facilitadores], seremos sus guías.</p>
      <p>Nuestro modelo está diseñado para asegurar que la teoría se convierta en realidad, trabajando en un ciclo constante:</p>
      <ol>
        <li>Sesión Grupal</li>
        <li>Implementación</li>
        <li>Sesión Individual</li>
        <li>Revisión y Ajuste</li>
      </ol>
    `, // Ideas Centrales: Presentación y Explicación del Ciclo. [cite: 1312, 1315, 1316, 1318]
    image: {
      src: 'assets/images/slide-5-guias-modelo.png', // Idea de la imagen: Fotos profesionales y accesibles de los facilitadores junto a un diagrama de flujo del modelo híbrido. [cite: 1319]
      alt: 'Fotos de Facilitadores y Diagrama de Flujo del Modelo Híbrido'
    }
  },

// Lámina 5 (Diapositiva 6): Reglas (1 Min)
  {
    // Layout: Centrado, para un mensaje clave y conciso sobre el compromiso.
    layout: 'layout-center-focus',
    title: 'Reglas del Juego y Dinámica', // Títulos: Reglas del Juego y Dinámica [cite: 1322]
    subtitle: 'Marco de Responsabilidad y Compromiso',
    content: `
      <p>Para que esta sesión sea un verdadero motor de transformación, necesitamos establecer los cimientos para construir juntos:</p>
      <ul class="rules-list">
        <li>Cámara encendida: **Compromiso**</li>
        <li>Participación activa: **Proactividad**</li>
        <li>Enfoque total: **Resultados**</li>
      </ul>
    `, // Ideas Centrales: Marco y Reglas/Valores. [cite: 1323, 1325, 1326]
  },
  
// **Añadir el resto de láminas del plan de sesión aquí (a partir de la Diapositiva 7).**
];

// Exporta la constante para ser usada en el presentador.
// module.exports = slideContent;