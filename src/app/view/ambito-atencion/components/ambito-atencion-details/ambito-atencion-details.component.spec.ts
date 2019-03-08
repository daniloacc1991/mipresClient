import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitoAtencionDetailsComponent } from './ambito-atencion-details.component';

describe('AmbitoAtencionDetailsComponent', () => {
  let component: AmbitoAtencionDetailsComponent;
  let fixture: ComponentFixture<AmbitoAtencionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitoAtencionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitoAtencionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
