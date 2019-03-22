import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoJuntaNewComponent } from './estado-junta-new.component';

describe('EstadoJuntaNewComponent', () => {
  let component: EstadoJuntaNewComponent;
  let fixture: ComponentFixture<EstadoJuntaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoJuntaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoJuntaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
