import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { UpdateWorkflowDto } from './dto/update-workflow.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  //------------------Project------------------
  @Post('/create')
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get('/getAll')
  findAll() {
    return this.projectService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.remove(id, updateProjectDto);
  }

  @Patch('/addWorkflow/:id/:workflowID')
  addWorkflow(
    @Param('id') id: string,
    @Param('workflowID') workflowID: string,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectService.addWorkflow(id, workflowID, updateProjectDto);
  }

  //------------------Workflow------------------
  @Get('/getWorkflow/:id')
  findOneWorkflow(@Param('id') id: string) {
    return this.projectService.findOneWorkflow(id);
  }

  @Get('/getAllWorkflow')
  findAllWorkflow() {
    return this.projectService.findAllWorkflow();
  }

  @Patch('/updateWorkflow/:id')
  updateWorkflow(
    @Param('id') id: string,
    @Body() content: string,
    @Body() updateWorkflowDto: UpdateWorkflowDto,
  ) {
    return this.projectService.updateWorkflow(id, content, updateWorkflowDto);
  }

  @Delete('/deleteWorkflow/:id')
  removeWorkflow(@Param('id') id: string, @Body() UpdateWorkflowDto: UpdateWorkflowDto) {
    return this.projectService.removeWorkflow(id, UpdateWorkflowDto);
  }
}
