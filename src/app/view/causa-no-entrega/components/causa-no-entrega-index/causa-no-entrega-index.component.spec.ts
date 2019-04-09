import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausaNoEntregaIndexComponent } from './causa-no-entrega-index.component';

describe('CausaNoEntregaIndexComponent', () => {
  let component: CausaNoEntregaIndexComponent;
  let fixture: ComponentFixture<CausaNoEntregaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausaNoEntregaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausaNoEntregaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
