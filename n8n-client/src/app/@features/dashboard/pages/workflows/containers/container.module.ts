import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../components/component.module';
import { WorkflowsContentComponent } from './workflows-content/workflows-content.component';

@NgModule({
  declarations: [WorkflowsContentComponent],
  imports: [CommonModule, ComponentModule],
  exports: [WorkflowsContentComponent],
})
export class ContainerModule {}
