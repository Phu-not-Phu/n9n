import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SignInForm } from 'src/app/@features/sign-in/models/sign-in.model';
import { FormExport } from 'src/app/models/type-helper.model';
import { UserModel } from 'src/app/models/user.model';
import { userActions } from 'src/app/ngrx/user/user.actions';
import { UserState } from 'src/app/ngrx/user/user.state';

@Component({
  selector: 'navigation-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  _isOpen: boolean = false;
  _isLoggingOut: boolean = false;

  @Input() set isOpen(value: boolean) {
    this._isOpen = value;
  }

  constructor(private router: Router, private store: Store<{ user: UserState }>) { }

  userState$!: Observable<UserState>;
  currentUser!: UserModel | null;
  userProfileFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  ngOnInit() {
    this.userState$ = this.store.select('user');
    this.userState$.subscribe((userState) => {
      this.initializeForm(userState.user);
    });
  }

  async initializeForm(user: UserModel | null) {
    if (!user) {
      return;
    }

    this.currentUser = user;

    this.userProfileFormGroup.setValue({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  }

  async logOut() {
    this._isLoggingOut = true;

    this.store.dispatch(
      userActions.logout()
    );
    this.router.navigate(['/signin']);
  }
}
