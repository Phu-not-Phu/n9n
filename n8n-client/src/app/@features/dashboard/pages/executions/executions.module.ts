import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionsRoutingModule } from './executions-routing.module';
import { ExecutionsComponent } from './executions.component';
import { ContainerModule } from './containers/container.module';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [ExecutionsComponent],
  imports: [CommonModule, ExecutionsRoutingModule, ContainerModule, SharedModule],
})
export class ExecutionsModule {}
