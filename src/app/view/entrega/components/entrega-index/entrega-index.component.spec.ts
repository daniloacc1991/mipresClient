import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaIndexComponent } from './entrega-index.component';

describe('EntregaIndexComponent', () => {
  let component: EntregaIndexComponent;
  let fixture: ComponentFixture<EntregaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
