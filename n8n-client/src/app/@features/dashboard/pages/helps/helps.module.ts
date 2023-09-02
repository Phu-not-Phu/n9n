import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpsRoutingModule } from './helps-routing.module';
import { HelpsComponent } from './helps.component';
import { ComponentModule } from './components/component.module';
@NgModule({
  declarations: [HelpsComponent],
  imports: [CommonModule, HelpsRoutingModule, ComponentModule],
  exports: [HelpsComponent],
})
export class HelpsModule {}
