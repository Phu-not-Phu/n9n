import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserService } from 'src/app/@core/services/user.service';
import { UserState } from 'src/app/ngrx/user/user.state';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private store: Store<{ user: UserState }>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.select('user').subscribe((userState) => {
      console.log(userState);

      if (userState.user !== null) {
        this.router.navigate(['/dashboard/to-do']);
      }
    });
  }
}
