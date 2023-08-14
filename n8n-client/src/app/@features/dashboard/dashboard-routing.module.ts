import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'workflows', loadChildren: () => import('./pages/workflows/workflows.module').then(m => m.WorkflowsModule) },
  { path: 'credentials', loadChildren: () => import('./pages/credentials/credentials.module').then(m => m.CredentialsModule) },
  { path: 'executions', loadChildren: () => import('./pages/executions/executions.module').then(m => m.ExecutionsModule) },
  { path: 'workflow/:id', loadChildren: () => import('./pages/workflow/workflow.module').then(m => m.WorkflowModule) },
  { path: 'workflow', redirectTo: 'workflows' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
