import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { AllPrescripcionDetalleActions, PRESCRIPCION_DETALLE_ACTIONS_TYPES } from '../actions/prescripcion-detalle.actions';
import { PrescripcionDetalle } from '@app-models/index';

export const prescripcionDetalleAdapter = createEntityAdapter<PrescripcionDetalle>({
  selectId: (prescripcionDetalle: PrescripcionDetalle) => prescripcionDetalle.id,
  sortComparer: false,
});

export interface State extends EntityState<PrescripcionDetalle> {
  currentPrescripcionDetalleId?: number;
  totalPrescripcionsDetalle: number;
  isLoading: boolean;
};

export const INIT_STATE: State = prescripcionDetalleAdapter.getInitialState({
  currentPrescripcionDetalleId: undefined,
  totalPrescripcionsDetalle: 0,
  isLoading: false,
});

export function reducer(state: State = INIT_STATE, { type, payload }: AllPrescripcionDetalleActions) {
  switch (type) {
    case PRESCRIPCION_DETALLE_ACTIONS_TYPES.SET_CURRENT_PRESCRIPCION_DETALLE_ID: {
      return {
        ...state,
        currentPrescripcionDetalleId: payload
      };
    }

    case PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_ALL_SUCCESS: {
      return prescripcionDetalleAdapter.addAll(payload, {
        ...state,
      });
    }

    case PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_POR_JUNTA_SUCCESS: {
      prescripcionDetalleAdapter.removeAll(state);
      return prescripcionDetalleAdapter.addAll(payload.rows, {
        ...state,
        totalPrescripcionsDetalle: payload.count,
      })
    }

    case PRESCRIPCION_DETALLE_ACTIONS_TYPES.LOAD_SUCCESS: {
      return prescripcionDetalleAdapter.addOne(payload, {
        ...state,
      });
    }

    case PRESCRIPCION_DETALLE_ACTIONS_TYPES.CREATE_SUCCESS: {
      return prescripcionDetalleAdapter.addOne(payload, {
        ...state,
      });
    }

    case PRESCRIPCION_DETALLE_ACTIONS_TYPES.PUT_SUCCESS: {
      return prescripcionDetalleAdapter.updateOne(payload, state);
    }

    case PRESCRIPCION_DETALLE_ACTIONS_TYPES.DELETE_SUCCESS: {
      return prescripcionDetalleAdapter.removeOne(payload, state)
    }

    default:
      return state;
  }
}

export const getCurrentPrescripcionDetalleId = (state: State) => state.currentPrescripcionDetalleId;
export const getTotalPrescripcionsDetalle = (state: State) => state.totalPrescripcionsDetalle;
export const getIsLoading = (state: State) => state.isLoading;