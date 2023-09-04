import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-share',
  templateUrl: './dialog-share.component.html',
  styleUrls: ['./dialog-share.component.scss'],
})
export class DialogShareComponent {
  @Output() cancelForm = new EventEmitter<void>();

  cancel(): void {
    this.cancelForm.emit();
  }
}
