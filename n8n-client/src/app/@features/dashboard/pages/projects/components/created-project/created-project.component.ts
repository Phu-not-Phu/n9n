import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

import { Store } from '@ngrx/store';
import { ProjectState } from '../../ngrx/project.state';
import { projectActions } from '../../ngrx/project.actions';
@Component({
  selector: 'app-created-project',
  templateUrl: './created-project.component.html',
  styleUrls: ['./created-project.component.scss'],
})
export class CreatedProjectComponent {
  isDialogOpen: boolean = false;
  currentDialog: string = '';
  _project?: Project;
  deleteProjectId: string = '';

  @Input() set project(value: Project) {
    this._project = value;
  }

  constructor(
    private router: Router,
    private projectService: ProjectService,
  ) {}

  changeNavigation(id: string) {
    this.router.navigate(['dashboard', 'project', id]);
  }

  deleteProject(id: string) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
