import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPeoplesComponent } from './view-peoples.component';

describe('ViewPeoplesComponent', () => {
  let component: ViewPeoplesComponent;
  let fixture: ComponentFixture<ViewPeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPeoplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
