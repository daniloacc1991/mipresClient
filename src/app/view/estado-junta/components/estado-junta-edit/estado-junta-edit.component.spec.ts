import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoJuntaEditComponent } from './estado-junta-edit.component';

describe('EstadoJuntaEditComponent', () => {
  let component: EstadoJuntaEditComponent;
  let fixture: ComponentFixture<EstadoJuntaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoJuntaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoJuntaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
