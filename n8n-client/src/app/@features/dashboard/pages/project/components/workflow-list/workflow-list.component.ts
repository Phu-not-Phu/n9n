import { Component, Input } from '@angular/core';
import { Workflow } from '../../models/workflow.model';

@Component({
  selector: 'app-workflow-list',
  templateUrl: './workflow-list.component.html',
  styleUrls: ['./workflow-list.component.scss']
})
export class WorkflowListComponent {
  constructor() { }

  _workflows: Workflow[] = []

  @Input() set workflows(workflows: Workflow[]) {
    this._workflows = workflows;
  }
}
