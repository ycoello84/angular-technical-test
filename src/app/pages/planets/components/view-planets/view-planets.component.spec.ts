import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlanetsComponent } from './view-planets.component';

describe('ViewPlanetsComponent', () => {
  let component: ViewPlanetsComponent;
  let fixture: ComponentFixture<ViewPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
