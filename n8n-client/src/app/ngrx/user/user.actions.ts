import { createAction, props } from '@ngrx/store';
import { UserCreateDTO, UserModel } from 'src/app/models/user.model';

export const userActions = {
  loginWithEmail: createAction(
    '[User] Login with email',
    props<{ email: string; password: string }>()
  ),
  loginWithEmailSuccess: createAction(
    '[User] Login with email Success',
    props<{ token: string }>()
  ),
  loginWithEmailFailure: createAction(
    '[User] Login Failure',
    props<{ error: Error }>()
  ),

  logout: createAction('[User] Logout'),
  logoutSuccess: createAction('[User] Logout Success'),
  logoutFailure: createAction(
    '[User] Logout Failure',
    props<{ error: Error }>()
  ),

  register: createAction('[User] Register', props<{ user: UserCreateDTO }>()),
  registerSuccess: createAction(
    '[User] Register Success',
    props<{ user: UserModel }>()
  ),
  registerFailure: createAction(
    '[User] Register Failure',
    props<{ error: Error }>()
  ),

  getUser: createAction('[User] Get User'),
  getUserSuccess: createAction(
    '[User] Get User Success',
    props<{ user: UserModel }>()
  ),
  getUserFailure: createAction(
    '[User] Get User Failure',
    props<{ error: Error }>()
  ),

  updateUser: createAction(
    '[User] Update User',
    props<{ id: string; user: UserModel }>()
  ),
  updateUserSuccess: createAction(
    '[User] Update User Success',
    props<{ user: UserModel }>()
  ),
  updateUserFailure: createAction(
    '[User] Update User Failure',
    props<{ error: Error }>()
  ),
};
