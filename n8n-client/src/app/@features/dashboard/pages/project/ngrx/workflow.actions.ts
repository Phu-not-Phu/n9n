import { createAction, props } from "@ngrx/store";
import { CreateWorkflow, UpdateWorkflow, Workflow } from "../models/workflow.model";

export const workflowActions = {
    loadWorkflows: createAction('[Workflow] Load Workflows', props<{ projectID: string }>()),
    loadWorkflowsSuccess: createAction('[Workflow] Load Workflows Success', props<{ workflows: Workflow[] }>()),
    loadWorkflowsFailure: createAction('[Workflow] Load Workflows Failure', props<{ error: string }>()),

    createWorkflow: createAction('[Workflow] Create Workflow', props<{ workflow: CreateWorkflow }>()),
    createWorkflowSuccess: createAction('[Workflow] Create Workflow Success', props<{ workflow: Workflow }>()),
    createWorkflowFailure: createAction('[Workflow] Create Workflow Failure', props<{ error: string }>()),

    updateWorkflow: createAction('[Workflow] Update Workflow', props<{ id: string, workflow: UpdateWorkflow }>()),
    updateWorkflowSuccess: createAction('[Workflow] Update Workflow Success', props<{ workflow: Workflow }>()),
    updateWorkflowFailure: createAction('[Workflow] Update Workflow Failure', props<{ error: string }>()),

    deleteWorkflow: createAction('[Workflow] Delete Workflow', props<{ id: string }>()),
    deleteWorkflowSuccess: createAction('[Workflow] Delete Workflow Success', props<{ id: string }>()),
    deleteWorkflowFailure: createAction('[Workflow] Delete Workflow Failure', props<{ error: string }>()),
}


