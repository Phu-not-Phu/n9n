import { Component } from '@angular/core';

@Component({
  selector: 'filter-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent {
  _isOpen: boolean = false;
  currentTab: string = 'credentials';

  openFilter() {
    this._isOpen = !this._isOpen;
    console.log(this.currentTab);
  }
}
