import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { EditorService } from './services/editor.service';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent {
  constructor(private injector: Injector, private editor: EditorService) {}
  @ViewChild('editor') editorElement!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.editor.contruct(this.editorElement.nativeElement, this.injector);
    this.editor.testAdd2Nodes();
  }
}
