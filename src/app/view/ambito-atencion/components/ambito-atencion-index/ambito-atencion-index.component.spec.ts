import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitoAtencionIndexComponent } from './ambito-atencion-index.component';

describe('AmbitoAtencionIndexComponent', () => {
  let component: AmbitoAtencionIndexComponent;
  let fixture: ComponentFixture<AmbitoAtencionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitoAtencionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitoAtencionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
