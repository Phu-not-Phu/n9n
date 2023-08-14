import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const CORE_MODULES = [
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...CORE_MODULES
  ],
  exports: [
    ...CORE_MODULES
  ]
})
export class CoreModule { }
