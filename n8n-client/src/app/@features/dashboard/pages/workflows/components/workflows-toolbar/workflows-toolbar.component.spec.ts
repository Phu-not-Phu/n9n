import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsToolbarComponent } from './workflows-toolbar.component';

describe('WorkflowsToolbarComponent', () => {
  let component: WorkflowsToolbarComponent;
  let fixture: ComponentFixture<WorkflowsToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowsToolbarComponent]
    });
    fixture = TestBed.createComponent(WorkflowsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
