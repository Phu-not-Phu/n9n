import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import { lastValueFrom } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';

import { environment } from 'src/environments/environment';

const { backend } = environment;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth, private httpClient: HttpClient) {}

  async getUser() {
    let userToken = await this.auth.currentUser?.getIdToken();

    const userResult = await lastValueFrom(
      this.httpClient.get<UserModel>(`${backend}user`, {
        params: {
          githubID: userToken ?? '',
          googleID: userToken ?? '',
        },
      })
    );
  }

  async createUser(userModel: UserModel): Promise<string> {
    const userResult = await lastValueFrom(
      this.httpClient.post<any>(`${backend.apiServer}users/register`, userModel)
    );

    if (!userResult) {
      throw new Error('User result is null');
    }

    return userResult.data;
  }

  async checkUser(user: UserModel): Promise<boolean> {
    const userResult = await lastValueFrom(
      this.httpClient.put<boolean>(`${backend}check`, user)
    );

    return userResult;
  }

  async loginWithGoogle(): Promise<UserCredential> {
    let googleProvider = new GoogleAuthProvider();

    let userCredential = await signInWithPopup(this.auth, googleProvider);
    if (!userCredential) {
      throw new Error('User credential is null');
    }

    return userCredential;
  }

  async loginWithFacebook() {
    alert('Coming soon!');
  }

  async loginWithGithub(): Promise<UserCredential | never> {
    let githubProvider = new GithubAuthProvider();

    let userCredential = await signInWithPopup(this.auth, githubProvider);
    if (!userCredential) {
      throw new Error('User credential is null');
    }

    return userCredential;
  }

  logOut() {
    return signOut(this.auth);
  }
}
