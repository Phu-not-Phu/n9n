import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
  User,
} from '@angular/fire/auth';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GoogleService {
  user$ = new Subject();
  user: User | null = null;

  constructor(private auth: Auth) {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.user$!.next(this.user);
      } else {
        this.user = null;
        this.user$!.next(null);
      }
    });
  }

  loginWithGoogle() {
    let googleProvider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, googleProvider);
  }

  loginWithFacebook() {
    let facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(this.auth, facebookProvider);
  }

  loginWithGithub() {
    let githubProvider = new GithubAuthProvider();
    return signInWithPopup(this.auth, githubProvider);
  }

  logOut() {
    return signOut(this.auth);
  }
}
