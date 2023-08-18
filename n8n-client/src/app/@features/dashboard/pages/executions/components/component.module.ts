import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExeCardComponent } from './exe-card/exe-card.component';



@NgModule({
  declarations: [
    ExeCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExeCardComponent
  ]
})
export class ComponentModule { }
