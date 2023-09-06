import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import to from 'await-to-js';
import { Response } from 'src/models/response.model';

import { IWorkflowRepository } from './model/workflow.model';
import { Workflow, WorkflowDocument } from './schemas/workflow.schema';
import { CreateWorkflowDto, UpdateWorkflowDto } from './model/workflow.dto';

@Injectable()
export class WorkflowRepository implements IWorkflowRepository {
  constructor(
    @InjectModel(Workflow.name) private workflowModel: Model<Workflow>,
  ) {}

  async createWorkflow(
    Workflow: CreateWorkflowDto,
  ): Promise<Response<WorkflowDocument>> {
    const [err, response] = await to(this.workflowModel.create(Workflow));

    return {
      error: err,
      data: response,
      code: err ? 400 : 201,
    };
  }

  async readWorkflow(id: string): Promise<Response<WorkflowDocument>> {
    const [err, workflow] = await to(this.workflowModel.findById(id));

    return {
      error: err,
      data: workflow,
      code: err ? 400 : 200,
    };
  }

  async readWorkflows(pID: string): Promise<Response<WorkflowDocument[]>> {
    const [err, workflow] = await to(
      this.workflowModel.find({
        projectID: pID,
      }),
    );

    return {
      error: err,
      data: workflow,
      code: err ? 400 : 200,
    };
  }

  async updateWorkflow(
    id: string,
    newWorkflow: UpdateWorkflowDto,
  ): Promise<Response<WorkflowDocument>> {
    const [err, workflow] = await to(
      this.workflowModel.findByIdAndUpdate(id, newWorkflow, {
        new: true,
      }),
    );

    return {
      error: err,
      data: workflow,
      code: err ? 400 : 201,
    };
  }

  async deleteWorkflow(id: string): Promise<Response<string>> {
    const [err, _] = await to(this.workflowModel.findByIdAndDelete(id));

    return {
      error: err,
      data: err ? "Can't delete Workflow" : 'OK',
      code: err ? 400 : 201,
    };
  }
}
