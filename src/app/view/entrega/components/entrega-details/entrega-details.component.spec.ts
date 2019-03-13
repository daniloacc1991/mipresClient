import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaDetailsComponent } from './entrega-details.component';

describe('EntregaDetailsComponent', () => {
  let component: EntregaDetailsComponent;
  let fixture: ComponentFixture<EntregaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
