import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.scss'],
})
export class ExecutionComponent {
  _isOpen: boolean = false;
  currentTab: string = 'credentials';

  openFilter() {
    this._isOpen = !this._isOpen;
    console.log(this.currentTab);
  }
}
