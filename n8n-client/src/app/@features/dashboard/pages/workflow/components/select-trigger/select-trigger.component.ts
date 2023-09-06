import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-trigger',
  templateUrl: './select-trigger.component.html',
  styleUrls: ['./select-trigger.component.scss'],
})
export class SelectTriggerComponent {
  @Output() _isOpenTrigger = new EventEmitter<void>();

  selectTrigger(): void {
    this._isOpenTrigger.emit();
  }
}
