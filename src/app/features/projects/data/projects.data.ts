export interface PortfolioProject {
  id: string;
  title: string;
  descriptionKey: string;
  technologies: string[];
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
  statusKey?: string;
}

export const projects: PortfolioProject[] = [
  {
    id: 'chat-app',
    title: 'Chat App',
    descriptionKey: 'projects.items.chatApp.description',
    technologies: ['Angular', 'Ionic', 'TypeScript'],
    images: [
      '/projects/chat-app/login.png',
      '/projects/chat-app/lista-chats.png',
      '/projects/chat-app/chat.png',
    ],
    githubUrl: 'https://github.com/DDDBBBPPP/chat-app',
    demoUrl: 'https://dddbbbppp.github.io/chat-app/',
  },
  {
    id: 'gifs-app',
    title: 'GIFs App',
    descriptionKey: 'projects.items.gifsApp.description',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Giphy API'],
    images: ['/projects/gifs-app/main.jpg', '/projects/gifs-app/search.jpg'],
    githubUrl: 'https://github.com/DDDBBBPPP/gifs-app',
    demoUrl: 'https://dddbbbppp.github.io/gifs-app/',
  },
  {
    id: 'gestor-hotelero',
    title: 'Gestor Hotelero · BookTech',
    descriptionKey: 'projects.items.hotel.description',
    technologies: ['PHP', 'Twig', 'MySQL', 'Docker'],
    images: [
      '/projects/gestor-hotelero/habitaciones.png',
      '/projects/gestor-hotelero/reservas.png',
    ],
    githubUrl: 'https://github.com/DDDBBBPPP/DavidBellon-php',
  },
  {
    id: 'gkonect',
    title: 'GKonect',
    descriptionKey: 'projects.items.gkonect.description',
    technologies: ['Angular', 'Laravel'],
    images: ['/projects/gkonect/ggc-escritorio.png', '/projects/gkonect/ggc-movil.png'],
    statusKey: 'projects.inDevelopment',
  },
];
