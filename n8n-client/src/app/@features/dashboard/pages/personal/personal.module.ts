import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './personal.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ChangePassFormComponent } from './change-pass-form/change-pass-form.component';

@NgModule({
  declarations: [
    PersonalComponent,
    ChangePassFormComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    SharedModule
  ]
})
export class PersonalModule { }
