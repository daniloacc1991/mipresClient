import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { AllCausaNoEntregaActions, CAUSA_NO_ENTREGA_ACTIONS_TYPES } from '../actions/causa-no-entrega.actions';
import { CausaNoEntrega } from '@app-models/index';

export const causaNoEntregaAdapter = createEntityAdapter<CausaNoEntrega>({
  selectId: (causaNoEntrega: CausaNoEntrega) => causaNoEntrega.id,
  sortComparer: false,
});

export interface State extends EntityState<CausaNoEntrega> {
  currentCausaNoEntregaId?: number;
  isLoading?: boolean;
};

export const INIT_STATE: State = causaNoEntregaAdapter.getInitialState({
  currentCausaNoEntregaId: undefined,
  isLoading: false,
});

export function reducer(state: State = INIT_STATE, { type, payload }: AllCausaNoEntregaActions) {
  switch (type) {
    case CAUSA_NO_ENTREGA_ACTIONS_TYPES.SET_CURRENT_CAUSA_NO_ENTREGA_ID: {
      return {
        ...state,
        currentCausaNoEntregaId: payload,
      }
    }

    case CAUSA_NO_ENTREGA_ACTIONS_TYPES.LOAD_ALL_SUCCESS: {
      return causaNoEntregaAdapter.addAll(payload, {
        ...state,
      })
    }

    case CAUSA_NO_ENTREGA_ACTIONS_TYPES.LOAD_SUCCESS: {
      return causaNoEntregaAdapter.addOne(payload, {
        ...state,
      })
    }

    case CAUSA_NO_ENTREGA_ACTIONS_TYPES.CREATE: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case CAUSA_NO_ENTREGA_ACTIONS_TYPES.CREATE_SUCCESS: {
      return causaNoEntregaAdapter.addOne(payload, {
        ...state,
        isLoading: false,
      })
    }

    case CAUSA_NO_ENTREGA_ACTIONS_TYPES.PUT_SUCCESS: {
      return causaNoEntregaAdapter.updateOne(payload, state);
    }

    case CAUSA_NO_ENTREGA_ACTIONS_TYPES.DELETE_SUCCESS: {
      return causaNoEntregaAdapter.removeOne(payload, state);
    }

    default:
      return state;
  }
}

export const getCurrentCausaNoEntregaId = (state: State) => state.currentCausaNoEntregaId;
export const getIsLoading = (state: State) => state.isLoading;
