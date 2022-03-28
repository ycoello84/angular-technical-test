import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerSpeciesComponent } from './container-species.component';

describe('ContainerSpeciesComponent', () => {
  let component: ContainerSpeciesComponent;
  let fixture: ComponentFixture<ContainerSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
