import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNutritionalDetailComponent } from './product-nutritional-detail.component';

describe('ProductNutritionalDetailComponent', () => {
  let component: ProductNutritionalDetailComponent;
  let fixture: ComponentFixture<ProductNutritionalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNutritionalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNutritionalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
