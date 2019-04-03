import { Prescripcion } from '@app-models/index';

export interface PrescripcionWrapperPerPage {
  rows: Prescripcion[];
  count: number;
}

export interface PrescripcionWrapperTerm {
  rows: Prescripcion[];
  count: number;
}