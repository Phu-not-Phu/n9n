import { Types } from 'mongoose';

export interface ProjectDTO {
  id?: string;
  name: string;
  description: string;

  createAt?: string;
  updateAt?: string;

  ownerID: Types.ObjectId;
}

export type CreateProjectDto = Omit<ProjectDTO, 'id' | 'createAt' | 'updateAt'>;
export type UpdateProjectDto = Omit<ProjectDTO, 'id' | 'createAt'>;
