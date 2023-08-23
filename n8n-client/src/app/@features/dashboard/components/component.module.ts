import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperComponent } from './navigation/helper/helper.component';
import { UserComponent } from './navigation/user/user.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { MainComponent } from './navigation/main/main.component';
import { SearchComponent } from './filter-box/search/search.component';
import { TypeComponent } from './filter-box/type/type.component';

@NgModule({
  declarations: [
    MainComponent,
    HelperComponent,
    UserComponent,
    SearchComponent,
    TypeComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    MainComponent,
    HelperComponent,
    UserComponent,
    SearchComponent,
    TypeComponent,
  ],
})
export class ComponentModule {}
