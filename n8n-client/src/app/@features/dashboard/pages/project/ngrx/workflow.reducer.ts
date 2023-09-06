import { createReducer, on } from "@ngrx/store";
import { Workflow } from "../models/workflow.model";
import { workflowActions } from "./workflow.actions";
import { WorkflowState } from "./workflow.state";

export const initialState: WorkflowState = {
    workflows: [],
    isLoading: false,
    isLoadSuccess: false,
    isUpdating: false,
    isUpdateSuccess: false,
    error: ''
}

export const workflowReducer = createReducer(
    initialState,
    on(workflowActions.loadWorkflows, (state) => ({
        ...state,
        isLoading: true,
        isLoadSuccess: false,
        error: ''
    })),
    on(workflowActions.loadWorkflowsSuccess, (state, { workflows }) => ({
        ...state,
        workflows,
        isLoading: false,
        isLoadSuccess: true,
        error: ''
    })),
    on(workflowActions.loadWorkflowsFailure, (state, { error }) => ({
        ...state,
        isLoading: false,
        isLoadSuccess: false,
        error
    })),
    on(workflowActions.createWorkflow, (state) => ({
        ...state,
        isUpdating: true,
        isUpdateSuccess: false,
        error: ''
    })),
    on(workflowActions.createWorkflowSuccess, (state, { workflow }) => ({
        ...state,
        workflows: [...state.workflows, workflow],
        isUpdating: false,
        isUpdateSuccess: true,
        error: ''
    })),
    on(workflowActions.createWorkflowFailure, (state, { error }) => ({
        ...state,
        isUpdating: false,
        isUpdateSuccess: false,
        error
    })),
    on(workflowActions.updateWorkflow, (state) => ({
        ...state,
        isUpdating: true,
        isUpdateSuccess: false,
        error: ''
    })),
    on(workflowActions.updateWorkflowSuccess, (state, { workflow }) => ({
        ...state,
        workflows: state.workflows.map(w => w.id === workflow.id ? workflow : w),
        isUpdating: false,
        isUpdateSuccess: true,
        error: ''
    })),
    on(workflowActions.updateWorkflowFailure, (state, { error }) => ({
        ...state,
        isUpdating: false,
        isUpdateSuccess: false,
        error
    })),
    on(workflowActions.deleteWorkflow, (state) => ({
        ...state,
        isUpdating: true,
        isUpdateSuccess: false,
        error: ''
    })),
    on(workflowActions.deleteWorkflowSuccess, (state, { id }) => ({
        ...state,
        workflows: state.workflows.filter(w => w.id !== id),
        isUpdating: false,
        isUpdateSuccess: true,
        error: ''
    })),
    on(workflowActions.deleteWorkflowFailure, (state, { error }) => ({
        ...state,
        isUpdating: false,
        isUpdateSuccess: false,
        error
    })),
)

