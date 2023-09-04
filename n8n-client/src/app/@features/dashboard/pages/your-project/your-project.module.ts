import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourProjectRoutingModule } from './your-project-routing.module';
import { YourProjectComponent } from './your-project.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ContainersModule } from './containers/container.module';
import { ComponentsModule } from './components/component.module';

@NgModule({
  declarations: [YourProjectComponent],
  imports: [
    CommonModule,
    YourProjectRoutingModule,
    SharedModule,
    ContainersModule,
    ComponentsModule
  ],
})
export class YourProjectModule {}
