import { IProyectsInfo } from '../components/ProyectsData/ProyectsData';

export const proyectsInfo: IProyectsInfo[] = [
    {
        id: 1,
        date: 'Mar 2022 - Dic 2022',
        img: { src: '/cars-booking.gif', alt: 'gif pagina web' },
        title: 'aplicación web',
        company: 'Digital House',
        description:
            '"Análisis y construcción de la arquitectura de una aplicación, utilizando React y Sass para el desarrollo del frontend. Además, he implementado pruebas unitarias para garantizar su calidad y funcionalidad. Descubre una aplicación bien estructurada y de alta calidad que ofrece una experiencia de usuario excepcional."',
        technologies: ['react', 'sass', 'api-rest', 'spring boot', 'mysql'],
        github: 'https://github.com/jesyn/carsbooking-frontend',
        url: '',
    },
    {
        id: 2,
        date: 'Feb 2023 - Mayo 2023',
        img: { src: '/github-search.gif', alt: 'gif pagina web' },
        title: 'buscador usuarios github',
        company: 'Frontend mentor',
        description:
            '"Buscador de usuarios de Github utilizando React y el hook UseReducer para gestionar el estado de la aplicación. Con esta herramienta, podrás buscar y visualizar información de usuarios, así como acceder al historial de búsquedas realizadas."',
        technologies: ['react', 'api-rest'],
        github: 'https://github.com/jesyn/github_user_search',
        url: 'https://github-user-search-jesyn.vercel.app/',
    },
    {
        id: 3,
        date: 'Feb 2023 - Mayo 2023',
        img: { src: '/rick-and-morty.gif', alt: 'gif pagina web' },
        title: 'rick and morty',
        company: 'Digital House',
        description:
            '"Página web que presenta una colección de personajes de la popular serie "Rick and Morty", utilizando React y Typescript. Gracias a las peticiones por API-Rest, podrás realizar búsquedas de personajes y agregarlos a una lista de favoritos personalizada."',
        technologies: ['react', 'redux', 'typescript', 'api-rest', 'jsdoc'],
        github: 'https://github.com/jesyn/Rick-and-Morty',
        url: 'https://rick-and-morty-jesyn.vercel.app/',
    },
    {
        id: 4,
        date: 'May 2023 - Jun 2023',
        img: { src: '/porfolio10.gif', alt: 'imagen pagina web' },
        title: 'porfolio',
        company: 'Freelancer',
        description:
            '"Sitio web personal utilizando Gatsby, donde podrás conocer en detalle mi información personal, descargar mi CV y explorar mi experiencia profesional. Descubre quién soy, mi trayectoria y habilidades en esta página web personalizada."',
        technologies: ['gatsby', 'react', 'typescript', 'sass'],
        github: 'https://github.com/jesyn/jm-portfolio',
        url: 'https://jm-portfolio-85f3gfx8w-jesyn.vercel.app/',
    },
    {
        id: 5,
        date: 'Ago 2023 - Sep 2023',
        img: { src: '/comics-online.gif', alt: 'gif pagina web' },
        title: 'Comics online ',
        company: 'Digital House',
        description:
            '"Tienda de cómics en línea, donde podrás encuentrar detalles del mismo junto con sus personajes y un formulario de compra por pasos."',
        technologies: [
            'Next.js',
            'yup',
            'Material-ui',
            'Cipress',
            'Hook form',
            'TypeScript',
        ],
        github: 'https://github.com/jesyn/ctd-esp-fe3-final',
        url: 'https://comics-online.vercel.app/',
    },
    {
        id: 6,
        date: 'May 2023 - actualidad',
        img: { src: '/logo-pizza.png', alt: 'logo pizzería' },
        title: 'pizzería rémolo',
        company: 'Id for ideas',
        description:
            '"Análisis y construcción de la arquitectura de una aplicación para el armado y pedido de pizzas. Para el desarrollo del frontend, he utilizado las tecnologías Next y Tailwind, que me han permitido crear una interfaz de usuario amigable y atractiva. Descubre una forma fácil y personalizada de armar tu pizza y hacer tu pedido en esta aplicación única."',
        technologies: [
            'nextjs',
            'tailwind',
            'typescript',
            'design system',
            'storybook',
            'jest',
            'testing-library',
            'husky',
        ],
        github: '',
        url: '',
        underConstruction: true,
    },
];
