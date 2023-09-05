import { Module } from '@nestjs/common';

import { WorkflowController } from './workflow.controller';

import {
  IWorkflowService,
  IWorkflowRepository,
  IWorkflowCoreRepository,
} from './model/workflow.model';
import { WorkflowService } from './workflow.service';
import { WorkflowRepository } from './workflow.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Workflow, WorkflowSchema } from './schemas/workflow.schema';
import { WorkflowCoreRepository } from './core.repository';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Workflow.name, schema: WorkflowSchema, collection: 'workflows' },
    ]),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
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
    {
      provide: IWorkflowCoreRepository,
      useClass: WorkflowCoreRepository,
    },
  ],
})
export class WorkflowModule {}
