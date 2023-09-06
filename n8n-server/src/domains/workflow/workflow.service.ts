import { Inject, Injectable } from '@nestjs/common';

import { Response } from 'src/models/response.model';

import {
  IWorkflowCoreRepository,
  IWorkflowRepository,
  IWorkflowService,
} from './model/workflow.model';
import { WorkflowDocument } from './schemas/workflow.schema';
import { CreateWorkflowDto, UpdateWorkflowDto } from './model/workflow.dto';

import { lastValueFrom } from 'rxjs';

@Injectable()
export class WorkflowService implements IWorkflowService {
  constructor(
    @Inject(IWorkflowRepository)
    private workflowRepository: IWorkflowRepository,
    @Inject(IWorkflowCoreRepository)
    private workflowCoreRepository: IWorkflowCoreRepository,
  ) { }

  async createWorkflow(
    workflow: CreateWorkflowDto,
  ): Promise<Response<WorkflowDocument>> {
    const coreWorkflow = await lastValueFrom(
      this.workflowCoreRepository.createWorkflow(workflow.name),
    );

    if (coreWorkflow.data.id) {
      workflow.coreID = coreWorkflow.data.id;
    } else {
      return {
        code: 500,
        data: null,
        error: coreWorkflow.data,
      };
    }

    return await this.workflowRepository.createWorkflow(workflow);
  }

  async readWorkflow(id: string): Promise<Response<WorkflowDocument>> {
    return await this.workflowRepository.readWorkflow(id);
  }

  async readWorkflows(pid: string): Promise<Response<WorkflowDocument[]>> {
    return await this.workflowRepository.readWorkflows(pid);
  }

  async updateWorkflow(
    id: string,
    Workflow: UpdateWorkflowDto,
  ): Promise<Response<WorkflowDocument>> {
    Workflow.updateAt = new Date().toISOString();
    return await this.workflowRepository.updateWorkflow(id, Workflow);
  }

  async deleteWorkflow(id: string): Promise<Response<string>> {
    return await this.workflowRepository.deleteWorkflow(id);
  }
}
