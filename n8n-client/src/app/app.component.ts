import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from './ngrx/user/user.state';
import { userActions } from './ngrx/user/user.actions';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'n9n';
  userState$ = this.store.select('user');

  constructor(private store: Store<{ user: UserState }>) {}

  ngOnInit() {
    this.store.dispatch(userActions.getUser());
  }
}
