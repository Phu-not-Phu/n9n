import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Workflow } from '../../models/workflow.model';

@Component({
  selector: 'app-workflow-card',
  templateUrl: './workflow-card.component.html',
  styleUrls: ['./workflow-card.component.scss'],
})
export class WorkflowCardComponent {
  _isOn: boolean = false;
  _isOpenSetting: boolean = false;
  isDialogOpen: boolean = false;
  currentDialog: string = '';

  _workflow: Workflow | undefined;

  @Input() set workflow(workflow: Workflow) {
    console.log(workflow);
    this._workflow = workflow;
  }

  constructor(private router: Router) { }

  navigateToWorkflow(coreID: string) {
    this.router.navigate(['dashboard', 'workflow', coreID]);
  }

  turnOn() {
    this._isOn = !this._isOn;
  }

  openSetting() {
    this._isOpenSetting = !this._isOpenSetting;
  }

  openShareDialog() {
    this.currentDialog = 'Sharing';
  }

  openDuplicateDialog() {
    this.currentDialog = 'Duplicate Workflow';
  }

  openDeleteDialog() {
    this.currentDialog = 'Delete Workflow';
  }

  clickOutside() {
    this._isOpenSetting = false;
  }
}
