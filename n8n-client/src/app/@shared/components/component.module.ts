import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialComponent } from './filter-box/credential/credential.component';
import { ExecutionComponent } from './filter-box/execution/execution.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [CredentialComponent, ExecutionComponent, DialogComponent],
  imports: [CommonModule],
  exports: [CredentialComponent, ExecutionComponent, DialogComponent],
})
export class ComponentModule { }
