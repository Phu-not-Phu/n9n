import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreCardComponent } from './cre-card/cre-card.component';
import { SelectListComponent } from './select-list/select-list.component';

@NgModule({
  declarations: [
    CreCardComponent,
    SelectListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreCardComponent,
    SelectListComponent
  ],
})
export class ComponentModule { }
