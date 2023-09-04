import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-setting',
  templateUrl: './dialog-setting.component.html',
  styleUrls: ['./dialog-setting.component.scss'],
})
export class DialogSettingComponent {
  @Output() cancelForm = new EventEmitter<void>();

  cancel(): void {
    this.cancelForm.emit();
  }
}
