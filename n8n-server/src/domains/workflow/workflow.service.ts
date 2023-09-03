import { Injectable } from '@nestjs/common';
import { IWorkflowService } from './model/workflow.model';

@Injectable()
export class WorkflowService implements IWorkflowService {}
