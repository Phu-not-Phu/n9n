import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { CreatedProjectComponent } from './created-project/created-project.component';

@NgModule({
  declarations: [
    NewProjectComponent,
    CreatedProjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewProjectComponent,
    CreatedProjectComponent
  ]
})
export class ComponentsModule { }
