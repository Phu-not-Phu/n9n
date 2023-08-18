import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [NewProjectComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [NewProjectComponent],
})
export class ContainersModule {}
