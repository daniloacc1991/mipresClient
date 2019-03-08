import * as fromPrescripcions from './reducers/prescripcions.reducers';
import * as fromRoot from 'src/app/reducers/index';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface PrescripcionsState {
  prescripcions: fromPrescripcions.State;
}

export interface State extends fromRoot.State {
  prescripcions: PrescripcionsState;
}

export const reducers = {
  prescripcions: fromPrescripcions.reducer
};

export const getPrescripcionsRootState = createFeatureSelector<PrescripcionsState>('prescripcions');

export const getPrescripcionsState = createSelector(
  getPrescripcionsRootState,
  state => state.prescripcions
);

export const getSelectedPrescripcionId = createSelector(
  getPrescripcionsState,
  fromPrescripcions.getCurrentPrescripcionId
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
