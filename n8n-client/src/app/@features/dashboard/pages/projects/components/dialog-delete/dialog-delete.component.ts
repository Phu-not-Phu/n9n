import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent {
  @Output() cancelForm = new EventEmitter<void>();

  cancel(): void {
    this.cancelForm.emit();
  }
}
