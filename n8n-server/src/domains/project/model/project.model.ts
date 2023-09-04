import { CreateProjectDto, UpdateProjectDto } from './project.dto';
import { ProjectDocument } from '../schemas/project.schema';
import { Response } from 'src/models/response.model';

export interface IProjectService {
  createProject(project: CreateProjectDto): Promise<Response<string>>;
  readProject(id: string): Promise<Response<ProjectDocument>>;
  updateProject(
    id: string,
    project: UpdateProjectDto,
  ): Promise<Response<string>>;
  deleteProject(id: string): Promise<Response<string>>;
}

export interface IProjectRepository {
  createProject(project: CreateProjectDto): Promise<Response<string>>;
  readProject(id: string): Promise<Response<ProjectDocument>>;
  updateProject(
    id: string,
    project: UpdateProjectDto,
  ): Promise<Response<string>>;
  deleteProject(id: string): Promise<Response<string>>;
}

export const IProjectService = Symbol('IProjectService');
export const IProjectRepository = Symbol('IProjectRepository');
