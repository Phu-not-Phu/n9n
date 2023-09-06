import { Workflow } from "../models/workflow.model";

export interface WorkflowState {
    workflows: Workflow[];

    isLoading: boolean;
    isLoadSuccess: boolean;

    isUpdating: boolean;
    isUpdateSuccess: boolean;

    error: string;
}