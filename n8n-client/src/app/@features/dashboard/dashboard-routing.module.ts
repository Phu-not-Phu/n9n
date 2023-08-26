import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('./pages/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
      },
      {
        path: 'project/:id',
        loadChildren: () =>
          import('./pages/project/project.module').then((m) => m.ProjectModule),
      },
      {
        path: 'credentials',
        loadChildren: () =>
          import('./pages/credentials/credentials.module').then(
            (m) => m.CredentialsModule
          ),
      },
      {
        path: 'executions',
        loadChildren: () =>
          import('./pages/executions/executions.module').then(
            (m) => m.ExecutionsModule
          ),
      },
      {
        path: 'workflow/:id',
        loadChildren: () =>
          import('./pages/workflow/workflow.module').then(
            (m) => m.WorkflowModule
          ),
      },
      {
        path: 'settings/personal',
        loadChildren: () =>
          import('./pages/personal/personal.module').then(
            (m) => m.PersonalModule
          ),
      },
      {
        path: 'settings/users',
        loadChildren: () =>
          import('./pages/users/users.module').then((m) => m.UsersModule),
      },
      { path: 'settings', redirectTo: 'settings/personal' },
      { path: 'workflow', redirectTo: 'project/:id' },
      { path: 'project', redirectTo: 'projects' },
      { path: '**', redirectTo: 'projects' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
