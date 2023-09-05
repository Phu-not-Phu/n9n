import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { IWorkflowService } from './model/workflow.model';
import { HttpResponse } from 'src/models/response.model';
import { CreateWorkflowDto, UpdateWorkflowDto } from './model/workflow.dto';

@Controller('workflow')
export class WorkflowController {
  constructor(
    @Inject(IWorkflowService) private workflowService: IWorkflowService,
  ) {}

  @Post('')
  async createWorkflow(@Body() workflow: CreateWorkflowDto) {
    const result = await this.workflowService.createWorkflow(workflow);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Get('')
  async readWorkflow(@Query('id') id: string) {
    const result = await this.workflowService.readWorkflow(id);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Get('all')
  async readWorkflows(@Query('pid') pid: string) {
    const result = await this.workflowService.readWorkflows(pid);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Put('')
  async updateWorkflow(
    @Query('id') id: string,
    @Body() workflow: UpdateWorkflowDto,
  ) {
    const result = await this.workflowService.updateWorkflow(id, workflow);
    return new HttpResponse(result.code, result.data, result.error);
  }

  @Delete('')
  async deleteWorkflow(@Query('id') id: string) {
    const result = await this.workflowService.deleteWorkflow(id);
    return new HttpResponse(result.code, result.data, result.error);
  }
}
