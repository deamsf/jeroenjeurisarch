import { Project } from '../types/project';

export const projectsData = [
  {
    id: 'project1',
    title: 'Woning DH',
    description: 'Hedendaagse monoliet',
    longDescription: '# Hedendaagse monoliet\n\nIn deze woning werd het traditioneel programma van een klassieke eengezinswoning doordacht omgevormd tot een ontwerp waarin zuiverheid van ruimte, licht en rust een kwaliteitsvolle beleving vormen.\n\n De woning brengt de privacy tussen de omgeving en positieve elementen in de omgeving zorgvuldig in balans. De leefruimte op het gelijkvloers geeft uit op de achterliggende tuin met groenvelden. Aangevuld met een overdekt terras kunnen de bewoners de grens tussen binnen en buiten over alle seizoenen laten vervagen.\n\n De nachtfuncties op verdieping ondersteunen het cocoonen met juiste perforaties in de massieve buitengevels. De rustruimte omvat in de circulatie zijn hier aangevuld met een claustrum raam als geschakeerd en veranderlijk lichtelement.',
    tags: ['modern'],
    order: 1,
    isFeatured: true,
    imagePath: '/img/projects/project1/DH (1).jpg'
  },
  {
    id: 'project2',
    title: 'Woning BA',
    description: 'Corporate headquarters renovation',
    longDescription: '# Office Complex Renovation\n\nA complete transformation of an existing office building into a modern workspace.',
    tags: ['business', 'renovation'],
    order: 2,
    isFeatured: true,
    imagePath: '/img/projects/project2/BA (1).jpg'
  },
  {
    id: 'project3',
    title: 'Woning LD',
    description: 'Modern city living spaces',
    longDescription: '# Urban Living Redefined\n\nA collection of premium city apartments that blend style with functionality.',
    tags: ['modern', 'business'],
    order: 3,
    isFeatured: true,
    imagePath: '/img/projects/project3/LD (1).jpg'
  },
  {
    id: 'project4',
    title: 'Woning CJ',
    description: 'Just testing',
    longDescription: '# Pop\n\nA cxxxxxxxxx.',
    tags: ['modern', 'business'],
    order: 4,
    isFeatured: true,
    imagePath: '/img/projects/project4/CJ (1).jpg'
  }
];

const projectImages = {
  project1: [
    '/img/projects/project1/DH (1).jpg',
    '/img/projects/project1/DH (2).jpg',
    '/img/projects/project1/DH (3).jpg',
    '/img/projects/project1/DH (4).jpg',
    '/img/projects/project1/DH (5).jpg'
  ],
  project2: [
    '/img/projects/project2/BA (1).jpg',
    '/img/projects/project2/BA (2).jpg',
    '/img/projects/project2/BA (3).jpg',
    '/img/projects/project2/BA (4).jpg',
    '/img/projects/project2/BA (5).jpg'
  ],
  project3: [
    '/img/projects/project3/LD (1).jpg',
    '/img/projects/project3/LD (2).jpg',
    '/img/projects/project3/LD (3).jpg',
    '/img/projects/project3/LD (4).jpg',
    '/img/projects/project3/LD (5).jpg'
  ],
  project4: [
    '/img/projects/project4/CJ (1).jpg',
    '/img/projects/project4/CJ (2).jpg',
    '/img/projects/project4/CJ (3).jpg',
    '/img/projects/project4/CJ (4).jpg',
    '/img/projects/project4/CJ (5).jpg'
  ]
};

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}

export function getProjectImages(projectId: string): string[] {
  return projectImages[projectId as keyof typeof projectImages] || [];
}