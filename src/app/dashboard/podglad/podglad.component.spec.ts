import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodgladComponent } from './podglad.component';

describe('PodgladComponent', () => {
  let component: PodgladComponent;
  let fixture: ComponentFixture<PodgladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodgladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodgladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
