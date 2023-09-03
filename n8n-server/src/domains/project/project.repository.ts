import { Injectable } from '@nestjs/common';
import to from 'await-to-js';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';

import { IProjectRepository } from './model/project.model';
import { CreateProjectDto, UpdateProjectDto } from './model/project.dto';
import { Response } from 'src/models/response.model';

@Injectable()
export class ProjectRepository implements IProjectRepository {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
  ) {}

  async createProject(project: CreateProjectDto): Promise<Response<string>> {
    const [err, response] = await to(this.projectModel.create(project));

    return {
      error: err,
      data: err ? "Can't create project" : 'OK',
      code: err ? 400 : 201,
    };
  }

  async readProject(id: string): Promise<Response<ProjectDocument>> {
    const [err, project] = await to(this.projectModel.findById(id));

    return {
      error: err,
      data: project,
      code: err ? 400 : 200,
    };
  }

  async updateProject(
    id: string,
    project: UpdateProjectDto,
  ): Promise<Response<string>> {
    const [err, _] = await to(this.projectModel.findByIdAndUpdate(id, project));

    return {
      error: err,
      data: err ? "Can't update project" : 'OK',
      code: err ? 400 : 201,
    };
  }

  async deleteProject(id: string): Promise<Response<string>> {
    const [err, _] = await to(this.projectModel.findByIdAndDelete(id));

    return {
      error: err,
      data: err ? "Can't delete project" : 'OK',
      code: err ? 400 : 201,
    };
  }
}
