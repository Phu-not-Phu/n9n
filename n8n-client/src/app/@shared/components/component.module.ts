import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialComponent } from './filter-box/credential/credential.component';
import { ExecutionComponent } from './filter-box/execution/execution.component';

@NgModule({
  declarations: [CredentialComponent, ExecutionComponent],
  imports: [CommonModule],
  exports: [CredentialComponent, ExecutionComponent],
})
export class ComponentModule {}
