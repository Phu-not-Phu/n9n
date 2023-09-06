import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { projectActions } from './project.actions';

@Injectable()
export class ProjectEffects {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectActions.loadProjects),
      switchMap((actions) =>
        this.projectService.getProjects(actions.uid).pipe(
          map((projects: Project[]) =>
            projectActions.loadProjectsSuccess({ projects })
          ),
          catchError((error) =>
            of(projectActions.loadProjectsFailure({ error }))
          )
        )
      )
    )
  );

  loadProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectActions.loadProject),
      switchMap(({ id }) =>
        this.projectService.getProject(id).pipe(
          map((project: Project) =>
            projectActions.loadProjectSuccess({ project })
          ),
          catchError((error) =>
            of(projectActions.loadProjectFailure({ error }))
          )
        )
      )
    )
  );

  createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectActions.createProject),
      switchMap(({ project }) =>
        this.projectService.createProject(project).pipe(
          map((project: Project) =>
            projectActions.createProjectSuccess({ project })
          ),
          catchError((error) =>
            of(projectActions.createProjectFailure({ error }))
          )
        )
      )
    )
  );

  updateProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectActions.updateProject),
      switchMap(({ id, project }) =>
        this.projectService.updateProject(id, project).pipe(
          map((project: Project) =>
            projectActions.updateProjectSuccess({ project })
          ),
          catchError((error) =>
            of(projectActions.updateProjectFailure({ error }))
          )
        )
      )
    )
  );

  deleteProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectActions.deleteProject),
      switchMap(({ id }) =>
        this.projectService.deleteProject(id).pipe(
          map(() => projectActions.deleteProjectSuccess({ id })),
          catchError((error) =>
            of(projectActions.deleteProjectFailure({ error }))
          )
        )
      )
    )
  );
}
