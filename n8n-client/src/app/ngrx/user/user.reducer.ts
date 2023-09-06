import { createReducer, on } from '@ngrx/store';
import { userActions } from './user.actions';
import { UserState } from './user.state';

const initialState: UserState = {
  user: null,
  token: null,
  isLoading: false,
  isLoadSuccess: false,
  isUpdating: false,
  isUpdateSuccess: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(userActions.loginWithEmail, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(userActions.loginWithEmailSuccess, (state, { token }) => {
    return {
      ...state,
      token,
      isLoading: false,
      isLoadSuccess: true,
    };
  }),
  on(userActions.loginWithEmailFailure, (state, { error }) => {
    return {
      ...state,
      error,
      isLoading: false,
      isLoadSuccess: false,
    };
  }),
  on(userActions.logout, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(userActions.logoutSuccess, (state) => {
    return {
      ...state,
      user: null,
      isLoading: false,
    };
  }),
  on(userActions.logoutFailure, (state, { error }) => {
    return {
      ...state,
      error,
      isLoading: false,
    };
  }),
  on(userActions.register, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(userActions.registerSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      isLoading: false,
    };
  }),
  on(userActions.registerFailure, (state, { error }) => {
    return {
      ...state,
      error,
      isLoading: false,
    };
  }),
  on(userActions.getUser, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(userActions.getUserSuccess, (state, { user }) => {
    let tempUser = { ...user };

    delete tempUser['password'];
    delete tempUser['createAt'];
    delete tempUser['updateAt'];

    return {
      ...state,
      user: tempUser,
      isLoading: false,
      isLoadSuccess: true,
    };
  }),
  on(userActions.getUserFailure, (state, { error }) => {
    return {
      ...state,
      error,
      isLoading: false,
    };
  }),
  on(userActions.updateUser, (state) => {
    return {
      ...state,
      isUpdating: true,
    };
  }),
  on(userActions.updateUserSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      isUpdating: false,
      isUpdateSuccess: true,
    };
  }),
  on(userActions.updateUserFailure, (state, { error }) => {
    return {
      ...state,
      error,
      isUpdating: false,
      isUpdateSuccess: false,
    };
  })
);
