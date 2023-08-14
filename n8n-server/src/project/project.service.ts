import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import {Project, ProjectDocument} from './schemas/project.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectService {
  constructor(@InjectModel(Project.name) private projectModel: Model<Project>){}

  async create(createProjectDto: CreateProjectDto): Promise<ProjectDocument> {
    createProjectDto.createAt = new Date();
    createProjectDto.updateAt = new Date();
    createProjectDto.isDeleted = false;
    const creatProject = await this.projectModel.create(createProjectDto);
    return creatProject.save();
  }

  async findAll(): Promise<ProjectDocument[]> {
    const data = await this.projectModel.find().exec();
    return data;
  }

  async findOne(id: string): Promise<Project> {
    const findId = await this.projectModel.findOne({id: id}).exec();
    return findId;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto): Promise<ProjectDocument> {
    updateProjectDto.updateAt = new Date();
    const updateProject = await this.projectModel.findOneAndUpdate({id: id}, updateProjectDto, {new: true}).exec();
    return updateProject;
  }

  async remove(id: string, updateProjectDto: UpdateProjectDto): Promise<ProjectDocument> {
    updateProjectDto.updateAt = new Date();
    updateProjectDto.isDeleted = true;
    const deleteProject = await this.projectModel.findOneAndDelete({id: id}, updateProjectDto).exec();
    return deleteProject;
  }
}
