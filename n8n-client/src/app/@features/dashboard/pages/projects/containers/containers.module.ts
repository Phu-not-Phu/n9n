import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectComponent } from './new-project/new-project.component';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from 'src/app/@shared/shared.module';

@NgModule({
  declarations: [NewProjectComponent],
  imports: [CommonModule, ComponentsModule, SharedModule],
  exports: [NewProjectComponent],
})
export class ContainersModule { }
