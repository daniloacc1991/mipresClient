import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioComplementarioDetalleComponent } from './servicio-complementario-detalle.component';

describe('ServicioComplementarioDetalleComponent', () => {
  let component: ServicioComplementarioDetalleComponent;
  let fixture: ComponentFixture<ServicioComplementarioDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioComplementarioDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioComplementarioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
