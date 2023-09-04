import { Injectable } from '@nestjs/common';

import { IWorkflowRepository } from './model/workflow.model';

@Injectable()
export class WorkflowRepository implements IWorkflowRepository {}
