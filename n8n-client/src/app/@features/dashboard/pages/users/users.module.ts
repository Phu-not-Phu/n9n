import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ComponentsModule } from './components/components.module';
import { ContainersModule } from './containers/containers.module';



@NgModule({
  declarations: [UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ComponentsModule,
    ContainersModule,
  ]
})
export class UsersModule { }
