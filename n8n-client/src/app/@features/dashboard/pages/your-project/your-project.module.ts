import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourProjectRoutingModule } from './your-project-routing.module';
import { YourProjectComponent } from './your-project.component';


@NgModule({
  declarations: [
    YourProjectComponent
  ],
  imports: [
    CommonModule,
    YourProjectRoutingModule
  ]
})
export class YourProjectModule { }
