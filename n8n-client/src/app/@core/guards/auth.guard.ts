import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const userService = inject(UserService);

  const tokenCookie = cookieService.get('token');

  if (!tokenCookie) {
    router.navigate(['/signin']);
    return false;
  }

  const isVerified = await userService.checkUser(tokenCookie);

  if (!isVerified) {
    router.navigate(['/signin']);
    return false;
  }

  return true;
};
