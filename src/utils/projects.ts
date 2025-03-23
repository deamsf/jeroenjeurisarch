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
    description: 'Tijdloze woning',
    longDescription: '# Tijdloze woning \n\nDeze prachtige, eigentijdse woning straalt rust en klasse uit dankzij de combinatie van strakke lijnen, lichte gevelstenen en grote raampartijen. De moderne architectuur wordt versterkt door een doordachte indeling die zowel functionaliteit als esthetiek in harmonie brengt. \n\nDankzij de grote glaspartijen wordt binnen en buiten op een elegante manier met elkaar verbonden. Binnenin zorgen een minimalistisch interieur, hoogwaardige afwerkingen en een neutraal kleurenpalet voor een gevoel van openheid en luxe.',
    tags: ['modern'],
    order: 2,
    isFeatured: true,
    imagePath: '/img/projects/project2/BA (1).jpg'
  },
  {
    id: 'project3',
    title: 'Woning LD',
    description: 'Woning met praktijkruimte',
    longDescription: '# Woning met praktijkruimte \n\nGezien de grote verscheidenheid aan bouwstijlen in de omgeving integreert deze woning zich met haar sober en minimalistisch uitzicht perfect in het bestaande straatbeeld. Door het toepassen van een witte buitenpleister op een bakstenen plint. Wordt een eigentijds, tijdloos en duurzaam geheel gevormd. \n\nDe functionele aanpasbaarheid in de tijd is mogelijk door de openheid van ruimtes en structuur. Interne wanden en indelingen kunnen dus in de toekomst gewijzigd worden in functie van de behoefte van de toekomstige gebruiker',
    tags: ['modern'],
    order: 3,
    isFeatured: true,
    imagePath: '/img/projects/project3/LD (1).jpg'
  },
  {
    id: 'project4',
    title: 'Woning CJ',
    description: 'Langgerekte woning met gesloten voorgevel en open achtergevel',
    longDescription: '# Langgerekte woning met gesloten voorgevel en open achtergevel \n\nDe woning ligt op een noord-georiënteerd perceel dat uitgeeft op een natuurgebied. De indeling van de woning is gericht naar de achterliggende zichten, met open grondplan en verbondenheid met bovenliggende delen. In de kern werd een centrale lichtschacht voorzien waardoor de leefruimtes doorheen de dag in licht baden. \n\nDe materialisatie bestaat uit traditionele materialen, gecombineerd met zwarte volkern-panelen. Deze zorgen voor een contrast en verbergen de carport en de toegang naar de tuin vanaf het openbaar domein. \n\nHet resultaat is een duidelijk onderscheid tussen open en gesloten delen met optimale privacy voor de bewoners.',
    tags: ['modern', 'gesloten'],
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