import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfiguracjaComponent } from './konfiguracja.component';

describe('KonfiguracjaComponent', () => {
  let component: KonfiguracjaComponent;
  let fixture: ComponentFixture<KonfiguracjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonfiguracjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfiguracjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
