import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { EntregaResumen } from '@app-models/index';
import { EntregaResumenActions, EntregaResumenActionsTypes } from '../actions/entrega-resumen.actions';


export const entregaResumenAdapter = createEntityAdapter<EntregaResumen>({
  selectId: (entregaResumen: EntregaResumen) => entregaResumen.id,
  sortComparer: false,
});

export interface State extends EntityState<EntregaResumen> {
  isLoading: boolean;
}

export const InitState: State = entregaResumenAdapter.getInitialState({
  isLoading: false,
});

export function reducer(state: State = InitState, { type, payload }: EntregaResumenActions) {

  switch (type) {

    case EntregaResumenActionsTypes.LOAD_ALL_SUCCESS: {
      return entregaResumenAdapter.addAll(payload, {
        ...state
      });
    }

    case EntregaResumenActionsTypes.LOAD_SUCCESS: {
      return entregaResumenAdapter.addOne(payload, {
        ...state,
      });
    }

    default:
      return state;
  }
}