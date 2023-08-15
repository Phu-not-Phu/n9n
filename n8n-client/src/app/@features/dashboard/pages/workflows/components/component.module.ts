import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowsToolbarComponent } from './workflows-toolbar/workflows-toolbar.component';
import { WorkflowsListComponent } from './workflows-list/workflows-list.component';
import { WorkflowsListCardComponent } from './workflows-list-card/workflows-list-card.component';

@NgModule({
  declarations: [
    WorkflowsToolbarComponent,
    WorkflowsListComponent,
    WorkflowsListCardComponent,
  ],
  imports: [CommonModule],
  exports: [
    WorkflowsToolbarComponent,
    WorkflowsListComponent,
    WorkflowsListCardComponent,
  ],
})
export class ComponentModule {}
