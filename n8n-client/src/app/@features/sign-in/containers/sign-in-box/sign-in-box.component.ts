import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/@core/services/user.service';
import { FormExport } from 'src/app/models/type-helper.model';
import { SignInForm } from '../../models/sign-in.model';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/ngrx/user/user.state';
import { userActions } from 'src/app/ngrx/user/user.actions';

@Component({
  selector: 'app-sign-in-box',
  templateUrl: './sign-in-box.component.html',
  styleUrls: ['./sign-in-box.component.scss'],
})
export class SignInBoxComponent {
  _isLoggingIn: boolean = false;

  constructor(
    private router: Router,
    private store: Store<{ userState: UserState }>
  ) {}

  async loginWithEmailAndPassword(signInForm: FormExport<SignInForm>) {
    this._isLoggingIn = true;

    this.store.dispatch(
      userActions.loginWithEmail({
        email: signInForm.email!,
        password: signInForm.password!,
      })
    );
  }

  // loginWithGoogle() {
  //   this.userService.loginWithGoogle().then(console.log);
  // }

  // loginWithFacebook() {}

  // loginWithGithub() {
  //   this.userService.loginWithGithub().then(console.log);
  // }

  // logout() {
  //   this.userService.logOut();
  // }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToHome() {
    this.router.navigate(['/dashboard']);
  }
}
