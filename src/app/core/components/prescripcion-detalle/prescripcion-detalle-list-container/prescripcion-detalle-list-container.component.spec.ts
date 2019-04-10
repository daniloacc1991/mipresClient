import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionDetalleListContainerComponent } from './prescripcion-detalle-list-container.component';

describe('PrescripcionDetalleListContainerComponent', () => {
  let component: PrescripcionDetalleListContainerComponent;
  let fixture: ComponentFixture<PrescripcionDetalleListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionDetalleListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionDetalleListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
