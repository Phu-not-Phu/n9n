import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';
import { FormExport } from 'src/app/models/type-helper.model';
import { DialogComponent } from 'src/app/@shared/components/dialog/dialog.component';
import { Store } from '@ngrx/store';
import { ProjectState } from '../../ngrx/project.state';
import { projectActions } from '../../ngrx/project.actions';
import { Observable, lastValueFrom, take } from 'rxjs';
import { UserState } from 'src/app/ngrx/user/user.state';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  notificationMessage: string = 'Project created successfully!';

  currentUser: UserModel | null | undefined;

  projectState$!: Observable<ProjectState>;
  userState$!: Observable<UserState>;

  @Input() quantity: number = 0;

  @ViewChild('dialog') dialog: DialogComponent | undefined;
  @ViewChild('notificationDialog') notificationDialog:
    | DialogComponent
    | undefined;

  constructor(
    private store: Store<{ project: ProjectState; user: UserState }>
  ) {}

  async ngOnInit() {
    this.projectState$ = this.store.select('project');
    this.userState$ = this.store.select('user');

    this.currentUser = await lastValueFrom(this.userState$.pipe(take(1))).then(
      (user) => user.user
    );

    this.userState$.subscribe((userState) => {
      this.currentUser = userState.user;

      this.store.dispatch(
        projectActions.loadProjects({ uid: this.currentUser?.uid || '' })
      );
    });

    this.store.dispatch(
      projectActions.loadProjects({ uid: this.currentUser?.uid || '' })
    );
  }

  async createProject(project: FormExport<Project>) {
    const newProject: Project = {
      name: project.name || 'Untitled Project',
      description: project.description || 'No description provided',
      ownerID: this.currentUser?.uid,
    };

    this.store.dispatch(projectActions.createProject({ project: newProject }));
  }
}
