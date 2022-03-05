import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupshareComponent } from './groupshare.component';

describe('GroupshareComponent', () => {
  let component: GroupshareComponent;
  let fixture: ComponentFixture<GroupshareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupshareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
