import { PrescripcionDetalle } from '@app-models/index';

export interface PrescripcionDetalleWrapper {
  rows: PrescripcionDetalle[];
  count: number;
}