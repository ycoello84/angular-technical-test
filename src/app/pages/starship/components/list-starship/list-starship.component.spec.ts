import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStarshipComponent } from './list-starship.component';

describe('ListStarshipComponent', () => {
  let component: ListStarshipComponent;
  let fixture: ComponentFixture<ListStarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStarshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
