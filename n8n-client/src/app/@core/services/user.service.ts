import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  UserCredential,
} from '@angular/fire/auth';
import { CookieService } from 'ngx-cookie';
import { lastValueFrom, map, of, throwError } from 'rxjs';
import { UserCreateDTO, UserModel } from 'src/app/models/user.model';

import { environment } from 'src/environments/environment';

const { backend } = environment;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private auth: Auth,
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  getUser() {
    const tokenCookie = this.cookieService.get('token');

    if (!tokenCookie) {
      return of(null);
    }

    return this.httpClient
      .get<any>(`${backend.apiServer}users/me`, {
        headers: {
          Authorization: `Bearer ${tokenCookie}`,
        },
      })
      .pipe(
        map((res) => {
          if (res.error !== null) {
            throw new Error(res.error);
          }
          return res.data;
        })
      );
  }

  createUser(newUser: UserCreateDTO) {
    return this.httpClient
      .post<any>(`${backend.apiServer}users/register`, newUser)
      .pipe(
        map((res) => {
          return res.data;
        })
      );
  }

  updateUser(id: string, user: UserModel) {
    return this.httpClient
      .put<any>(`${backend.apiServer}users/update?id=${id}`, user)
      .pipe(
        map((res) => {
          if (res.error !== null) {
            throw new Error(res.error);
          }

          return res.data;
        })
      );
  }

  async checkUser(token: string): Promise<boolean> {
    const userResult = await lastValueFrom(
      this.httpClient.put<any>(
        `${backend.apiServer}users/verify`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    return userResult.data;
  }

  loginWithEmail(email: string, password: string) {
    return this.httpClient.post<any>(`${backend.apiServer}users/login`, {
      email,
      password,
    });
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

  logout() {
    this.cookieService.remove('token');
    return of(null);
  }
}
