export interface Workflow {
  id?: string;
  coreID?: string;
  name: string;
  projectID: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateWorkflow = Omit<Workflow, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateWorkflow = Omit<Workflow, 'id' | 'updatedAt'>;
