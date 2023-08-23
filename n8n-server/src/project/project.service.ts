import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateWorkflowDto } from './dto/create-workflow.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';
import { Workflow, WorkflowDocument } from './schemas/workflow.schema';
import { Project, ProjectDocument } from './schemas/project.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { timeStamp } from 'console';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>,
    @InjectModel(Workflow.name) private workflowModel: Model<Workflow>,
  ) {}

  //------------------Project------------------
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
    const findId = await this.projectModel.findOne({ id: id }).exec();
    return findId;
  }

  async update(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectDocument> {
    updateProjectDto.updateAt = new Date();
    const updateProject = await this.projectModel
      .findOneAndUpdate({ id: id }, updateProjectDto, { new: true })
      .exec();
    return updateProject;
  }

  async remove(
    id: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectDocument> {
    updateProjectDto.updateAt = new Date();
    updateProjectDto.isDeleted = true;
    await this.removeAllWorkflow(new UpdateWorkflowDto());
    const deleteProject = await this.projectModel
      .findOneAndDelete({ id: id }, updateProjectDto)
      .exec();
    return deleteProject;
  }

  async addWorkflow(
    id: string,
    workflowID: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<ProjectDocument> {
    updateProjectDto.updateAt = new Date();
    await this.createWorkflow(workflowID, new CreateWorkflowDto());
    const addWorkflow = await this.projectModel
      .findOneAndUpdate({ id: id }, updateProjectDto, { new: true })
      .exec();
    addWorkflow.workflowsID.push(workflowID);
    addWorkflow.save();
    return addWorkflow;
  }

  //------------------Workflow------------------
  async createWorkflow(
    workflowID: string,
    createWorkflowDto: CreateWorkflowDto,
  ): Promise<WorkflowDocument> {
    createWorkflowDto.id = workflowID;
    createWorkflowDto.createAt = new Date();
    createWorkflowDto.updateAt = new Date();
    createWorkflowDto.isDeleted = false;
    const creatWorkflow = await this.workflowModel.create(createWorkflowDto);
    creatWorkflow.save();
    return creatWorkflow;
  }

  async findAllWorkflow(): Promise<WorkflowDocument[]> {
    const data = await this.workflowModel.find().exec();
    return data;
  }

  async findOneWorkflow(id: string): Promise<Workflow> {
    const findId = await this.workflowModel.findOne({ id: id }).exec();
    return findId;
  }

  async updateWorkflow(
    id: string,
    content: string,
    updateWorkflowDto: UpdateWorkflowDto,
  ): Promise<WorkflowDocument> {
    updateWorkflowDto.updateAt = new Date();
    const updateWorkflow = await this.workflowModel
      .findOneAndUpdate({ id: id }, updateWorkflowDto, { new: true })
      .exec();
    updateWorkflow.content = content;
    updateWorkflow.save();
    return updateWorkflow;
  }

  async removeAllWorkflow(updateWorkflowDto: UpdateWorkflowDto): Promise<any> {
    updateWorkflowDto.updateAt = new Date();
    updateWorkflowDto.isDeleted = true;
    const deleteWorkflow = await this.workflowModel.deleteMany();
    return deleteWorkflow;
  }

  async removeWorkflow(id: string, updateWorkflowDto: UpdateWorkflowDto): Promise<WorkflowDocument> {
    updateWorkflowDto.updateAt = new Date();
    updateWorkflowDto.isDeleted = true;
    const deleteWorkflow = await this.workflowModel.findOneAndDelete({ id: id }, updateWorkflowDto).exec();
    return deleteWorkflow;
  }
}
