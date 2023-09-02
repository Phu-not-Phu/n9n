import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workflow-card-component',
  templateUrl: './workflow-card.component.html',
  styleUrls: ['./workflow-card.component.scss'],
})
export class WorkflowCardComponent {
  _isOn: boolean = false;

  constructor(private router: Router) {}

  navigateToWorkflow() {
    this.router.navigate(['dashboard', 'workflow']);
  }

  turnOn() {
    this._isOn = !this._isOn;
  }
}
