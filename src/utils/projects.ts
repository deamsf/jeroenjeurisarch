import { Project } from '../types/project';

export const projectsData = [
  {
    id: 'project1',
    title: 'Modern Villa',
    description: 'Contemporary residential project',
    longDescription: '# Modern Villa Project\n\nThis stunning modern villa combines minimalist design with sustainable living.',
    tags: ['modern', 'countryside'],
    order: 1,
    isFeatured: true,
    imagePath: '/img/projects/project1/joakim-nadell-K67sBVqLLuw-unsplash.jpg'
  },
  {
    id: 'project2',
    title: 'Office Complex',
    description: 'Corporate headquarters renovation',
    longDescription: '# Office Complex Renovation\n\nA complete transformation of an existing office building into a modern workspace.',
    tags: ['business', 'renovation'],
    order: 2,
    isFeatured: true,
    imagePath: '/img/projects/project2/ricardo-gomez-angel-PzYiCWOHtfU-unsplash.jpg'
  },
  {
    id: 'project3',
    title: 'Urban Apartments',
    description: 'Modern city living spaces',
    longDescription: '# Urban Living Redefined\n\nA collection of premium city apartments that blend style with functionality.',
    tags: ['modern', 'business'],
    order: 3,
    isFeatured: true,
    imagePath: '/img/projects/project3/simone-hutsch-ItvVUpgac0o-unsplash.jpg'
  },
  {
    id: 'project4',
    title: 'Some other Building',
    description: 'Just testing',
    longDescription: '# Pop\n\nA cxxxxxxxxx.',
    tags: ['modern', 'business'],
    order: 4,
    isFeatured: true,
    imagePath: '/img/projects/project4/joel-filipe-asL4k-U3I_s-unsplash.jpg'
  }
];

const projectImages = {
  project1: [
    '/img/projects/project1/joakim-nadell-K67sBVqLLuw-unsplash.jpg',
    '/img/projects/project1/mihail-ribkin-VjmlDjePHjE-unsplash.jpg',
    '/img/projects/project1/howard-bouchevereau-042Srn0-82o-unsplash.jpg'
  ],
  project2: [
    '/img/projects/project2/ricardo-gomez-angel-PzYiCWOHtfU-unsplash.jpg'
  ],
  project3: [
    '/img/projects/project3/simone-hutsch-ItvVUpgac0o-unsplash.jpg',
    '/img/projects/project3/simone-hutsch-aBLhscQZj0A-unsplash.jpg'
  ],
  project4: [
    '/img/projects/project4/joel-filipe-asL4k-U3I_s-unsplash.jpg',
    '/img/projects/project4/anders-jilden-Sc5RKXLBjGg-unsplash.jpg',
    '/img/projects/project4/nick-wessaert-JI01fn0U7Cg-unsplash.jpg'
  ]
};

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}

export function getProjectImages(projectId: string): string[] {
  return projectImages[projectId as keyof typeof projectImages] || [];
}