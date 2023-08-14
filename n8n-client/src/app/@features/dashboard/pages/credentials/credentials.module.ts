import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsRoutingModule } from './credentials-routing.module';
import { CredentialsComponent } from './credentials.component';
import { ComponentModule } from './components/component.module';
import { ContainerModule } from './containers/container.module';


@NgModule({
  declarations: [
    CredentialsComponent
  ],
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    ContainerModule
  ]
})
export class CredentialsModule { }
