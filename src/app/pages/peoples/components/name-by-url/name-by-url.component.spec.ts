import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameByUrlComponent } from './name-by-url.component';

describe('NameByUrlComponent', () => {
  let component: NameByUrlComponent;
  let fixture: ComponentFixture<NameByUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameByUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameByUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
