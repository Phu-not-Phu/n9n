import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { WorkflowModule } from './workflow/workflow.module';
import { ProjectModule } from './project/project.module';
import { NodesModule } from './types/nodes/nodes.module';

@Module({
  imports: [UsersModule, ProjectModule, WorkflowModule, NodesModule],
  exports: [UsersModule, ProjectModule, WorkflowModule, NodesModule],
})
export class ApiModule {}
