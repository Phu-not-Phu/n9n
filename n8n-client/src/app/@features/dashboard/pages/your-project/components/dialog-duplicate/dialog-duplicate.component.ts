import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-duplicate',
  templateUrl: './dialog-duplicate.component.html',
  styleUrls: ['./dialog-duplicate.component.scss']
})
export class DialogDuplicateComponent {
  @Output() cancelForm = new EventEmitter<void>();

  cancel(): void {
    this.cancelForm.emit();
  }
}
