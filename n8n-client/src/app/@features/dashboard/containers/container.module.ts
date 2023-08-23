import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationComponent } from './navigation/navigation.component';
import { ComponentModule } from '../components/component.module';

@NgModule({
  declarations: [
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class ContainerModule { }
