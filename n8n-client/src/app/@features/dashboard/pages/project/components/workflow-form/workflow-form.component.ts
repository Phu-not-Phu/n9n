import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormExport } from 'src/app/models/type-helper.model';
import { CreateWorkflow } from '../../models/workflow.model';

@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrls: ['./workflow-form.component.scss'],
})
export class WorkflowFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  _isSubmitted: boolean = false;

  @Output() submitForm = new EventEmitter<FormExport<CreateWorkflow>>();
  @Output() cancelForm = new EventEmitter<void>();

  workflowFormGroups = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit(): void {
    this._isSubmitted = true;

    if (this.workflowFormGroups.valid) {
      this.submitForm.emit(this.workflowFormGroups.value);
    }
  }

  onCancel(): void {
    this.cancelForm.emit();
  }
}
