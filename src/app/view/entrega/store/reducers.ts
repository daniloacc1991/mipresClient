import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from 'src/app/reducers';
import * as fromEntrega from './reducers/entrega.reducers';
// import * as fromEntregaResumen from './reducers/entrega-resumen.reducers';

export interface State extends fromRoot.State {
  entrega: fromEntrega.State;
}

// export interface StateResumen extends fromRoot.State {
//   entregaResumen: fromEntregaResumen.State;
// }

export const reducers = {
  entrega: fromEntrega.reducer,
};

// export const reducersResumen = {
//   entregaResumen: fromEntregaResumen.reducer,
// };

export const getEntregaRootState = createFeatureSelector<State>('entrega');
// export const getEntregaResumenRootState = createFeatureSelector<StateResumen>('entregaResumen');

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
