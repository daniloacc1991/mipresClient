import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionEncabezadoIndexComponent } from './prescripcion-encabezado-index.component';

describe('PrescripcionEncabezadoIndexComponent', () => {
  let component: PrescripcionEncabezadoIndexComponent;
  let fixture: ComponentFixture<PrescripcionEncabezadoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionEncabezadoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionEncabezadoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
