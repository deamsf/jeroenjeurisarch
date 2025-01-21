export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Frank D',
    role: 'Bouwheer',
    quote: 'Jeroens moderne stijl sprak ons meteen aan. Hij denkt mee en is actief betrokken in het project.',
  },
  {
    name: 'Gregory F',
    role: 'Bouwheer',
    quote: 'Ik kan Jeroen alleen maar ten zeerste aanbevelen. Zeer vriendelijke en professionele architect die zijn vak zeer goed kent.',
  },
  {
    name: 'Koen R',
    role: 'Bouwheer',
    quote: 'Heel duidelijk en interessant gesprek gehad omtrent onze mogelijke verbouwing. Jeroen denkt mee na en zit op dezelfde golflengte!',
  },
  {
    name: 'Peter',
    role: 'Bouwheer',
    quote: 'Jeroen durft meedenken en duwt niet zijn eigen visie door. Aangenaam om mee samen te werken!',
  },
];
