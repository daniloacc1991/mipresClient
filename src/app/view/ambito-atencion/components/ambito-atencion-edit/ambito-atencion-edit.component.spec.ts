import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitoAtencionEditComponent } from './ambito-atencion-edit.component';

describe('AmbitoAtencionEditComponent', () => {
  let component: AmbitoAtencionEditComponent;
  let fixture: ComponentFixture<AmbitoAtencionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitoAtencionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitoAtencionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
