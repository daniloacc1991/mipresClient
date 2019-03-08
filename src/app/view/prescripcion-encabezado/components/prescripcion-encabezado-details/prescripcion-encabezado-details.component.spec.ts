import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionEncabezadoDetailsComponent } from './prescripcion-encabezado-details.component';

describe('PrescripcionShowComponent', () => {
  let component: PrescripcionEncabezadoDetailsComponent;
  let fixture: ComponentFixture<PrescripcionEncabezadoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionEncabezadoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionEncabezadoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
