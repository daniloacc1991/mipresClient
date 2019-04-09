import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausaNoEntregaFormComponent } from './causa-no-entrega-form.component';

describe('CausaNoEntregaFormComponent', () => {
  let component: CausaNoEntregaFormComponent;
  let fixture: ComponentFixture<CausaNoEntregaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausaNoEntregaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausaNoEntregaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
