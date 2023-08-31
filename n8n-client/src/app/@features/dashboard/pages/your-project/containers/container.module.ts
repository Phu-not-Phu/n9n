import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowCardComponent } from './workflow-card/workflow-card.component';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  declarations: [WorkflowCardComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [WorkflowCardComponent],
})
export class ContainersModule {}
