import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsContentComponent } from './workflows-content.component';

describe('WorkflowsContentComponent', () => {
  let component: WorkflowsContentComponent;
  let fixture: ComponentFixture<WorkflowsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowsContentComponent]
    });
    fixture = TestBed.createComponent(WorkflowsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
