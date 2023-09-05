import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../projects/models/project.model';

@Component({
  selector: 'app-infomation',
  templateUrl: './infomation.component.html',
  styleUrls: ['./infomation.component.scss'],
})
export class InfomationComponent {
  _project: Project | null = null;

  @Output() addWorkflow = new EventEmitter<void>();

  @Input() set project(value: Project | null) {
    this._project = value;
  }

  addWorkflowHandler() {
    this.addWorkflow.emit();
  }
}
