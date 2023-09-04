import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { CreatedProjectComponent } from './created-project/created-project.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogSettingComponent } from './dialog-setting/dialog-setting.component';

@NgModule({
  declarations: [
    NewProjectComponent,
    CreatedProjectComponent,
    ProjectFormComponent,
    DialogDeleteComponent,
    DialogSettingComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NewProjectComponent,
    CreatedProjectComponent,
    ProjectFormComponent
  ]
})
export class ComponentsModule { }
