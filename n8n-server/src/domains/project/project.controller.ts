import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { IProjectService } from './model/project.model';
import { CreateProjectDto, UpdateProjectDto } from './model/project.dto';
import { HttpResponse } from 'src/models/response.model';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('project')
export class ProjectController {
  constructor(
    @Inject(IProjectService) private projectService: IProjectService,
  ) {}

  @Post('')
  async createProject(@Body() project: CreateProjectDto) {
    const result = await this.projectService.createProject(project);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @UseGuards(AuthGuard)
  @Get('')
  async readProject(@Query('id') id: string) {
    const result = await this.projectService.readProject(id);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Put('')
  async updateProject(
    @Query('id') id: string,
    @Body() project: UpdateProjectDto,
  ) {
    const result = await this.projectService.updateProject(id, project);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Delete('')
  async deleteProject(@Query('id') id: string) {
    const result = await this.projectService.deleteProject(id);
    return new HttpResponse(result.code, result.data, result.error);
  }
}
