import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';

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

  constructor(private router: Router) {}

  changeNavigation(id: string) {
    this.router.navigate(['dashboard', 'project', id]);
  }

  openSettingDialog() {
    this.currentDialog = 'Setting Project';
  }

  openDeleteDialog() {
    this.currentDialog = 'Delete Project';
  }
}
