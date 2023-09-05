import { createReducer, on } from '@ngrx/store';
import { projectActions } from './project.actions';
import { ProjectState } from './project.state';

export const initialState: ProjectState = {
  projects: [],
  selectedProject: null,

  isLoading: false,
  isLoadSuccess: false,

  isUpdating: false,
  isUpdateSuccess: false,

  error: null,
};

export const projectReducer = createReducer(
  initialState,
  on(projectActions.loadProjects, (state) => ({
    ...state,
    isLoading: true,
    isLoadSuccess: false,
    error: null,
  })),
  on(projectActions.loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects: projects === null ? [] : projects,
    isLoading: false,
    isLoadSuccess: true,
    error: null,
  })),
  on(projectActions.loadProjectsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    isLoadSuccess: false,
    error,
  })),
  on(projectActions.loadProject, (state) => ({
    ...state,
    isLoading: true,
    isLoadSuccess: false,
    error: null,
  })),
  on(projectActions.loadProjectSuccess, (state, { project }) => ({
    ...state,
    selectedProject: project,
    isLoading: false,
    isLoadSuccess: true,
    error: null,
  })),
  on(projectActions.loadProjectFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    isLoadSuccess: false,
    error,
  })),
  on(projectActions.createProject, (state) => ({
    ...state,
    isUpdating: true,
    isUpdateSuccess: false,
    error: null,
  })),
  on(projectActions.createProjectSuccess, (state, { project }) => ({
    ...state,
    projects: [...state.projects!, project],
    isUpdating: false,
    isUpdateSuccess: true,
    error: null,
  })),
  on(projectActions.createProjectFailure, (state, { error }) => ({
    ...state,
    isUpdating: false,
    isUpdateSuccess: false,
    error,
  })),
  on(projectActions.updateProject, (state) => ({
    ...state,
    isUpdating: true,
    isUpdateSuccess: false,
    error: null,
  })),
  on(projectActions.updateProjectSuccess, (state, { project }) => ({
    ...state,
    projects: state.projects!.map((p) => (p._id === project._id ? project : p)),
    selectedProject: project,
    isUpdating: false,
    isUpdateSuccess: true,
    error: null,
  })),
  on(projectActions.updateProjectFailure, (state, { error }) => ({
    ...state,
    isUpdating: false,
    isUpdateSuccess: false,
    error,
  })),
  on(projectActions.deleteProject, (state) => ({
    ...state,
    isUpdating: true,
    isUpdateSuccess: false,
    error: null,
  })),
  on(projectActions.deleteProjectSuccess, (state, { id }) => ({
    ...state,
    projects: state.projects!.filter((p) => p._id !== id),
    isUpdating: false,
    isUpdateSuccess: true,
    error: null,
  })),
  on(projectActions.deleteProjectFailure, (state, { error }) => ({
    ...state,
    isUpdating: false,
    isUpdateSuccess: false,
    error,
  }))
);
