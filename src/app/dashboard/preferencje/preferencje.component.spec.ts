import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencjeComponent } from './preferencje.component';

describe('PreferencjeComponent', () => {
  let component: PreferencjeComponent;
  let fixture: ComponentFixture<PreferencjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferencjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
