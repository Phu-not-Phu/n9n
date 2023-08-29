import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  declarations: [ProjectListComponent],
  imports: [CommonModule, ComponentsModule, SharedModule],
  exports: [ProjectListComponent],
})
export class ContainersModule {}
