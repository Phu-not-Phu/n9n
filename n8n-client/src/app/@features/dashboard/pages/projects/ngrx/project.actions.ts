import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project.model';

export const projectActions = {
  loadProjects: createAction(
    '[Project] Load Projects',
    props<{ uid: string }>()
  ),
  loadProjectsSuccess: createAction(
    '[Project] Load Projects Success',
    props<{ projects: Project[] }>()
  ),
  loadProjectsFailure: createAction(
    '[Project] Load Projects Failure',
    props<{ error: Error }>()
  ),

  loadProject: createAction('[Project] Load Project', props<{ id: string }>()),
  loadProjectSuccess: createAction(
    '[Project] Load Project Success',
    props<{ project: Project }>()
  ),
  loadProjectFailure: createAction(
    '[Project] Load Project Failure',
    props<{ error: Error }>()
  ),

  createProject: createAction(
    '[Project] Create Project',
    props<{ project: Project }>()
  ),
  createProjectSuccess: createAction(
    '[Project] Create Project Success',
    props<{ project: Project }>()
  ),
  createProjectFailure: createAction(
    '[Project] Create Project Failure',
    props<{ error: Error }>()
  ),

  updateProject: createAction(
    '[Project] Update Project',
    props<{ id: string; project: Project }>()
  ),
  updateProjectSuccess: createAction(
    '[Project] Update Project Success',
    props<{ project: Project }>()
  ),
  updateProjectFailure: createAction(
    '[Project] Update Project Failure',
    props<{ error: Error }>()
  ),

  deleteProject: createAction(
    '[Project] Delete Project',
    props<{ id: string }>()
  ),
  deleteProjectSuccess: createAction(
    '[Project] Delete Project Success',
    props<{ id: string }>()
  ),
  deleteProjectFailure: createAction(
    '[Project] Delete Project Failure',
    props<{ error: Error }>()
  ),
};
