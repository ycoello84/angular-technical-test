import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStarshipComponent } from './view-starship.component';

describe('ViewStarshipComponent', () => {
  let component: ViewStarshipComponent;
  let fixture: ComponentFixture<ViewStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewStarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
