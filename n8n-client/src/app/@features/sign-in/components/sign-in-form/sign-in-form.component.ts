import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormExport } from 'src/app/models/type-helper.model';
import { SignInForm } from '../../models/sign-in.model';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
})
export class SignInFormComponent {
  @Output() signIn = new EventEmitter<FormExport<SignInForm>>();

  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  _isSubmitted: boolean = false;

  signInUser() {
    this._isSubmitted = true;

    if (this.loginFormGroup.valid) {
      this.signIn.emit(this.loginFormGroup.value);
    }
  }
}
