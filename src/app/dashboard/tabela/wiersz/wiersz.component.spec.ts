import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WierszComponent } from './wiersz.component';

describe('WierszComponent', () => {
  let component: WierszComponent;
  let fixture: ComponentFixture<WierszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WierszComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WierszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
