import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [SignInFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [SignInFormComponent],
})
export class ComponentModule {}
