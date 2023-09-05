import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProjectState } from '../../../projects/ngrx/project.state';
import { Observable } from 'rxjs';
import { projectActions } from '../../../projects/ngrx/project.actions';
import { CreateWorkflow, Workflow } from '../../models/workflow.model';
import { FormExport } from 'src/app/models/type-helper.model';

@Component({
  selector: 'app-project-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(
    private router: Router,
    private store: Store<{ project: ProjectState }>
  ) {}

  projectState$!: Observable<ProjectState>;

  currentProjectID: string = '';

  ngOnInit(): void {
    this.currentProjectID = this.router.url.split('/')[3];
    this.projectState$ = this.store.select('project');

    if (!this.currentProjectID) {
      this.router.navigate(['projects']);
    } else {
      this.store.dispatch(
        projectActions.loadProject({ id: this.currentProjectID })
      );
    }

    this.projectState$.subscribe(console.log);
  }

  handleAddWorkflow(workflow: FormExport<CreateWorkflow>) {}
}
