import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsRoutingModule } from './credentials-routing.module';
import { CredentialsComponent } from './credentials.component';
import { ComponentModule } from './components/component.module';
import { ContainerModule } from './containers/container.module';
import { SharedModule } from 'src/app/@shared/shared.module';


@NgModule({
  declarations: [
    CredentialsComponent,
  ],
  imports: [
    CommonModule,
    CredentialsRoutingModule,
    ContainerModule,
    SharedModule,
  ]
})
export class CredentialsModule { }
