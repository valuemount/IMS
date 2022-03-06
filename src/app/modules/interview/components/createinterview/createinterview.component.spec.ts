import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinterviewComponent } from './createinterview.component';

describe('CreateinterviewComponent', () => {
  let component: CreateinterviewComponent;
  let fixture: ComponentFixture<CreateinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateinterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
