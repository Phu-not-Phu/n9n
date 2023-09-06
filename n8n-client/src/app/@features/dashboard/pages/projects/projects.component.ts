import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { UserState } from 'src/app/ngrx/user/user.state';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(
    private store: Store<{ user: UserState }>
  ) {}

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
}
