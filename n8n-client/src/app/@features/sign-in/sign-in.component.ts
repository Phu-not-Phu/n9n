import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/@core/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private userService: UserService, private router: Router) {}

  loginWithGoogle() {
    this.userService.loginWithGoogle().then(console.log);
  }

  loginWithFacebook() {}

  loginWithGithub() {
    this.userService.loginWithGithub().then(console.log);
  }

  logout() {
    this.userService.logOut();
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToHome() {
    this.router.navigate(['/dashboard']);
  }
}
