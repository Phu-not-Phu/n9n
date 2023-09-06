import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-change-pass-form',
  templateUrl: './change-pass-form.component.html',
  styleUrls: ['./change-pass-form.component.scss']
})
export class ChangePassFormComponent {

  newPass: string = '';
  confirmPass: string = '';
  oldPass: string = '';

  @Output() cancelChange = new EventEmitter<void>();

  cancel(): void {
    this.cancelChange.emit();
    this.newPass = '';
    this.confirmPass = '';
    this.oldPass = '';
  }
}
