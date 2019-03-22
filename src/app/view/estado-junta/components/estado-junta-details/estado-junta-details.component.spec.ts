import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoJuntaDetailsComponent } from './estado-junta-details.component';

describe('EstadoJuntaDetailsComponent', () => {
  let component: EstadoJuntaDetailsComponent;
  let fixture: ComponentFixture<EstadoJuntaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoJuntaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoJuntaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
