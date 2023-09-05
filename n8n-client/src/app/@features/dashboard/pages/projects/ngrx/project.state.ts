import { Project } from '../models/project.model';

export interface ProjectState {
  projects: Project[] | null;
  selectedProject: Project | null;

  isLoading: boolean;
  isLoadSuccess: boolean;

  isUpdating: boolean;
  isUpdateSuccess: boolean;

  error: Error | null;
}
