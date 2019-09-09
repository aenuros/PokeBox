import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveSetComponent } from './move-set.component';

describe('MoveSetComponent', () => {
  let component: MoveSetComponent;
  let fixture: ComponentFixture<MoveSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
