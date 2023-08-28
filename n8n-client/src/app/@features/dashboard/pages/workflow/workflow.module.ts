import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowComponent } from './workflow.component';
import { ContainerModule } from './containers/container.module';
import { ReteModule } from 'rete-angular-plugin/16';
import { ComponentsModule } from '../projects/components/components.module';

@NgModule({
  declarations: [
    WorkflowComponent
  ],
  imports: [
    CommonModule,
    WorkflowRoutingModule,

    ComponentsModule,
    ContainerModule,
  ],

})
export class WorkflowModule { }
