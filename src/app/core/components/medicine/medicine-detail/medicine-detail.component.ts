import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Medicine, Presentacion } from '@app-models/index';
import { PresentacionService } from 'src/app/view/presentacion/services/presentacion.service';


@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.scss']
})
export class MedicineDetailComponent implements OnInit, OnChanges {

  @Input() medicines: Medicine[];

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

  presentaciones: Presentacion[]

  constructor(
    private presentacionService: PresentacionService,
  ) { }

  ngOnInit() {
    this.presentacionService.findAll().subscribe(
      res => {
        this.presentaciones = res;
      }
    );
  }

  ngOnChanges() {
    if(this.medicines) {
      this.ngOnInit();
    }
  }

}
