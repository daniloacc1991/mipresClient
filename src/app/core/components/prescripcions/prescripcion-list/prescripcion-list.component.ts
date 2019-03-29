import { Component, OnInit, EventEmitter, ChangeDetectionStrategy, Input, Output, PipeTransform, OnChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Prescripcion, ImportarxFecha, ImportaFechaSuccess } from '@app-models/index';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

// DataPicker Angular Material
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-prescripcion-list',
  templateUrl: './prescripcion-list.component.html',
  styleUrls: ['./prescripcion-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    DatePipe,
    MessageService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class PrescripcionListComponent implements OnInit, OnChanges {

  @Input() prescripcions: Prescripcion[];
  @Input() isLoading: boolean;
  @Input() msjImport: ImportaFechaSuccess;
  @Output() edit = new EventEmitter<Prescripcion>();
  @Output() show = new EventEmitter<Prescripcion>();
  @Output() remove = new EventEmitter<Prescripcion>();
  @Output() import = new EventEmitter<ImportarxFecha>();

  prescripcions$: Observable<Prescripcion[]>;
  showForm: boolean = false;
  filter = new FormControl('');
  form: FormGroup;

  page = 1;
  pageSize = 10;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private datePipe: DatePipe,
  ) {
    this.filterPrescripcions();
    this.form = this.formBuilder.group({
      'token': ['', Validators.required],
      'nit': ['', [
        Validators.required,
        Validators.minLength(8),
      ]],
      'fecha': [moment(), Validators.required]
    });
  }

  ngOnInit() {
  }

  importPrescripcion() {
    const data: ImportarxFecha = {
      token: this.form.value.token,
      nit: this.form.value.nit,
      fecha: this.form.value.fecha.format('YYYY-MM-DD')
    }
    this.import.emit(data)
  }

  ngOnChanges() {
    this.filterPrescripcions();
    if (this.msjImport) {
      if (this.msjImport.success.length > 0) {
        this.msjImport.success.map(r => {
          this.messageService.add(
            {
              life: 5000,
              severity: 'success',
              summary: 'Prescripción Importada',
              detail: `Se importó la prescripción N° ${r}`
            }
          );
        })
      } else if (this.msjImport.fails.length > 0) {
        this.msjImport.fails.map(r => {
          this.messageService.add(
            {
              life: 5000,
              severity: 'error',
              summary: 'Prescripción Fallida',
              detail: `Falló la importación de la prescripción N° ${r}`
            }
          );
        })
      }
    }
  }

  showDetails(prescripcion: Prescripcion) {
    this.show.emit(prescripcion);
  }

  filterPrescripcions() {
    this.prescripcions$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, this.datePipe))
    )
  }

  search(text: string, pipe?: PipeTransform): Prescripcion[] {
    this.prescripcions.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });
    return this.prescripcions.filter(prescripcion => {
      const term = text.toLowerCase();
      const dateMoment = moment(prescripcion.FPrescripcion).format('YYYY-MM-DD');
      return prescripcion.NoPrescripcion.includes(term)
        || dateMoment.includes(term)
        || prescripcion.HPrescripcion.includes(term)
        || prescripcion.PNProfS.includes(term)
        || prescripcion.SNProfS.includes(term)
        || prescripcion.PAProfS.includes(term)
        || prescripcion.SAProfS.includes(term)
        || prescripcion.PNPaciente.includes(term)
        || prescripcion.SNPaciente.includes(term)
        || prescripcion.PAPaciente.includes(term)
        || prescripcion.SAPaciente.includes(term);
    });
  }
}
