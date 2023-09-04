import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { OwnerComponent } from '../containers/owner/owner.component';



@NgModule({
  declarations: [OwnerComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    OwnerComponent
  ]
})
export class ContainersModule { }
