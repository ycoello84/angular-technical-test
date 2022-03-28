import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerVehiclesComponent } from './container-vehicles.component';

describe('ContainerVehiclesComponent', () => {
  let component: ContainerVehiclesComponent;
  let fixture: ComponentFixture<ContainerVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerVehiclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
