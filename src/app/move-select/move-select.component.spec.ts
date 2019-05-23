import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveSelectComponent } from './move-select.component';

describe('MoveSelectComponent', () => {
  let component: MoveSelectComponent;
  let fixture: ComponentFixture<MoveSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
