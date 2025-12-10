// Archivo de Contenido para la Presentación: Sesión C
// Homologado al estilo y estructura de Sesión B

const slideContent = [

  // Lámina 0: Inicio / Recepción (Nueva, para empalmar con Sesión B)
  {
    layout: 'layout-center-focus',
    title: 'Gasto Inteligente, Inversiones Efectivas',
    subtitle: 'Recepción - Iniciamos en breves minutos',
    image: {
      src: 'assets/images/slide-2.1.png', 
      alt: 'Logo de Mi Empresa Crece'
    }
  },

  // Lámina 1: Portada (Bienvenida)
  {
    layout: 'layout-center-focus',
    title: '¡Bienvenidos a Consolidación 360°!',
    subtitle: 'Gasto Inteligente, Inversiones Efectivas',
    image: {
      src: 'assets/images/slide-1.jpeg',
      alt: 'Portada Sesión C'
    }
  },

  // Lámina 2: Nuestra Esencia
  // Se ha limpiado el HTML incrustado para usar el layout nativo de dos columnas
  {
    layout: 'layout-two-columns',
    title: 'Mi Empresa Crece: Nuestra Esencia',
    subtitle: '"Construimos empresas sólidas y sostenibles."',
    content: `
      <p><strong>Metodología probada</strong>.</p>
      <p style="margin-top: 20px;">Nuestra esencia no es solo teoría, es la transformación real de hábitos reactivos a métodos proactivos.</p>
    `,
    image: {
      src: 'assets/images/slide-2.jpeg',
      alt: 'Empresas en construcción'
    }
  },

  // Lámina 3: Programa de Transformación
  {
    layout: 'layout-infographic',
    title: 'Tu Programa de Transformación',
    subtitle: 'Los 3 Pilares de tu Consolidación',
    content: `
      <div class="icon-grid">
        <div class="icon-item"><i class="fas fa-users"></i><p>Equipo</p></div>
        <div class="connector">&rarr;</div>
        <div class="icon-item"><i class="fas fa-chart-line"></i><p>Ventas</p></div>
        <div class="connector">&rarr;</div>
        <div class="icon-item"><i class="fas fa-coins" style="color: var(--accent-color);"></i><p><strong>Inversión</strong></p></div>
      </div>
    `
    // Esta lámina usa layout-infographic, no requiere imagen externa en el objeto image
  },

  // Lámina 4: Sus Guías
  {
    layout: 'layout-two-columns', // Estandarizado a dos columnas para manejar texto + foto
    title: 'Sus Guías en este Viaje',
    subtitle: 'Aliados en tu Estrategia',
    content: `
      <div style="font-size: 1.2em; line-height: 1.6;">
        <p><strong>El flujo del éxito:</strong></p>
        <p>Sesión Grupal <br>&darr;<br> Implementación <br>&darr;<br> Sesión Individual <br>&darr;<br> Ajuste</p>
      </div>
    `,
    image: {
      src: 'assets/images/slide-4.jpeg',
      alt: 'Guías del curso'
    }
  },

  // Lámina 5: Reglas del Juego
  {
    layout: 'layout-default slide-5-custom',
    title: 'Reglas del Juego y Dinámica',
    subtitle: 'Cimientos para construir juntos',
    content: `
      <ul class="infographic-list">
        <li><i class="fas fa-video"></i> <div><strong>Cámara encendida = Compromiso</strong><br>Estar presente y conectado con el grupo.</div></li>
        <li><i class="fas fa-microphone-lines"></i> <div><strong>Participación activa = Proactividad</strong><br>Tu aprendizaje depende de tu involucramiento.</div></li>
        <li><i class="fas fa-lightbulb"></i> <div><strong>Mente abierta = Crecimiento</strong><br>Dispuesto a desaprender y adoptar nuevos métodos.</div></li>
        <li><i class="fas fa-clock"></i> <div><strong>Puntualidad = Respeto</strong><br>Valoramos tu tiempo y el de los demás.</div></li>
      </ul>
    `
  },

  // Lámina 6: Objetivos de Hoy
  {
    layout: 'layout-two-columns', 
    title: 'Objetivos de Hoy: Tu Kit de Herramientas',
    subtitle: 'Herramientas Duras y Mindset del Arquitecto',
    content: `
      <div class="text-column">
          <h3><i class="fas fa-tools" style="color: var(--secondary-color);"></i> Herramientas Duras</h3>
          <ul style="font-size: 0.9em;">
            <li>El "termómetro" del Flujo de Caja Libre</li>
            <li>El sistema de Filtros 4+1</li>
            <li>La "calculadora" de ROI anualizado</li>
            <li>El Mapa de Riesgos</li>
          </ul>
      </div>
      <div class="text-column" style="margin-top: 30px;">
          <h3><i class="fas fa-brain" style="color: var(--secondary-color);"></i> Mindset</h3>
          <ul style="font-size: 0.9em;">
            <li>Disciplina y Confianza basada en datos</li>
            <li>Visión estratégica</li>
          </ul>
      </div>
    `,
    image: {
      src: 'assets/images/slide-6.jpeg',
      alt: 'Kit de Herramientas'
    }
  },

  // Lámina 7: Mapa de Conceptos
  {
    layout: 'layout-center-focus',
    title: 'El Mapa de Conceptos',
    subtitle: 'El "Porqué" detrás de la estrategia',
    image: {
      src: 'assets/images/slide-7.jpeg',
      alt: 'Mapa de conceptos'
    }
  },

  // Lámina 8: Ruta de Implementación
  {
    layout: 'layout-center-focus',
    title: 'Nuestra Ruta de Implementación',
    subtitle: 'El "Cómo" lo lograremos',
    image: {
      src: 'assets/images/slide-8.png',
      alt: 'Ruta de implementación'
    }
  },

  // Lámina 10: Actividad 1
  {
    layout: 'layout-two-columns',
    title: 'Actividad 1: Diagnóstico de Honestidad Radical',
    subtitle: 'Abre tu Workbook - Ejercicio 1',
    content: `
      <ol>
        <li>Sé <strong>brutalmente honesto</strong>. Este es un espejo, no un examen.</li>
        <li>Reflexiona y anota: ¿Cuál es el hábito N°1 que más se repite en tus decisiones financieras?</li>
      </ol>
    `,
    image: {
      src: 'assets/images/slide-9.jpeg',
      alt: 'Diagnóstico'
    }
  },

  // Lámina 11: Actividad 2
  {
    layout: 'layout-two-columns',
    title: 'Actividad 2: Del Hábito al Método',
    subtitle: 'Workbook - Ejercicio 2',
    content: `
      <ol>
        <li>Para cada "Hábito de Riesgo", define tu "Primer Paso para Implementar" la buena práctica.</li>
        <li>Crea un puente claro entre el problema y la solución.</li>
      </ol>
    `,
    image: {
      src: 'assets/images/slide-10.jpeg',
      alt: 'Del Hábito al Método'
    }
  },

  // Lámina 12: Actividad 3
  {
    layout: 'layout-two-columns',
    title: 'Actividad 3: El Muro de Contención',
    subtitle: 'Workbook - Ejercicio 3',
    content: `
      <ol>
        <li>Pon límites claros para proteger tu negocio y tu patrimonio.</li>
        <li>Define tu <strong>Salario de Director</strong> basado en el valor de mercado.</li>
        <li>Establece tu <strong>Política de Dividendos</strong>.</li>
      </ol>
    `,
    image: {
      src: 'assets/images/slide-13.jpeg',
      alt: 'Muro de contención'
    }
  },

  // Lámina 13: Actividad 4
  {
    layout: 'layout-two-columns',
    title: 'Actividad 4: Midiendo mi Oxígeno Real',
    subtitle: 'Workbook - Ejercicio 4',
    content: `
      <ol>
        <li>Usarás tus <strong>estados de cuenta bancarios</strong>.</li>
        <li>Calcula tu FCL Base.</li>
        <li>Realiza el "Simulador de Vuelo": ¿Qué pasaría si tus ventas cayeran un 20%?</li>
      </ol>
    `,
    image: {
      src: 'assets/images/slide-20.jpeg',
      alt: 'Midiendo oxígeno'
    }
  },

  // Lámina 14: Proyecto Clave
  {
    layout: 'layout-center-focus',
    title: 'Elige Tu Proyecto Clave',
    subtitle: 'Foco en lo importante',
    image: {
      src: 'assets/images/slide-14.jpeg',
      alt: 'Proyecto Clave'
    }
  },

  // Lámina 15: Actividad 5
  {
    layout: 'layout-two-columns',
    title: 'Actividad 5: El Laboratorio de Decisión',
    subtitle: 'Workbook - Ejercicio 5',
    content: `
      <ol>
        <li>Con tu proyecto clave en mente.</li>
        <li>Pasa tu proyecto por cada uno de los <strong>5 filtros</strong>.</li>
        <li>Emite un veredicto de "SÍ/NO".</li>
      </ol>
    `,
    image: {
      src: 'assets/images/slide-21.jpeg',
      alt: 'Laboratorio de decisión'
    }
  },

  // Lámina 16: Actividad 6
  {
    layout: 'layout-two-columns',
    title: 'Actividad 6: Del Papel a la Acción',
    subtitle: 'Workbook - Ejercicio 6',
    content: `
      <ol>
        <li>Si tu decisión fue "SÍ".</li>
        <li>Define tus <strong>acciones inmediatas (7 días)</strong>.</li>
        <li>Establece tus <strong>hitos clave (30 días)</strong> y tus <strong>objetivos (90 días)</strong>.</li>
      </ol>
    `,
    image: {
      src: 'assets/images/slide-22.jpeg',
      alt: 'Del Papel a la Acción'
    }
  },

  // Lámina 17: Actividad 7
  {
    layout: 'layout-two-columns',
    title: 'Actividad 7: El Argumento Irrefutable',
    subtitle: 'Entregable Final - Ejercicio 7',
    content: `
      <ol>
        <li>Consolida toda la información en este formato de <strong>una página</strong>.</li>
        <li>Fírmalo para formalizar tu compromiso.</li>
      </ol>
    `,
    image: {
      src: 'assets/images/slide-23.jpeg',
      alt: 'Argumento Irrefutable'
    }
  },

  // Lámina 18: Resumen (De Reaccionar a Construir)
  {
    layout: 'layout-default slide-19-custom',
    title: 'De Reaccionar a Construir',
    subtitle: 'La evolución de tu gestión',
    content: `
      <ul class="infographic-list" style="margin-top: 20px;">
        <li><i class="fas fa-water"></i> <div><strong>Incertidumbre</strong> &rarr; <strong>Flujo de Caja Libre</strong>.</div></li>
        <li><i class="fas fa-dollar-sign"></i> <div><strong>Gastos sin evaluación</strong> &rarr; <strong>Prima de Riesgo</strong>.</div></li>
        <li><i class="fas fa-question-circle"></i> <div><strong>Miedo</strong> &rarr; <strong>Matriz de Riesgo</strong>.</div></li>
        <li><i class="fas fa-random"></i> <div><strong>Mezcla de finanzas</strong> &rarr; <strong>Marco 4+1</strong>.</div></li>
      </ul>
    `
  },

  // Lámina 19: Cierre Inspiracional
  {
    layout: 'layout-center-focus',
    title: 'Tu PYME Merece un Arquitecto, no un Apostador',
    subtitle: 'La primera decisión empieza ahora.',
    image: {
      src: 'assets/images/slide-24.jpeg',
      alt: 'Cierre Inspiracional'
    }
  },

  // Lámina 20: Despedida y Pasos
  {
    layout: 'layout-center-focus',
    title: 'Gracias. El Viaje Continúa.',
    subtitle: 'Próximos Pasos: Implementación y Sesión Individual',
    content: `
      <p>Recuerda usar tu Plan de 90 días como guía.</p>
      <p style="margin-top:20px; font-weight:bold;">Consolida 360º</p>
    `,
    image: {
      src: 'assets/images/slide-2.1.png',
      alt: 'Logo Final'
    }
  }

];