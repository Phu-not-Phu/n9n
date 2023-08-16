import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { createEditor } from './services/editor';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent {
  constructor(private injector: Injector) { }

  @ViewChild("editor") editor!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    const el = this.editor.nativeElement;

    if (el) {
      createEditor(el, this.injector);
    }
  }
}
