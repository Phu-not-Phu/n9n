import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { WorkflowModule } from './workflow/workflow.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [UsersModule, ProjectModule, WorkflowModule],
  exports: [UsersModule, ProjectModule, WorkflowModule],
})
export class ApiModule {}
