import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { EntregaActions, EntregaActionsTypes } from '../actions/entrega.actions';
import { Entrega, PrescripcionDetalle } from '@app-models/index';

export const entregaAdater = createEntityAdapter<Entrega>({
  selectId: (entrega: Entrega) => entrega.id,
  sortComparer: false,
});

export interface State extends EntityState<Entrega> {
  currentEntregaId?: number;
  isLoading: boolean;
  prescripcionDetalle: PrescripcionDetalle;
}

export const InitState: State = entregaAdater.getInitialState({
  currentEntregaId: undefined,
  isLoading: false,
  prescripcionDetalle: undefined,
});

export function reducer(state: State = InitState, { type, payload }: EntregaActions) {
  switch (type) {
    case EntregaActionsTypes.SET_CURRENT_ENTREGA_ID: {
      return {
        ...state,
        currentEntregaId: payload
      };
    }

    case EntregaActionsTypes.LOAD_ALL_SUCCESS: {
      return entregaAdater.addAll(payload, {
        ...state
      });
    }

    case EntregaActionsTypes.LOAD_SUCCESS: {
      return entregaAdater.addOne(payload, {
        ...state,
        currentEntregaId: payload.id
      });
    }

    case EntregaActionsTypes.CREATE: {
      return {
        isLoading: true,
        ...state,
      }
    }

    case EntregaActionsTypes.CREATE_SUCCESS: {
      return entregaAdater.addOne(payload, {
        isLoading: false,
        ...state
      });
    }

    case EntregaActionsTypes.PUT_SUCCESS: {
      return entregaAdater.updateOne(payload, state);
    }

    case EntregaActionsTypes.DELETE_SUCCESS: {
      return entregaAdater.removeOne(payload, state);
    }

    case EntregaActionsTypes.LOAD_DETAIL_SUCCESS:
      return {
        ...state,
        prescripcionDetalle: payload,
      };

    default:
      return state;
  }
}

export const getCurrentEntregaId = (state: State) => state.currentEntregaId;
export const getIsLoading = (state: State) => state.isLoading;
export const getCurrentPrescripcionDetalle = (state: State) => state.prescripcionDetalle;
