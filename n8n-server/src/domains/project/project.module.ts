import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Project, ProjectSchema } from './schemas/project.schema';

import { ProjectController } from './project.controller';

import { IProjectRepository, IProjectService } from './model/project.model';
import { ProjectService } from './project.service';
import { ProjectRepository } from './project.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    UsersModule,
  ],
  controllers: [ProjectController],
  providers: [
    {
      provide: IProjectService,
      useClass: ProjectService,
    },
    {
      provide: IProjectRepository,
      useClass: ProjectRepository,
    },
  ],
})
export class ProjectModule {}
