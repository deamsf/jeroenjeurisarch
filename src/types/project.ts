export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imagePath: string;
  tags: string[];
  order: number;
  isFeatured: boolean;
}