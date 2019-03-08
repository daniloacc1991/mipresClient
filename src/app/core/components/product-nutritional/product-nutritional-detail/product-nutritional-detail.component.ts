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
  frecuenciasAdministracion = [
    { id: 1, descripcion: 'Minuto(s)' },
    { id: 2, descripcion: 'Hora(s)' },
    { id: 3, descripcion: 'Día(s)' },
    { id: 4, descripcion: 'Semana(s)' },
    { id: 5, descripcion: 'Mes(es)' },
    { id: 6, descripcion: 'Año' },
    { id: 7, descripcion: 'Según respuesta al tratamiento' },
    { id: 8, descripcion: 'Única' }
  ];
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
  indicacionesEspeciales = [
    { id: 1, descripcion: 'Administración en dosis única' },
    { id: 2, descripcion: 'Administración inmediata' },
    { id: 3, descripcion: 'Administrar en Bolo' },
    { id: 4, descripcion: 'Administrar en Goteo' },
    { id: 5, descripcion: 'Infusión contínua' },
    { id: 6, descripcion: 'Infusión intermitente' },
    { id: 7, descripcion: 'Infusión intermitente simultánea con perfusión de otra solución' },
    { id: 8, descripcion: 'Microgoteo' },
    { id: 9, descripcion: 'Perfusión' },
    { id: 10, descripcion: 'Sin indicación Especial' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
