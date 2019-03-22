import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoJuntaDetalleComponent } from './estado-junta-detalle.component';

describe('EstadoJuntaDetalleComponent', () => {
  let component: EstadoJuntaDetalleComponent;
  let fixture: ComponentFixture<EstadoJuntaDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoJuntaDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoJuntaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
