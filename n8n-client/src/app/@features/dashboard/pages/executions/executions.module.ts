import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionsRoutingModule } from './executions-routing.module';
import { ExecutionsComponent } from './executions.component';
import { ContainerModule } from './containers/container.module';


@NgModule({
  declarations: [
    ExecutionsComponent
  ],
  imports: [
    CommonModule,
    ExecutionsRoutingModule,

    ContainerModule
  ]
})
export class ExecutionsModule { }
