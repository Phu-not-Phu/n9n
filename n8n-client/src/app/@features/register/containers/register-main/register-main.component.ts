import { Component, ViewChild } from '@angular/core';
import { FormExport } from 'src/app/models/type-helper.model';
import { RegisterForm } from '../../models/register.model';
import { UserService } from 'src/app/@core/services/user.service';
import { DialogComponent } from 'src/app/@shared/components/dialog/dialog.component';
import { CookieService } from 'ngx-cookie';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/ngrx/user/user.state';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.scss'],
})
export class RegisterMainComponent {
  @ViewChild('notification') notification: DialogComponent | undefined;
  notificationMessage = 'User created successfully';

  constructor(private store: Store<{ userState: UserState }>) {}

  async registerUser(user: FormExport<RegisterForm>) {
    const newUser = {
      username: user.username!,
      firstName: user.firstName!,
      lastName: user.lastName!,
      email: user.email!,
      password: user.password!,
    };

    this.store.dispatch({ type: '[User] Register', user: newUser });
  }
}
