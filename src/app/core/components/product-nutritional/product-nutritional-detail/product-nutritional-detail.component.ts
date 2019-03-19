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
  viaAdministracion = [
    { id: 1, descripcion: 'ORAL' },
    { id: 2, descripcion: 'SONDA' }
  ];
  presentaciones = [
    { id: 1, descripcion: 'Bolsa' },
    { id: 2, descripcion: 'Bolsa ultrapack' },
    { id: 3, descripcion: 'Botella' },
    { id: 4, descripcion: 'EasyBag' },
    { id: 5, descripcion: 'Lata' },
    { id: 6, descripcion: 'LOC' },
    { id: 7, descripcion: 'LPC' },
    { id: 8, descripcion: 'LPM' },
    { id: 9, descripcion: 'Sobre' },
    { id: 10, descripcion: 'Tetraprisma' },
    { id: 11, descripcion: 'Ultrapack' },
    { id: 12, descripcion: 'Frasco' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
