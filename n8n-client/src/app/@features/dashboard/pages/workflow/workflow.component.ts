import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { EditorService } from './services/editor.service';
import { CoreServerService } from './services/core-server.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Workflow } from './models/workflow.model';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss'],
})
export class WorkflowComponent {
  workflow$ = new Subject<Workflow>();

  constructor(
    private injector: Injector,
    private router: Router,
    private editor: EditorService,
    private coreServerService: CoreServerService
  ) {}
  @ViewChild('editor') editorElement!: ElementRef<HTMLDivElement>;

  ngOnInit() {
    const id = this.router.url.split('/').pop();

    if (id !== undefined) {
      this.coreServerService.getWorkflow(id).subscribe((workflow: Workflow) => {
        this.workflow$.next(<Workflow>workflow);
      });
    }
  }

  ngAfterViewInit() {
    this.editor.contruct(this.editorElement.nativeElement, this.injector);
    this.workflow$.subscribe((workflow: Workflow) => {
      this.editor.loadEditor(workflow);
    });
  }
}
