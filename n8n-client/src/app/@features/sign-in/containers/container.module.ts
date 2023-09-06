import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
import { SignInBoxComponent } from './sign-in-box/sign-in-box.component';

@NgModule({
  declarations: [SignInBoxComponent],
  imports: [CommonModule, ComponentModule],
  exports: [SignInBoxComponent],
})
export class ContainerModule {}
