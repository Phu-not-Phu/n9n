import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { DocsCardComponent } from './docs-card/docs-card.component';

@NgModule({
  declarations: [CourseCardComponent, DocsCardComponent],
  imports: [CommonModule],
  exports: [CourseCardComponent, DocsCardComponent],
})
export class ComponentModule {}
