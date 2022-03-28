import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPeopleComponent } from './container-people.component';

describe('ContainerPeopleComponent', () => {
  let component: ContainerPeopleComponent;
  let fixture: ComponentFixture<ContainerPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
