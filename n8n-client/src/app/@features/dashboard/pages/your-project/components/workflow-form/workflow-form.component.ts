import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrls: ['./workflow-form.component.scss'],
})
export class WorkflowFormComponent {
  @Output() cancelForm = new EventEmitter<void>();

  cancel(): void {
    this.cancelForm.emit();
  }
}
