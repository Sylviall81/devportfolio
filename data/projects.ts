 
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
      image: "https://res.cloudinary.com/dsesprxhl/image/upload/v1741119494/portfolio/projects_imgs/BookClub3.jpg",
      tags: ["PHP", "MySQL", "Clever Cloud"],
      liveLink: "https://app-828c7e83-e0b0-41c5-855f-c3cf129aecf1.cleverapps.io/public/",
      githubLink: "https://github.com/Sylviall81/bookclub_php",
    },
    {
      id: "2",
      title: "Start Up site",
      description: "Sitio web responsive para una tienda online con carrito de compras y pasarela de pagos.",
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

   
  ]