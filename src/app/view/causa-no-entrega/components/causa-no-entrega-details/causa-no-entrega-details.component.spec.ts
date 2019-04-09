import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausaNoEntregaDetailsComponent } from './causa-no-entrega-details.component';

describe('CausaNoEntregaDetailsComponent', () => {
  let component: CausaNoEntregaDetailsComponent;
  let fixture: ComponentFixture<CausaNoEntregaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausaNoEntregaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausaNoEntregaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
