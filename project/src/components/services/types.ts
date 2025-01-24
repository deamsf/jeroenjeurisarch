export interface ServiceDetail {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: 'Search' | 'Crown' | 'Sparkles';
  description: string;
  details: ServiceDetail[];
}