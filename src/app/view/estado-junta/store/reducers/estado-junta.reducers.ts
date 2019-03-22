import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { AllEstadoJuntaActions, EstadoJuntaActionsTypes } from '../actions/estado-junta.actions';
import { EstadoJunta } from '@app-models/index';

export const estadoJuntaAdapter = createEntityAdapter<EstadoJunta>({
  selectId: (estadoJunta: EstadoJunta) => estadoJunta.id,
  sortComparer: false,
});

export interface State extends EntityState<EstadoJunta> {
  currentEstadoJuntaId?: number;
  isLoading: boolean;
}

export const INIT_STATE: State = estadoJuntaAdapter.getInitialState({
  currentEstadoJuntaId: undefined,
  isLoading: false,
});

export function reducer(state: State = INIT_STATE, { type, payload }: AllEstadoJuntaActions) {
  switch (type) {
    case EstadoJuntaActionsTypes.SET_CURRENT_ESTADO_JUNTA_ID: {
      return {
        ...state,
        currentEstadoJuntaId: payload,
      }
    }

    case EstadoJuntaActionsTypes.LOAD_ALL: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case EstadoJuntaActionsTypes.LOAD_ALL_SUCCESS: {
      return estadoJuntaAdapter.addAll(payload, {
        ...state,
        isLoading: false,
      });
    }

    case EstadoJuntaActionsTypes.LOAD_SUCCESS: {
      return estadoJuntaAdapter.addOne(payload, {
        ...state,
        currentEstadoJuntaId: payload.id,
      });
    }

    case EstadoJuntaActionsTypes.CREATE_SUCCESS: {
      return estadoJuntaAdapter.addOne(payload, {
        ...state,
      });
    }

    case EstadoJuntaActionsTypes.PUT_SUCCESS: {
      return estadoJuntaAdapter.updateOne(payload, state);
    }

    case EstadoJuntaActionsTypes.DELETE_SUCCESS: {
      return estadoJuntaAdapter.removeOne(payload, state);
    }

    default:
      return state;
  }

};

export const getCurrentEstadoJuntaId = (state: State) => state.currentEstadoJuntaId;
