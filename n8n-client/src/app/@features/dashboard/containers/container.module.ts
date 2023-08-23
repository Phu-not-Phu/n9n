import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { ComponentModule } from '../components/component.module';
import { FilterBoxComponent } from './filter-box/filter-box.component';

@NgModule({
  declarations: [NavigationComponent, FilterBoxComponent],
  imports: [CommonModule, ComponentModule],
  exports: [NavigationComponent, FilterBoxComponent],
})
export class ContainerModule {}
