import { Prescripcion } from '@app-models/index';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { PrescripcionEncabezadoActionsTypes, All as AllPrescripcionsActions } from '../actions/prescripcions.actions';

export const prescripcionsAdapter = createEntityAdapter<Prescripcion>({
  selectId: (prescripcion: Prescripcion) => prescripcion.id,
  sortComparer: false,
});

export interface State extends EntityState<Prescripcion> {
  currentPrescripcionId?: number;
  totalPrescripcions?: number;
}

export const INIT_STATE: State = prescripcionsAdapter.getInitialState({
  currentPrescripcionId: undefined,
  totalPrescripcions: null
});

export function reducer(state: State = INIT_STATE, { type, payload }: AllPrescripcionsActions) {
  switch (type) {
    case PrescripcionEncabezadoActionsTypes.SET_CURRENT_PRESCRIPCION_ID: {
      return {
        ...state,
        currentPrescripcionId: payload
      };
    }

    case PrescripcionEncabezadoActionsTypes.LOAD_ALL_SUCCESS: {
      return prescripcionsAdapter.addAll(payload, {
        ...state
      });
    }

    case PrescripcionEncabezadoActionsTypes.LOAD_SUCCESS: {
      return prescripcionsAdapter.addOne(payload, {
        ...state,
        currentPrescripcionId: payload.id
      });
    }

    case PrescripcionEncabezadoActionsTypes.CREATE_SUCCESS: {
      return prescripcionsAdapter.addOne(payload, {
        ...state
      });
    }

    case PrescripcionEncabezadoActionsTypes.PUT_SUCCESS: {
      return prescripcionsAdapter.updateOne(payload, state);
    }

    default: return state;
  }
}

export const getCurrentPrescripcionId = (state: State) => state.currentPrescripcionId;
