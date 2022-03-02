import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyAuthenticationComponent } from './dummy-authentication.component';

describe('DummyAuthenticationComponent', () => {
  let component: DummyAuthenticationComponent;
  let fixture: ComponentFixture<DummyAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyAuthenticationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
