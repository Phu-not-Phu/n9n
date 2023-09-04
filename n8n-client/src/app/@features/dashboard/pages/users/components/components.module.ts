import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  OwnersComponent } from './owner/owner.component';



@NgModule({
  declarations: [
    OwnersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OwnersComponent
  ]
})
export class ComponentsModule { }
