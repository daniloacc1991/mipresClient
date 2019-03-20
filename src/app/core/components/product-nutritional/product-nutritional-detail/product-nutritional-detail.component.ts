import { Component, OnInit, Input } from '@angular/core';
import { ProductNutritional } from '@app-models/index';

@Component({
  selector: 'app-product-nutritional-detail',
  templateUrl: './product-nutritional-detail.component.html',
  styleUrls: ['./product-nutritional-detail.component.scss']
})
export class ProductNutritionalDetailComponent implements OnInit {

  @Input() products: ProductNutritional[];

  tipoPrestacion = [{ id: 1, descripcion: 'Única' }, { id: 2, descripcion: 'Sucesiva' }];

  constructor() { }

  ngOnInit() {
  }

}
