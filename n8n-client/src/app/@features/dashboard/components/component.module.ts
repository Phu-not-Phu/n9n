import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperComponent } from './navigation/helper/helper.component';
import { UserComponent } from './navigation/user/user.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MainComponent } from './navigation/main/main.component';
import { MainSettingsComponent } from './settings/main-settings/main-settings.component';

@NgModule({
  declarations: [MainComponent, HelperComponent, UserComponent, MainSettingsComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent, HelperComponent, UserComponent, MainSettingsComponent],
})
export class ComponentModule { }
