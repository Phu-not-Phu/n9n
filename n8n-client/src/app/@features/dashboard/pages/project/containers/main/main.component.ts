import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { FormExport } from 'src/app/models/type-helper.model';

import { projectActions } from '../../../projects/ngrx/project.actions';
import { ProjectState } from '../../../projects/ngrx/project.state';

import { workflowActions } from '../../ngrx/workflow.actions';
import { WorkflowState } from '../../ngrx/workflow.state';
import { CreateWorkflow } from '../../models/workflow.model';


@Component({
  selector: 'app-project-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(
    private router: Router,
    private store: Store<{ project: ProjectState, workflow: WorkflowState }>
  ) { }

  projectState$!: Observable<ProjectState>;
  workflowState$!: Observable<WorkflowState>;

  currentProjectID: string = '';

  ngOnInit(): void {

    this.currentProjectID = this.router.url.split('/')[3];
    this.projectState$ = this.store.select('project');
    this.workflowState$ = this.store.select('workflow');

    if (!this.currentProjectID) {
      this.router.navigate(['projects']);
    } else {
      this.store.dispatch(
        projectActions.loadProject({ id: this.currentProjectID })
      );
    }

    this.store.dispatch(workflowActions.loadWorkflows({ projectID: this.currentProjectID }));
    this.workflowState$.subscribe(console.log);
  }

  handleAddWorkflow(workflow: FormExport<CreateWorkflow>) {
    const tempWorkflow: CreateWorkflow = {
      name: workflow.name!,
      projectID: this.currentProjectID,
    }

    this.store.dispatch(workflowActions.createWorkflow({ workflow: tempWorkflow }));
  }
}
