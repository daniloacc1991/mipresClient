import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescripcionDetailsComponent } from './prescripcion-details.component';

describe('PrescripcionDetailsComponent', () => {
  let component: PrescripcionDetailsComponent;
  let fixture: ComponentFixture<PrescripcionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescripcionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescripcionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
