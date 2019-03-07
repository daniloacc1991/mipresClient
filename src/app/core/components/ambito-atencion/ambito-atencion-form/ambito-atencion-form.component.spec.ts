import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitoAtencionFormComponent } from './ambito-atencion-form.component';

describe('AmbitoAtencionFormComponent', () => {
  let component: AmbitoAtencionFormComponent;
  let fixture: ComponentFixture<AmbitoAtencionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitoAtencionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitoAtencionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
