import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausaNoEntregaListComponent } from './causa-no-entrega-list.component';

describe('CausaNoEntregaListComponent', () => {
  let component: CausaNoEntregaListComponent;
  let fixture: ComponentFixture<CausaNoEntregaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausaNoEntregaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausaNoEntregaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
