import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoJuntaIndexComponent } from './estado-junta-index.component';

describe('EstadoJuntaIndexComponent', () => {
  let component: EstadoJuntaIndexComponent;
  let fixture: ComponentFixture<EstadoJuntaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoJuntaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoJuntaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
