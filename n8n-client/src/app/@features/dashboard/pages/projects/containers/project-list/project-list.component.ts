import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { FormExport } from 'src/app/models/type-helper.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  isDialogOpen: boolean = false;

  @Input()
  quantity: number = 0;

  constructor(private projectService: ProjectService) {}

  addQuantity() {
    this.quantity += 1;
    console.log(this.quantity);
  }

  createProject(project: FormExport<Project>) {
    const newProject: Project = {
      name: project.name || 'Untitled Project',
      description: project.description || 'No description provided',
    };

    console.log(newProject);

    this.projectService.createProject(newProject).subscribe((res) => {
      console.log(res);
    });
  }
}
