import { Component, Input } from '@angular/core';
import { FormExport, Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent {
  isDialogOpen: boolean = false;

  @Input()
  quantity: number = 0;

  constructor(private projectService: ProjectService) { }

  addQuantity() {
    this.quantity += 1;
    console.log(this.quantity);
  }

  createProject(project: FormExport<Project>) {
    const newProject: Project = {
      name: project.name || 'Untitled Project',
      description: project.description || 'No description provided',
    }

    console.log(newProject);

    this.projectService.createProject(newProject).subscribe((res) => {
      console.log(res);
    });
  }

}
