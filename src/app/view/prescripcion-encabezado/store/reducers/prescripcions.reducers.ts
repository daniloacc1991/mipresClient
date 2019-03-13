import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Prescripcion, ImportaFechaSuccess } from '@app-models/index';
import { PrescripcionEncabezadoActionsTypes, All as AllPrescripcionsActions } from '../actions/prescripcions.actions';

export const prescripcionsAdapter = createEntityAdapter<Prescripcion>({
  selectId: (prescripcion: Prescripcion) => prescripcion.id,
  sortComparer: false,
});

export interface State extends EntityState<Prescripcion> {
  currentPrescripcionId?: number;
  totalPrescripcions?: number;
  isImportLoading: boolean;
  importSuccessRes: ImportaFechaSuccess;
}

export const INIT_STATE: State = prescripcionsAdapter.getInitialState({
  currentPrescripcionId: undefined,
  totalPrescripcions: null,
  isImportLoading: false,
  importSuccessRes: null,
});

export function reducer(state: State = INIT_STATE, { type, payload }: AllPrescripcionsActions) {
  switch (type) {
    case PrescripcionEncabezadoActionsTypes.SET_CURRENT_PRESCRIPCION_ID: {
      return {
        ...state,
        currentPrescripcionId: payload,
        isImportLoading: false,
      };
    }

    case PrescripcionEncabezadoActionsTypes.LOAD_ALL_SUCCESS: {
      return prescripcionsAdapter.addAll(payload, {
        ...state,
        isImportLoading: false,
      });
    }

    case PrescripcionEncabezadoActionsTypes.LOAD_SUCCESS: {
      return prescripcionsAdapter.addOne(payload, {
        ...state,
        currentPrescripcionId: payload.id,
        isImportLoading: false,
      });
    }

    case PrescripcionEncabezadoActionsTypes.CREATE_SUCCESS: {
      return prescripcionsAdapter.addOne(payload, {
        ...state,
        isImportLoading: false,
      });
    }

    case PrescripcionEncabezadoActionsTypes.PUT_SUCCESS: {
      return prescripcionsAdapter.updateOne(payload, {
        ...state,
        isImportLoading: false,
      });
    }

    case PrescripcionEncabezadoActionsTypes.IMPORT: {
      return {
        ...state,
        isImportLoading: true,
      }
    }

    case PrescripcionEncabezadoActionsTypes.IMPORT_SUCCESS: {
      return {
        ...state,
        isImportLoading: false,
        importSuccessRes: payload
      }
    }

    default: return state;
  }
}

export const getCurrentPrescripcionId = (state: State) => state.currentPrescripcionId;
export const getimportLoading = (state: State) => state.isImportLoading;
export const getImportSuccessRes = (state: State) => state.importSuccessRes;