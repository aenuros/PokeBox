import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeboxComponent } from './pokebox.component';

describe('PokeboxComponent', () => {
  let component: PokeboxComponent;
  let fixture: ComponentFixture<PokeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
