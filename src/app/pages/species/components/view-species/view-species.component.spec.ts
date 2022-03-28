import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpeciesComponent } from './view-species.component';

describe('ViewSpeciesComponent', () => {
  let component: ViewSpeciesComponent;
  let fixture: ComponentFixture<ViewSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpeciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
