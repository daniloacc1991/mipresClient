import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionDetalleJuntaIndexComponent } from './prescripcion-detalle-junta-index.component';

describe('PrescripcionDetalleJuntaIndexComponent', () => {
  let component: PrescripcionDetalleJuntaIndexComponent;
  let fixture: ComponentFixture<PrescripcionDetalleJuntaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionDetalleJuntaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionDetalleJuntaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
