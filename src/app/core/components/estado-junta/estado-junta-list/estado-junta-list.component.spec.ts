import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoJuntaListComponent } from './estado-junta-list.component';

describe('EstadoJuntaListComponent', () => {
  let component: EstadoJuntaListComponent;
  let fixture: ComponentFixture<EstadoJuntaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoJuntaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoJuntaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
