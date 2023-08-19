import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
import { ExeCardComponent } from './exe-card/exe-card.component';

@NgModule({
  declarations: [
    ExeCardComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    ExeCardComponent
  ]
})
export class ContainerModule { }
