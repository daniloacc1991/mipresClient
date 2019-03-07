import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbitoAtencionListComponent } from './ambito-atencion-list.component';

describe('AmbitoAtencionListComponent', () => {
  let component: AmbitoAtencionListComponent;
  let fixture: ComponentFixture<AmbitoAtencionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbitoAtencionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbitoAtencionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
