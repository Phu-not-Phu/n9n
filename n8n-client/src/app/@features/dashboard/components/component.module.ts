import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperComponent } from './helper/helper.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { NavigationContentComponent } from './navigation-content/navigation-content.component';


@NgModule({
  declarations: [
    NavigationContentComponent,
    HelperComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationContentComponent,
    HelperComponent,
    UserComponent
  ]
})
export class ComponentModule { }
