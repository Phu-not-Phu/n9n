import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/component.module';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, SharedModule, ComponentsModule],
  exports: [MainComponent],
})
export class ContainersModule {}
