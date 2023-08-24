import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModule } from './components/component.module';
import { ContainerModule } from './containers/container.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ContainerModule],
  exports: [ContainerModule],
})
export class SharedModule {}
