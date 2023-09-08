import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-created-project',
  templateUrl: './created-project.component.html',
  styleUrls: ['./created-project.component.scss'],
})
export class CreatedProjectComponent {
  isDialogOpen: boolean = false;
  currentDialog: string = '';
  _project?: Project;

  @Input() set project(value: Project) {
    this._project = value;
  }

  constructor(private router: Router, private projectService: ProjectService) {}

  changeNavigation(id: string) {
    this.router.navigate(['dashboard', 'project', id]);
  }

  openSettingDialog() {
    this.currentDialog = 'Setting Project';
  }

  openDeleteDialog() {
    this.currentDialog = 'Delete Project';
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
