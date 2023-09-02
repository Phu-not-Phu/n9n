import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-pass-form',
  templateUrl: './change-pass-form.component.html',
  styleUrls: ['./change-pass-form.component.scss']
})
export class ChangePassFormComponent {

  @Output() cancelChange = new EventEmitter<void>();

  cancel(): void {
    this.cancelChange.emit();
  }
}
