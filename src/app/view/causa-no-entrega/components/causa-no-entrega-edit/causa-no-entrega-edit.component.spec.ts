import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausaNoEntregaEditComponent } from './causa-no-entrega-edit.component';

describe('CausaNoEntregaEditComponent', () => {
  let component: CausaNoEntregaEditComponent;
  let fixture: ComponentFixture<CausaNoEntregaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausaNoEntregaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausaNoEntregaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
