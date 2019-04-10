import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import * as fromPrescripcionesDetalle from '../reducers/prescripcion-detalle.reducers';

export const getPrescripcionesDetalleRootState = createFeatureSelector<State>('prescripcionesDetalle');

export const getPrescripcionesDetalleState = createSelector(
  getPrescripcionesDetalleRootState,
  state => state.prescripcionesDetalle,
);

export const getSelectPrescripcionDetalleId = createSelector(
  getPrescripcionesDetalleState,
  fromPrescripcionesDetalle.getCurrentPrescripcionDetalleId,
);

export const getTotalPrescripcionDetalle = createSelector(
  getPrescripcionesDetalleState,
  fromPrescripcionesDetalle.getTotalPrescripcionsDetalle,
);

export const getIsLoading = createSelector(
  getPrescripcionesDetalleState,
  fromPrescripcionesDetalle.getIsLoading,
);

export const {
  selectAll: getAllPrescripcionesDetalle,
  selectIds: getIdsPrescripcionesDetalle,
  selectEntities: getEntitiesPrescripcionesDetalle,
} = fromPrescripcionesDetalle.prescripcionDetalleAdapter.getSelectors(getPrescripcionesDetalleState);

export const getCurrentPrescripcionDetalle = createSelector(
  getIdsPrescripcionesDetalle,
  getSelectPrescripcionDetalleId,
  (entities, id) => id && entities[id],
);
