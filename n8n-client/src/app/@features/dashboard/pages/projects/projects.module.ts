import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ContainersModule } from './containers/containers.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ContainersModule,
  ]
})
export class ProjectsModule { }
