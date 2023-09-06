import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterMainComponent } from './register-main/register-main.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [RegisterMainComponent],
  imports: [CommonModule, SharedModule, ComponentsModule],
  exports: [RegisterMainComponent],
})
export class ContainersModule {}
