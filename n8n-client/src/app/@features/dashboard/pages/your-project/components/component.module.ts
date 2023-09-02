import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowCardComponent } from './workflow-card/workflow-card.component';

@NgModule({
  declarations: [WorkflowCardComponent],
  imports: [CommonModule],
  exports: [WorkflowCardComponent],
})
export class ComponentsModule {}
