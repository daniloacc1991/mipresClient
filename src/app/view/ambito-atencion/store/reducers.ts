import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from 'src/app/reducers';
import * as fromAmbitos from './reducers/ambito-atencion.reducers';

export interface AmbitoAtencionState {
  ambitoAtencion: fromAmbitos.State;
}

export interface State extends fromRoot.State {
  ambitoAtencion: AmbitoAtencionState;
}

export const reducers = {
  ambitoAtencion: fromAmbitos.reducer,
};

export const getAmbitoAtencionRootState = createFeatureSelector<AmbitoAtencionState>('ambitoAtencion');

export const getAmbitoAtencionState = createSelector(
  getAmbitoAtencionRootState,
  state => state.ambitoAtencion
);

export const getSelectedAmbitoAtencionId = createSelector(
  getAmbitoAtencionState,
  fromAmbitos.getCurrentAmbitoAtencionId,
);

export const getTotalAmbitoAtencion = createSelector(
  getAmbitoAtencionState,
  fromAmbitos.getTotalAmbitoAtencion
);

export const {
  selectAll: getAllAmbitoAtencion,
  selectEntities: getAmbitoAtencionEntities
} = fromAmbitos.ambitoAntencionAdater.getSelectors(getAmbitoAtencionState);

export const getCurrentAmbitoAtencion = createSelector(
  getAmbitoAtencionEntities,
  getSelectedAmbitoAtencionId,
  (entities, id) => id && entities[id],
);
