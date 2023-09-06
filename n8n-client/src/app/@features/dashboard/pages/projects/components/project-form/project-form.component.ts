import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Project } from '../../models/project.model';
import { FormExport } from 'src/app/models/type-helper.model';
import { DialogComponent } from 'src/app/@shared/components/dialog/dialog.component';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent {
  constructor(private formBuilder: FormBuilder) {}

  _isSubmitted: boolean = false;
  notificationMessage: string = 'Project created successfully!';

  @Output() submitForm = new EventEmitter<FormExport<Project>>();
  @Output() cancelForm = new EventEmitter<void>();

  @ViewChild('notificationDialog') notificationDialog:
    | DialogComponent
    | undefined;

  projectFormGroups = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    description: new FormControl('', Validators.required),
  });

  onSubmit(): void {
    this._isSubmitted = true;

    if (this.projectFormGroups.valid) {
      this.submitForm.emit(this.projectFormGroups.value);
      this.notificationDialog?.openDialog();
    }
  }

  onCancel(): void {
    this.cancelForm.emit();
    this.projectFormGroups.reset();
  }
}
