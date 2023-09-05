export interface WorkflowDTO {
  id: string;
  coreID: string;
  name: string;
  createAt: string;
  updateAt: string;
  tags: Array<string>;
  projectID: string;
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
  nodes: [];
  connections: [];
  active: boolean;
  settings: WorkflowSettings;
}

export interface WorkflowSettings {
  saveExecutionProgress: boolean;
  saveManualExecutions: boolean;
  saveDataErrorExecution: string;
  saveDataSuccessExecution: string;
  executionTimeout: number;
  timeZone: string;
}

export const DEFAULT_SETTINGS: WorkflowSettings = {
  saveExecutionProgress: false,
  saveManualExecutions: false,
  saveDataErrorExecution: 'all',
  saveDataSuccessExecution: 'all',
  executionTimeout: 3600,
  timeZone: 'Asia/Ho_Chi_Minh',
};
