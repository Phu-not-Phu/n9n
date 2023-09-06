import { Types } from "mongoose";

export interface WorkflowDTO {
  id: string;
  coreID: string;
  name: string;
  createAt: string;
  updateAt: string;
  tags: Array<string>;
  projectID: Types.ObjectId;
}

export type CreateWorkflowDto = Omit<
  WorkflowDTO,
  'id' | 'createAt' | 'updateAt'
>;
export type UpdateWorkflowDto = Omit<WorkflowDTO, 'id' | 'createAt'>;

//CORE

export interface WorkflowCoreDTO {
  id?: string;
  name: string;
  nodes: Array<any>;
  connections: {};
  settings: WorkflowSettings;
  staticData?: {};
}

export interface WorkflowSettings {
  saveExecutionProgress: boolean;
  saveManualExecutions: boolean;
  saveDataErrorExecution: "all" | "none";
  saveDataSuccessExecution: "all" | "none";
  executionTimeout: number;
  errorWorkflow: string;
  timezone: string;
}

export const DEFAULT_SETTINGS: WorkflowSettings = {
  saveExecutionProgress: true,
  saveManualExecutions: true,
  saveDataErrorExecution: 'all',
  saveDataSuccessExecution: 'all',
  executionTimeout: 3600,
  errorWorkflow: '',
  timezone: 'Asia/Ho_Chi_Minh',
};
