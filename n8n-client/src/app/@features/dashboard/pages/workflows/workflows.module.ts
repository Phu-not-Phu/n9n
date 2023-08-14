import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowsRoutingModule } from './workflows-routing.module';
import { WorkflowsComponent } from './workflows.component';
import { ContainerModule } from './containers/container.module';


@NgModule({
  declarations: [
    WorkflowsComponent
  ],
  imports: [
    CommonModule,
    WorkflowsRoutingModule,

    ContainerModule
  ]
})
export class WorkflowsModule { }
