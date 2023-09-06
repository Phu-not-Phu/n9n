import { NodeModel } from './node.model';

export interface Workflow {
  id?: string;
  name: string;
  active: boolean;

  createdAt?: string;
  updatedAt?: string;

  nodes: NodeModel[];
  connections: any[];

  settings: WorkflowSettings;
  staticData: any;
  tags: Tag[];
}

export interface WorkflowSettings {
  saveExecutionProgress: boolean;
  saveManualExecutions: boolean;
  saveDataErrorExecution: 'none' | 'all';
  saveDataSuccessExecution: 'none' | 'all';
  executionTimeout: number;
  errorWorkflow: string;
  timezone: string;
}

export interface Tag {
  id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
}
