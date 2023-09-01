import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialComponent } from './filter-box/credential/credential.component';
import { ExecutionComponent } from './filter-box/execution/execution.component';
import { DialogComponent } from './dialog/dialog.component';
import { SortListBoxComponent } from './sort-list-box/sort-list-box.component';
import { WorkflowComponent } from './filter-box/workflow/workflow.component';

@NgModule({
  declarations: [
    CredentialComponent,
    ExecutionComponent,
    DialogComponent,
    SortListBoxComponent,
    WorkflowComponent,
  ],
  imports: [CommonModule],
  exports: [
    CredentialComponent,
    ExecutionComponent,
    DialogComponent,
    SortListBoxComponent,
    WorkflowComponent,
  ],
})
export class ComponentModule {}
