import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourProjectComponent } from './your-project.component';

const routes: Routes = [{ path: '', component: YourProjectComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourProjectRoutingModule { }
