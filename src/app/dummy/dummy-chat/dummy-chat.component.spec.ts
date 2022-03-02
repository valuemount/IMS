import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyChatComponent } from './dummy-chat.component';

describe('DummyChatComponent', () => {
  let component: DummyChatComponent;
  let fixture: ComponentFixture<DummyChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
