import { Inject, Injectable } from '@nestjs/common';
import to from 'await-to-js';

import { Response } from 'src/models/response.model';
import { IProjectRepository, IProjectService } from './model/project.model';
import { CreateProjectDto, UpdateProjectDto } from './model/project.dto';
import { ProjectDocument } from './schemas/project.schema';

@Injectable()
export class ProjectService implements IProjectService {
  constructor(
    @Inject(IProjectRepository) private projectRepository: IProjectRepository,
  ) {}

  async createProject(
    project: CreateProjectDto,
  ): Promise<Response<ProjectDocument>> {
    return await this.projectRepository.createProject(project);
  }

  async readProject(id: string): Promise<Response<ProjectDocument>> {
    return await this.projectRepository.readProject(id);
  }

  async readProjects(uid: string): Promise<Response<ProjectDocument[]>> {
    return await this.projectRepository.readProjects(uid);
  }

  async updateProject(
    id: string,
    project: UpdateProjectDto,
  ): Promise<Response<string>> {
    project.updateAt = new Date().toISOString();
    return await this.projectRepository.updateProject(id, project);
  }

  async deleteProject(id: string): Promise<Response<string>> {
    return await this.projectRepository.deleteProject(id);
  }
}
