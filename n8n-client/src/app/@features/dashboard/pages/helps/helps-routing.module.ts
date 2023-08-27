import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpsComponent } from './helps.component';

const routes: Routes = [{ path: '', component: HelpsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpsRoutingModule { }
