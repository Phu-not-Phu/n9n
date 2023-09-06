import { Response } from 'src/models/response.model';
import { WorkflowDocument } from '../schemas/workflow.schema';
import { CreateWorkflowDto, UpdateWorkflowDto } from './workflow.dto';
import { Observable } from 'rxjs';

export interface Workflow { }

export interface IWorkflowService {
  createWorkflow(
    workflow: CreateWorkflowDto,
  ): Promise<Response<WorkflowDocument>>;
  readWorkflow(id: string): Promise<Response<WorkflowDocument>>;
  readWorkflows(pid: string): Promise<Response<WorkflowDocument[]>>;
  updateWorkflow(
    id: string,
    workflow: UpdateWorkflowDto,
  ): Promise<Response<WorkflowDocument>>;
  deleteWorkflow(id: string): Promise<Response<string>>;
}

export interface IWorkflowRepository {
  createWorkflow(
    workflow: CreateWorkflowDto,
  ): Promise<Response<WorkflowDocument>>;
  readWorkflow(id: string): Promise<Response<WorkflowDocument>>;
  readWorkflows(pID: string): Promise<Response<WorkflowDocument[]>>;
  updateWorkflow(
    id: string,
    workflow: UpdateWorkflowDto,
  ): Promise<Response<WorkflowDocument>>;
  deleteWorkflow(id: string): Promise<Response<string>>;
}

export interface IWorkflowCoreRepository {
  createWorkflow(name: string, tags?: Array<string>): Observable<any>;
}

export const IWorkflowService = Symbol('IWorkflowService');
export const IWorkflowRepository = Symbol('IWorkflowRepository');
export const IWorkflowCoreRepository = Symbol('IWorkflowCoreRepository');
