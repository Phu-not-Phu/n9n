import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userActions } from './user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { UserService } from 'src/app/@core/services/user.service';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.loginWithEmail),
      switchMap((action) =>
        this.userService.loginWithEmail(action.email, action.password).pipe(
          map((res) => {
            this.cookieService.put('token', res.data);
            return userActions.getUser();
          }),
          catchError((error) => [userActions.loginWithEmailFailure({ error })])
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.logout),
      switchMap(() =>
        this.userService.logout().pipe(
          map(() => userActions.logoutSuccess()),
          catchError((error) => [userActions.logoutFailure({ error })])
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.register),
      switchMap((action) =>
        this.userService.createUser(action.user).pipe(
          map((user) => userActions.registerSuccess({ user })),
          catchError((error) => [userActions.registerFailure({ error })])
        )
      )
    )
  );

  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUser),
      switchMap(() =>
        this.userService.getUser().pipe(
          map((res) => userActions.getUserSuccess({ user: res })),
          catchError((error) => [userActions.getUserFailure({ error })])
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.updateUser),
      switchMap((action) =>
        this.userService.updateUser(action.id, action.user).pipe(
          map((user) => userActions.updateUserSuccess({ user })),
          catchError((error) => [userActions.updateUserFailure({ error })])
        )
      )
    )
  );
}
