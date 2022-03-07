import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewsDashboardComponent } from './interviews-dashboard.component';

describe('InterviewsDashboardComponent', () => {
  let component: InterviewsDashboardComponent;
  let fixture: ComponentFixture<InterviewsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
