import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workflow-card-component',
  templateUrl: './workflow-card.component.html',
  styleUrls: ['./workflow-card.component.scss'],
})
export class WorkflowCardComponent {
  _isOn: boolean = false;
  _isOpenSetting: boolean = false;
  isDialogOpen: boolean = false;
  currentDialog: string = '';

  constructor(private router: Router) {}

  navigateToWorkflow() {
    this.router.navigate(['dashboard', 'workflow']);
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
}
