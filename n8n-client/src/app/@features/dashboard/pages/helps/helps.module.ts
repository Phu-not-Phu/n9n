import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpsRoutingModule } from './helps-routing.module';
import { HelpsComponent } from './helps.component';


@NgModule({
  declarations: [
    HelpsComponent
  ],
  imports: [
    CommonModule,
    HelpsRoutingModule
  ]
})
export class HelpsModule { }
