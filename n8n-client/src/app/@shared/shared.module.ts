import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentModule } from './components/component.module';
import { ContainerModule } from './containers/container.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    ContainerModule
  ],
  exports: [
    ComponentModule,
    ContainerModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
