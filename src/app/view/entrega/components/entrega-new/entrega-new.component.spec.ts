import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaNewComponent } from './entrega-new.component';

describe('EntregaNewComponent', () => {
  let component: EntregaNewComponent;
  let fixture: ComponentFixture<EntregaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
