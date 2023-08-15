import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowsListCardComponent } from './workflows-list-card.component';

describe('WorkflowsListCardComponent', () => {
  let component: WorkflowsListCardComponent;
  let fixture: ComponentFixture<WorkflowsListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkflowsListCardComponent]
    });
    fixture = TestBed.createComponent(WorkflowsListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
