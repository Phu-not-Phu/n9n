import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleService } from 'src/app/@core/services/google.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private googleService: GoogleService, private router: Router) {}

  loginWithGoogle() {
    this.googleService.loginWithGoogle().then(console.log);
  }

  loginWithFacebook() {}

  loginWithGithub() {
    this.googleService.loginWithGithub().then(console.log);
  }

  logout() {
    this.googleService.logOut();
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  navigateToHome(){
    this.router.navigate(['/dashboard']);
  }
}
