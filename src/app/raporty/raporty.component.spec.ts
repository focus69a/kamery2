import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportyComponent } from './raporty.component';

describe('RaportyComponent', () => {
  let component: RaportyComponent;
  let fixture: ComponentFixture<RaportyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaportyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
