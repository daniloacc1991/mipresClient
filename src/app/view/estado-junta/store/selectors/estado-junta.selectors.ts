import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import * as fromEstadosJunta from '../reducers/estado-junta.reducers';

export const getEstadosJuntaRootState = createFeatureSelector<State>('estadosJunta');

export const getEstadosJuntaState = createSelector(
  getEstadosJuntaRootState,
  state => state.estadosJunta,
);

export const getSelectEstadoJuntaId = createSelector(
  getEstadosJuntaState,
  fromEstadosJunta.getCurrentEstadoJuntaId
);

export const {
  selectAll: getAllEstadosJunta,
  selectIds: getAllEstadosJuntaId,
  selectEntities: getEstadosJuntaEntities,
} = fromEstadosJunta.estadoJuntaAdapter.getSelectors(getEstadosJuntaState);

export const getCurrenEstadoJunta = createSelector(
  getEstadosJuntaEntities,
  getSelectEstadoJuntaId,
  (entities, id) => id && entities[id],
);