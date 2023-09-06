import { Component, Input } from '@angular/core';
import { Workflow } from '../../../models/workflow.model';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss'],
})
export class InforComponent {
  _workflow?: Workflow;

  @Input() set workflow(workflow: Workflow) {
    console.log(workflow);
    this._workflow = workflow;
  }
}
