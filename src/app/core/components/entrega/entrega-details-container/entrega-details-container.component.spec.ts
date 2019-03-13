import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaDetailsContainerComponent } from './entrega-details-container.component';

describe('EntregaDetailsContainerComponent', () => {
  let component: EntregaDetailsContainerComponent;
  let fixture: ComponentFixture<EntregaDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
