import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
import { CreCardComponent } from './cre-card/cre-card.component';
import { ListSelectComponent } from './list-select/list-select.component';


@NgModule({
  declarations: [
    CreCardComponent,
    ListSelectComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    CreCardComponent,
    ListSelectComponent
  ]
})
export class ContainerModule { }
