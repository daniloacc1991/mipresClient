import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from 'src/app/reducers';
import * as fromEntrega from './reducers/entrega.reducers';

export interface State extends fromRoot.State {
  entrega: fromEntrega.State;
}

export const reducers = {
  entrega: fromEntrega.reducer,
};

export const getEntregaRootState = createFeatureSelector<State>('entrega');

export const getEntregaState = createSelector(
  getEntregaRootState,
  state => state.entrega
);

export const getSelectedEntregaId = createSelector(
  getEntregaState,
  fromEntrega.getCurrentEntregaId,
);

export const getIsLoading = createSelector(
  getEntregaState,
  fromEntrega.getIsLoading,
);

export const getPrescripcionDetalle = createSelector(
  getEntregaState,
  fromEntrega.getCurrentPrescripcionDetalle,
);

export const {
  selectAll: getAllEntrega,
  selectEntities: getEntregaEntities
} = fromEntrega.entregaAdater.getSelectors(getEntregaState);

export const getCurrentEntrega = createSelector(
  getEntregaEntities,
  getSelectedEntregaId,
  (entities, id) => id && entities[id],
);
