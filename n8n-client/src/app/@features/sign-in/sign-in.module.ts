import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';

import { ComponentModule } from './components/component.module';
import { ContainerModule } from './containers/container.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ComponentModule,
    ContainerModule,
  ],
})
export class SignInModule {}
