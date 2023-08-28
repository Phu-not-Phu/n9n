import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'create-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {
  @Output() createProject = new EventEmitter();

  openCreateProjectDialog() {
    this.createProject.emit();
  }
}
