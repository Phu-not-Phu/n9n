import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormExport } from 'src/app/models/type-helper.model';
import { RegisterForm } from '../../models/register.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  constructor(public router: Router) {}

  _isSubmitted: boolean = false;

  @Output() register = new EventEmitter<FormExport<RegisterForm>>();

  registerFormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  registerUser() {
    this._isSubmitted = true;

    if (this.registerFormGroup.valid) {
      this.register.emit(this.registerFormGroup.value);
    }
  }
}
