import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausaNoEntregaNewComponent } from './causa-no-entrega-new.component';

describe('CausaNoEntregaNewComponent', () => {
  let component: CausaNoEntregaNewComponent;
  let fixture: ComponentFixture<CausaNoEntregaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausaNoEntregaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausaNoEntregaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
