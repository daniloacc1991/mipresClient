import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import * as fromPrescripcions from '../reducers/prescripcions.reducers';

export const getPrescripcionsRootState = createFeatureSelector<State>('prescripcions');

export const getPrescripcionsState = createSelector(
  getPrescripcionsRootState,
  state => state.prescripcions
);

export const getSelectedPrescripcionId = createSelector(
  getPrescripcionsState,
  fromPrescripcions.getCurrentPrescripcionId
);

export const getImportLoading = createSelector(
  getPrescripcionsState,
  fromPrescripcions.getimportLoading
);

export const getImportSuccessRes = createSelector(
  getPrescripcionsState,
  fromPrescripcions.getImportSuccessRes
);

export const getTotalPrescripcions = createSelector(
  getPrescripcionsState,
  fromPrescripcions.gerTotalPrescripcions,
);

export const {
  selectAll: getAllPrescripcions,
  selectEntities: getPrescripcionEntities
} = fromPrescripcions.prescripcionsAdapter.getSelectors(getPrescripcionsState);

export const getcurrentPrescripcion = createSelector(
  getPrescripcionEntities,
  getSelectedPrescripcionId,
  (entities, id) => id && entities[id]
);
