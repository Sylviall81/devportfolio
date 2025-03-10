 
export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveLink: string;
    githubLink: string;

  }

export const projects: Project[] = [
  
    {
      id: "1",
      title: "The Bookclub",
      description:
        "Blog Literario donde los usuarios crear, eliminar y actualizar reseñas de libros, incluye autenticación de usuarios, dashboard personal y marcar post como favoritos",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741609129/portfolio/projects_imgs/BookClub8.png",
      tags: ["PHP", "MySQL", "Clever Cloud"],
      liveLink: "https://app-828c7e83-e0b0-41c5-855f-c3cf129aecf1.cleverapps.io/public/",
      githubLink: "https://github.com/Sylviall81/bookclub_php",
    },
    {
      id: "2",
      title: "Start-Up site",
      description: "Landing Page Responsive para una start-up ficticia de desarrolladores.Primer Proyecto del Bootcamp Femcoders como aproximación al aprendizaje HTML, CSS y JavaScript Basico",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741190725/portfolio/projects_imgs/StartUpSiteImage1.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Atomic Design"],
      liveLink: "https://start-up-site-five.vercel.app/index.html",
      githubLink: "https://github.com/Sylviall81/start-up-site",
    },
    // {
    //   id: "3",
    //   title: "Hit the Dom Boom",
    //   description: "Aplicación Web en la que se simula una batería y se juega con efectos de sonido al clickar la pantalla",
    //   image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1704299490/portfolio/projects_imgs/Hit-The-DomBoom/Captura_de_Pantalla_2024-01-03_a_la_s_5.30.40_p._m._hcj5mo.jpg",
    //   tags: ["HTML, CSS, Javascript"],
    //   liveLink: "https://proyecto3.com",
    //   githubLink: "https://github.com/tuusuario/proyecto3",
    // },

    {
      id: "4",
      title: "Odin Project Landing Page",
      description:
        "Este proyecto forma parte del curso de desarrollo web <a href='https://www.theodinproject.com/' target='_blank' rel='noopener noreferrer'> The Odin Project </a>y consiste en crear una página web completa basada en un diseño proporcionado.",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741197397/portfolio/projects_imgs/Captura_de_Pantalla_2025-03-05_a_la_s_6.54.46_p._m._zaqqd5.jpg",
      tags: ["HTML", "CSS", "GitHub Pages"],
      liveLink: "https://sylviall81.github.io/odin-project-landing-page/",
      githubLink: "https://github.com/Sylviall81/odin-project-landing-page",
    },
    {
      id: "5",
      title: "Factic - Useless Facts",
      description:`
  Factic es una aplicación web que devuelve hechos curiosos que no necesitas. En esta aplicación, utilizamos la 
  <a href='https://uselessfacts.jsph.pl/' target='_blank' rel='noopener noreferrer'>API Useless Facts</a> 
  para obtener los datos de hechos curiosos de forma aleatoria. La aplicación además cuenta con las siguientes funcionalidades:
  <ul>
    <li>Obtiene hechos curiosos de la API de Useless Facts y los muestra en la página principal.</li>
    <li>Permite guardar hechos curiosos como favoritos, almacenarlos y visualizarlos en una lista.</li>
    <li>Moverse hacia adelante para ver el siguiente hecho curioso al presionar NEXT.</li>
    <li>...Y si activas el sonido disfrutarás de la parte más divertida.</li>
  </ul>
`,
     
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741197400/portfolio/projects_imgs/Captura_de_Pantalla_2025-03-05_a_la_s_6.55.28_p._m._qckn1q.jpg",
      tags: ["HTML", "CSS", "Javascript","GitHub Pages", "Responsive", "API"],
      liveLink: "https://factic.vercel.app/",
      githubLink: "https://github.com/Sylviall81/factic",
    },
    {
      id: "6",
      title: "My JS NoteBook",
      description:
        "Uno de mis primeros proyectos de desarrollo, donde reúno ejercicios básicos de JavaScript organizados por módulos. Desde lo más básico hasta POO, todo con componentes de Bootstrap y alojado en GitHub Pages. ¡Espero que te sea útil!",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741119502/portfolio/projects_imgs/JsNotebook3.jpg",
      tags: ["Bootstrap", "JavaScript", "GitHub Pages"],
      liveLink: "https://sylviall81.github.io/myJsNotebook/",
      githubLink: "https://github.com/Sylviall81/myJsNotebook/",
    },
    
    {
      id: "7",
      title: "JavaScript To-Do List",
      description:
        "El clasico proyecto de To-Do List con JavaScript Vanilla en que se pueden agregar items a una lista, tachar y borrar.Incluye persistencia de datos con con localStorage",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741267251/portfolio/projects_imgs/Captura_desde_2025-03-06_14-20-37_nlw051.png",
      tags: ["HTML", "CSS","JavaScript", "GitHub Pages"],
      liveLink: "https://sylviall81.github.io/vanilla-js-to-do-app/",
      githubLink: "https://github.com/Sylviall81/vanilla-js-to-do-app",
    },

    {
      id: "8",
      title: "QA artifacts - 🔍 Batería de Casos de Prueba para la Web Demoblaze",
      description:
        "<p>Este proyecto consiste en el diseño y documentación de una batería de 45 casos de prueba para la web Demoblaze, utilizando Google Sheets como herramienta de gestión. Los casos de prueba están organizados en función de la estructura de la plataforma y cubren tanto escenarios positivos (happy path) como escenarios negativos (sad path), garantizando una validación exhaustiva de la funcionalidad.</p> </br><p>Cada caso de prueba incluye:</p></p><ul><li>✅ <strong>Título del caso de prueba</strong></li><li>✅ <strong>Precondiciones necesarias</strong></li><li>✅ <strong>Prioridad de ejecución</strong></li><li>✅ <strong>Pasos detallados a seguir</strong></li><li>✅ <strong>Resultado esperado</strong></li></ul></br><p>🎯 <strong>Objetivo del proyecto</strong></p><p>Este trabajo se enfocó en identificar posibles fallos y asegurar que la experiencia de usuario en Demoblaze sea intuitiva y funcional en todos sus componentes.</p><ul><li>🔹 <strong>Herramientas utilizadas:</strong> Google Sheets</li><li>🔹 <strong>Metodología:</strong> Pruebas funcionales manuales</li><li>🔹 <strong>Bootcamp:</strong> Proyecto realizado como parte del Bootcamp de QA Funcional (FemQA) en la consultora tecnológica Basetis (Barcelona), entre mayo y septiembre de 2024.</li></ul>",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741599978/portfolio/projects_imgs/3463986_ximau8.jpg",
      tags: ["QA Projects", "Test Deliverables","Test Cases"],
      liveLink: "https://docs.google.com/spreadsheets/d/1tpu5qs1vXzQQpiZc1MBwHc03-HYfge2znpyd2wURP2g/edit?gid=927367263#gid=927367263",
      githubLink: "https://docs.google.com/spreadsheets/d/1tpu5qs1vXzQQpiZc1MBwHc03-HYfge2znpyd2wURP2g/edit?gid=927367263#gid=927367263",
    },
    {
      id: "9",
      title: "QA Artifacts: 🐞 Bug Reports de un Web Site",
      description:
        " <p>Este proyecto consistió en documentar algunos bugs encontrados en la web pública de la empresa Basetis. </br> Los informes de los bugs fueron parte de una tarea práctica dentro del Bootcamp de QA Funcional (FemQA), en el que utilicé Google Sheets como herramienta para organizar y presentar la información de manera clara y detallada.</p></br><h4>📊 Estructura del Documento de Bug Reports</h4><p>Cada reporte de bug se organizó en varias secciones clave dentro del documento:</p><ul><li><strong>Bug ID (Num ID):</strong> Identificador único del bug.</li><li><strong>Reporter:</strong> Nombre del tester que reportó el bug.</li><li><strong>Test Type:</strong> Tipo de prueba realizada (por ejemplo, funcional, de interfaz, etc.).</li><li><strong>Section/Component:</strong> Sección o componente específico de la web donde se encontró el bug.</li><li><strong>Submit Date:</strong> Fecha de envío del reporte.</li></ul></br><h4>📝 Descripción del Bug</h4><p>Cada bug se describió en dos columnas principales:</p><ul><li><strong>Bug Overview:</strong></li><ul><li><strong>URL:</strong> Enlace directo a la página donde se presenta el error.</li><li><strong>Screenshot/Video:</strong> Captura de pantalla o video que ilustra el error encontrado.</li></ul></ul></br><h4>🌐 Entorno de Pruebas</h4><p>El entorno de pruebas se detalló en cuatro columnas:</p><ul><li><strong>Device:</strong> Dispositivo utilizado (por ejemplo, móvil, escritorio, etc.).</li><li><strong>Platform:</strong> Plataforma (por ejemplo, Windows, Mac, etc.).</li><li><strong>Operating System:</strong> Sistema operativo (por ejemplo, Windows 10, macOS, etc.).</li><li><strong>Browser:</strong> Navegador web utilizado (por ejemplo, Chrome, Firefox, Safari, etc.).</li></ul></br><h4>⚙️ Detalles del Bug</h4><p>Los detalles del bug se organizaron en tres columnas:</p><ul><li><strong>Steps to reproduce:</strong> Pasos específicos para reproducir el bug.</li><li><strong>Expected result:</strong> Resultado esperado al seguir los pasos.</li><li><strong>Actual result:</strong> Resultado real que se obtiene al seguir los pasos.</li></ul></br><h4>🔍 Seguimiento del Bug</h4><p>Finalmente, se documentó el seguimiento de cada bug en tres columnas:</p><ul><li><strong>Severity:</strong> Gravedad del bug (por ejemplo, baja, media, alta).</li><li><strong>Assigned to:</strong> Persona asignada para resolver el bug.</li><li><strong>Priority:</strong> Prioridad de resolución (por ejemplo, alta, media, baja).</li></ul></br> <ul><li>🔹 Herramientas utilizadas: Google Sheets </li></li><li>🔹 Metodología: Pruebas manuales para detectar bugs en la web pública de Basetis.</li><li>🔹 Bootcamp: Proyecto realizado como parte del Bootcamp de QA Funcional (FemQA) en la consultora tecnológica Basetis (Barcelona), entre mayo y septiembre de 2024.</li></ul>",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741600588/portfolio/projects_imgs/OKP5E60_owg0m7.jpg",
      tags: ["QA Projects", "Test Deliverables","Bug Reports"],
      liveLink: "https://docs.google.com/spreadsheets/d/1KxPkZ-is4WSXyo-c25phfBujrbq1YH8ZwgymgIc3in8/edit?gid=0#gid=0",
      githubLink: "https://docs.google.com/spreadsheets/d/1KxPkZ-is4WSXyo-c25phfBujrbq1YH8ZwgymgIc3in8/edit?gid=0#gid=0",
    },

    {
      id: "10",
      title: "QA Artifacts: Test Plan para una Market-Place App",
      description:
        "<p>Este Test Plan fue el Trabajo final del Bootcamp de QA Funcional realizado por la consultora Basetis y la fundacion SURT en el marco del programa 'Donas amb Eines' para favorecer la diversidad en sectores masculinizados.</p></br> <p>El proyecto consiste en una aplicación tipo Wallapop para la compra y venta de artículos de segunda mano, y el Test Plan cubre todos los aspectos esenciales para garantizar la calidad del producto.</p></br><p><strong>🎯 Objetivo:</strong> El objetivo principal es asegurar que la aplicación sea intuitiva, funcional y segura, cubriendo pruebas funcionales, de usabilidad, rendimiento, seguridad y compatibilidad.</p></br><strong><h4>🔍 Alcance de las Pruebas</h4></strong><ul><li>Pruebas Funcionales</li><li>Pruebas de Usabilidad</li><li>Pruebas de Rendimiento</li><li>Pruebas de Seguridad</li><li>Pruebas de Compatibilidad</li></ul></br><strong><h4>📋 Metodología:</h4></strong><p>El proyecto sigue una metodología ágil con ciclos de pruebas en sprints de dos semanas. Se definen criterios de aceptación, suspensión y salida para asegurar la calidad y completitud de las pruebas.</p></br><p>Para más detalles, puedes acceder al Test Plan completo en el Live Demo ⬇️</p>",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741599217/portfolio/projects_imgs/4280794_tmn1xz.jpg",
      tags: ["QA Projects", "Test Deliverables","Test Plan"],
      liveLink: "https://www.dropbox.com/scl/fi/f59uhk2m4kisfucu73k5n/TestPlan_Oct24.pdf?rlkey=ysfxh51cp0vadqzr4mg3fgnt5&st=t9dd1jmr&dl=0",
      githubLink: "https://www.dropbox.com/scl/fi/f59uhk2m4kisfucu73k5n/TestPlan_Oct24.pdf?rlkey=ysfxh51cp0vadqzr4mg3fgnt5&st=t9dd1jmr&dl=0",
    },
    {
      id: "11",
      title: "📊 Introducción a Pruebas E2E con Playwright",
      description:
        "<p>Este repositorio contiene pruebas automatizadas de extremo a extremo (E2E) creadas con <strong>Playwright</strong> para dos aplicaciones web: <strong>FemQA-Basetis</strong> y <strong>Wallapop</strong>. El proyecto fue realizado en el contexto del <strong>Bootcamp FemQA de Basetis</strong>, donde aprendimos los conceptos básicos de las pruebas E2E y cómo utilizar Playwright como herramienta para automatizarlas.</p></br><h4>📝 Descripción de las Pruebas:</h4><ul><li><strong>Pruebas para la Web de Basetis (FemQA)</strong><ul><li><strong>Prueba 1:</strong> Verificación del título de la página</li><li><strong>Prueba 2:</strong> Comprobación de la funcionalidad de la sección FAQ</li><li><strong>Prueba 3:</strong> Verificación de la visibilidad del botón de contacto en el header</li></ul></li></br><li><strong>Pruebas para la Web de Wallapop</strong><ul><li><strong>Prueba 1:</strong> Verificación de la visibilidad de la barra de navegación</li><li><strong>Prueba 2:</strong> Comprobación de la visibilidad del logo de Wallapop</li><li><strong>Prueba 3:</strong> Verificación de la redirección al inicio al hacer clic en el logo</li><li><strong>Prueba 4:</strong> Verificación de la visibilidad y funcionalidad del botón de inicio de sesión</li><li><strong>Prueba 5:</strong> Verificación de la visibilidad de la barra de búsqueda y su funcionalidad</li><li><strong>Prueba 6:</strong> Verificación de la funcionalidad de búsqueda de productos</li></ul></li></ul></br><p>Puedes acceder al repositorio completo y explorar los detalles de las pruebas haciendo click aqui:</p>",
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741598264/portfolio/projects_imgs/playwright_qpg1br.png",
      tags: ["QA Projects","TypeScript", "Playwright","Automation"],
      liveLink: "https://github.com/Sylviall81/basic-playwright",
      githubLink: "https://github.com/Sylviall81/basic-playwright",
    }


   
  ]