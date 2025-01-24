import { projectsData } from './projects';

export async function getAllProjectImages(): Promise<string[]> {
  return projectsData.map(project => project.imagePath);
}