import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
import { CreCardComponent } from './cre-card/cre-card.component';


@NgModule({
  declarations: [
    CreCardComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    CreCardComponent
  ]
})
export class ContainerModule { }
