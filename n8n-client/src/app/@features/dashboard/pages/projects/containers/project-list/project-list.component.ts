import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { FormExport } from 'src/app/models/type-helper.model';
import { DialogComponent } from 'src/app/@shared/components/dialog/dialog.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  notificationMessage: string = 'Project created successfully!';

  @Input() quantity: number = 0;

  @ViewChild('dialog') dialog: DialogComponent | undefined;
  @ViewChild('notificationDialog') notificationDialog:
    | DialogComponent
    | undefined;

  constructor(private projectService: ProjectService) {}

  addQuantity() {
    this.quantity += 1;
    console.log(this.quantity);
  }

  createProject(project: FormExport<Project>) {
    const newProject: Project = {
      name: project.name || 'Untitled Project',
      description: project.description || 'No description provided',
      ownerID: 'uid001',
    };

    console.log(newProject);

    this.projectService.createProject(newProject).subscribe((res: any) => {
      if (res.statusCode !== 201) {
        this.notificationMessage = 'Project creation failed!';
      } else {
        this.notificationMessage = 'Project created successfully!';
        this.dialog?.closeDialog();
      }

      this.notificationDialog?.openDialog();
    });
  }
}
