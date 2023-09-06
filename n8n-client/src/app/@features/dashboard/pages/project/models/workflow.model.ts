export interface Workflow {
  id?: string;
  name: string;
  projectID: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type CreateWorkflow = Omit<Workflow, 'id' | 'createdAt' | 'updatedAt'>;
