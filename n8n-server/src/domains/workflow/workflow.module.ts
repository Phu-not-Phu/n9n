import { Module } from '@nestjs/common';

import { WorkflowController } from './workflow.controller';

import { IWorkflowService, IWorkflowRepository } from './model/workflow.model';
import { WorkflowService } from './workflow.service';
import { WorkflowRepository } from './workflow.repository';

@Module({
  imports: [],
  controllers: [WorkflowController],
  providers: [
    {
      provide: IWorkflowService,
      useClass: WorkflowService,
    },
    {
      provide: IWorkflowRepository,
      useClass: WorkflowRepository,
    },
  ],
})
export class WorkflowModule {}
