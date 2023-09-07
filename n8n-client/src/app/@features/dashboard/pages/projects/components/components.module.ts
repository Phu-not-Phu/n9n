import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { CreatedProjectComponent } from './created-project/created-project.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [
    NewProjectComponent,
    CreatedProjectComponent,
    ProjectFormComponent,
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
