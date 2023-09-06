import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowCardComponent } from './workflow-card/workflow-card.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { DialogShareComponent } from './dialog-share/dialog-share.component';
import { DialogDuplicateComponent } from './dialog-duplicate/dialog-duplicate.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { WorkflowFormComponent } from './workflow-form/workflow-form.component';

@NgModule({
  declarations: [
    WorkflowCardComponent,
    DialogShareComponent,
    DialogDuplicateComponent,
    DialogDeleteComponent,
    WorkflowFormComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [WorkflowCardComponent, WorkflowFormComponent],
})
export class ComponentsModule {}
