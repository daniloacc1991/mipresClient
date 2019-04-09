import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import * as fromCausasNoEntrega from '../reducers/causa-no-entrega.reducers';

export const getCausasNoEntregaRootState = createFeatureSelector<State>('causasNoEntrega');

export const getCausasNoEntregaState = createSelector(
  getCausasNoEntregaRootState,
  state => state.causasNoEntrega,
);

export const getSelectCausaNoEntregaId = createSelector(
  getCausasNoEntregaState,
  fromCausasNoEntrega.getCurrentCausaNoEntregaId,
);

export const getIsLoading = createSelector(
  getCausasNoEntregaState,
  fromCausasNoEntrega.getIsLoading,
);

export const {
  selectAll: getAllCausasNoEntrega,
  selectIds: getAllCausasNoEntregaIds,
  selectEntities: getAllCausasNoEntregaEntities,
} = fromCausasNoEntrega.causaNoEntregaAdapter.getSelectors(getCausasNoEntregaState);

export const getCurrentCausaNoEntrega = createSelector(
  getAllCausasNoEntregaEntities,
  getSelectCausaNoEntregaId,
  (entities, id) => id && entities[id],
);
