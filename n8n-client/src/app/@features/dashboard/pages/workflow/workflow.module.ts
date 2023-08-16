import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { ContainerModule } from './containers/container.module';
import { NgxGraphModule } from '@swimlane/ngx-graph';


@NgModule({
  declarations: [
    WorkflowComponent
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule,

    ContainerModule,

    NgxGraphModule
  ]
})
export class WorkflowModule { }
