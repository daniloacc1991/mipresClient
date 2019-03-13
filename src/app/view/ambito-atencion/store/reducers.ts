import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from 'src/app/reducers';
import * as fromAmbitos from './reducers/ambito-atencion.reducers';

export interface State extends fromRoot.State {
  ambitoAtencion: fromAmbitos.State;
}

export const reducers = {
  ambitoAtencion: fromAmbitos.reducer,
};

export const getAmbitoAtencionRootState = createFeatureSelector<State>('ambitoAtencion');

export const getAmbitoAtencionState = createSelector(
  getAmbitoAtencionRootState,
  state => state.ambitoAtencion
);

export const getSelectedAmbitoAtencionId = createSelector(
  getAmbitoAtencionState,
  fromAmbitos.getCurrentAmbitoAtencionId,
);

export const {
  selectAll: getAllAmbitoAtencion,
  selectEntities: getAmbitoAtencionEntities
} = fromAmbitos.ambitoAtencionAdapter.getSelectors(getAmbitoAtencionState);

export const getCurrentAmbitoAtencion = createSelector(
  getAmbitoAtencionEntities,
  getSelectedAmbitoAtencionId,
  (entities, id) => id && entities[id],
);
