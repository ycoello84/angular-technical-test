import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPlanetsComponent } from './container-planets.component';

describe('ContainerPlanetsComponent', () => {
  let component: ContainerPlanetsComponent;
  let fixture: ComponentFixture<ContainerPlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPlanetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
