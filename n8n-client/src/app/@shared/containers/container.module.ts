import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterBoxComponent } from './filter-box/filter-box.component';
import { ComponentModule } from '../components/component.module';

@NgModule({
  declarations: [FilterBoxComponent],
  imports: [CommonModule, ComponentModule],
  exports: [FilterBoxComponent],
})
export class ContainerModule {}
