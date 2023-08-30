import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.scss']
})
export class ExecutionComponent {
  _isOpen: boolean = false;

  @Input() set isOpen(value: boolean) {
    this._isOpen = value;
  }
}
