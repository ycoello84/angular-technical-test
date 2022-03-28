import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerStarshipComponent } from './container-starship.component';

describe('ContainerStarshipComponent', () => {
  let component: ContainerStarshipComponent;
  let fixture: ComponentFixture<ContainerStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerStarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
