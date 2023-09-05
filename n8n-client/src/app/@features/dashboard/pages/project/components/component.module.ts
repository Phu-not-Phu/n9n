import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowCardComponent } from './workflow-card/workflow-card.component';
import { InfomationComponent } from './infomation/infomation.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { WorkflowListComponent } from './workflow-list/workflow-list.component';
import { WorkflowFormComponent } from './workflow-form/workflow-form.component';

@NgModule({
  declarations: [
    WorkflowCardComponent,
    InfomationComponent,
    ToolbarComponent,
    WorkflowListComponent,
    WorkflowFormComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    WorkflowCardComponent,
    InfomationComponent,
    ToolbarComponent,
    WorkflowListComponent,
    WorkflowFormComponent,
  ],
})
export class ComponentsModule {}
