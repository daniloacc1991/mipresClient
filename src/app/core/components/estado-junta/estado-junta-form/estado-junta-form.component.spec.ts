import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoJuntaFormComponent } from './estado-junta-form.component';

describe('EstadoJuntaFormComponent', () => {
  let component: EstadoJuntaFormComponent;
  let fixture: ComponentFixture<EstadoJuntaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoJuntaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoJuntaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
