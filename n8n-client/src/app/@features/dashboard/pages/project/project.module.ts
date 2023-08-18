import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ComponentsModule } from './components/components.module';
import { ContainerModule } from './containers/container.module';


@NgModule({
  declarations: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ComponentsModule,
    ContainerModule
  ]
})
export class ProjectModule { }
