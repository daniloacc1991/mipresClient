import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitoAtencionNewComponent } from './ambito-atencion-new.component';

describe('AmbitoAtencionNewComponent', () => {
  let component: AmbitoAtencionNewComponent;
  let fixture: ComponentFixture<AmbitoAtencionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitoAtencionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitoAtencionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
