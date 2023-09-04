import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { ContainersModule } from './containers/containers.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, SharedModule, ComponentsModule, ContainersModule],
})
export class RegisterModule {}
