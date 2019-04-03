import { Component, OnInit, EventEmitter, ChangeDetectionStrategy, Input, Output, PipeTransform, OnChanges, HostListener, OnDestroy } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Prescripcion, ImportarxFecha, ImportaFechaSuccess } from '@app-models/index';
import { Observable, Subject } from 'rxjs';
import { startWith, map, debounceTime } from 'rxjs/operators';
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
export class PrescripcionListComponent implements OnInit, OnChanges, OnDestroy {

  @Input() prescripcions: Prescripcion[];
  @Input() isLoading: boolean;
  @Input() msjImport: ImportaFechaSuccess;
  @Input() totalPrescripcions: number;
  @Output() edit = new EventEmitter<Prescripcion>();
  @Output() show = new EventEmitter<Prescripcion>();
  @Output() remove = new EventEmitter<Prescripcion>();
  @Output() import = new EventEmitter<ImportarxFecha>();
  @Output() changePage = new EventEmitter<number>();
  @Output() changePageSize = new EventEmitter<number>();
  @Output() changeSearch = new EventEmitter<string>();

  private keydownSubject = new Subject();


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
    this.keydownSubject.pipe(
      debounceTime(500)
    ).subscribe(e => this.changeSearch.emit(this.filter.value));
  }

  @HostListener('keydown', ['$event.target'])
  changeFilter(event: any){
    this.keydownSubject.next(event);
  }

  onPager(event: number) {
    this.changePage.emit(event);
  }

  changePagesize(event: any){
    this.changePageSize.emit(this.pageSize);
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

  ngOnDestroy(){

  }
}
