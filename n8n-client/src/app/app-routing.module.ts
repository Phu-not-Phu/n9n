import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './@core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () =>
      import('./@features/sign-in/sign-in.module').then((m) => m.SignInModule),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./@features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  {
    path: 'register',
    loadChildren: () =>
      import('./@features/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () =>
      import('./@features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
