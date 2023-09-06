import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, lastValueFrom } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { userActions } from 'src/app/ngrx/user/user.actions';
import { UserState } from 'src/app/ngrx/user/user.state';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent {
  constructor(
    public router: Router,
    private store: Store<{ user: UserState }>
  ) {}

  isDialogOpen: boolean = false;

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

  checkPristine(value: any, formControl: AbstractControl) {
    if (value === formControl.value) {
      formControl.markAsPristine();
    }
  }

  async updateUser() {
    if (!this.userProfileFormGroup.valid) return;

    const { firstName, lastName, email } = this.userProfileFormGroup.value;

    const tempUser: UserModel = {
      ...this.currentUser!,
      firstName,
      lastName,
      email,
    };

    this.store.dispatch(
      userActions.updateUser({
        id: this.currentUser!._id,
        user: tempUser,
      })
    );
  }
}
