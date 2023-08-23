import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperComponent } from './navigation/helper/helper.component';
import { UserComponent } from './navigation/user/user.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MainComponent } from './navigation/main/main.component';
import { SettingComponent } from './navigation/Settings/setting/setting.component';
import { MainSettingComponent } from './settings/main-setting/main-setting.component';

@NgModule({
  declarations: [MainComponent, HelperComponent, UserComponent, SettingComponent, MainSettingComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent, HelperComponent, UserComponent, MainSettingComponent],
})
export class ComponentModule {}
