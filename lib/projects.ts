import { projects as localProjects } from '@/data/projects';

export async function getProjects() {
  // Por ahora, simplemente devuelve los datos locales
  // En el futuro, aquí podrías hacer una llamada a una API
  return localProjects;
}

export async function getProjectById(id: string) {
  const projects = await getProjects();
  return projects.find(p => p.id === id);
}