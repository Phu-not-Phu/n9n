import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signin', loadChildren: () => import('./@features/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'dashboard', loadChildren: () => import('./@features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', pathMatch: 'full', loadChildren: () => import('./@features/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
