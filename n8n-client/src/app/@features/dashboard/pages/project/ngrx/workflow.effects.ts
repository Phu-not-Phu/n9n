import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { WorkflowService } from "../services/workflow.service";
import { workflowActions } from "./workflow.actions";

@Injectable()
export class WorkflowEffects {
    constructor(
        private actions$: Actions,
        private workflowService: WorkflowService
    ) { }

    loadWorkflows$ = createEffect(() => this.actions$.pipe(
        ofType(workflowActions.loadWorkflows),
        switchMap(action => this.workflowService.getWorkflows(action.projectID).pipe(
            map(workflows => workflowActions.loadWorkflowsSuccess({ workflows })),
            catchError(error => of(workflowActions.loadWorkflowsFailure({ error })))
        ))
    ));

    createWorkflow$ = createEffect(() => this.actions$.pipe(
        ofType(workflowActions.createWorkflow),
        switchMap(action => this.workflowService.createWorkflow(action.workflow).pipe(
            map(workflow => workflowActions.createWorkflowSuccess({ workflow })),
            catchError(error => of(workflowActions.createWorkflowFailure({ error })))
        ))
    ));

    updateWorkflow$ = createEffect(() => this.actions$.pipe(
        ofType(workflowActions.updateWorkflow),
        switchMap(action => this.workflowService.updateWorkflow(action.id, action.workflow).pipe(
            map(workflow => workflowActions.updateWorkflowSuccess({ workflow })),
            catchError(error => of(workflowActions.updateWorkflowFailure({ error })))
        ))
    ));

    deleteWorkflow$ = createEffect(() => this.actions$.pipe(
        ofType(workflowActions.deleteWorkflow),
        switchMap(action => this.workflowService.deleteWorkflow(action.id).pipe(
            map(() => workflowActions.deleteWorkflowSuccess({ id: action.id })),
            catchError(error => of(workflowActions.deleteWorkflowFailure({ error })))
        ))
    ));
}