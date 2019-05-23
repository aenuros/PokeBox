import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamWeaknessAnalyzerComponent } from './team-weakness-analyzer.component';

describe('TeamWeaknessAnalyzerComponent', () => {
  let component: TeamWeaknessAnalyzerComponent;
  let fixture: ComponentFixture<TeamWeaknessAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamWeaknessAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamWeaknessAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
