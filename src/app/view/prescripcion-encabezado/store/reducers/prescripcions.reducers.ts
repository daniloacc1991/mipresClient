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
  totalPrescripcions: undefined,
  isImportLoading: false,
  importSuccessRes: { success: [], fails: [] },
});

export function reducer(state: State = INIT_STATE, { type, payload }: AllPrescripcionsActions) {
  switch (type) {
    case PrescripcionEncabezadoActionsTypes.SET_CURRENT_PRESCRIPCION_ID: {
      return {
        ...state,
        currentPrescripcionId: payload,
        isImportLoading: false,
        importSuccessRes: { success: [], fails: [] },
      };
    }

    case PrescripcionEncabezadoActionsTypes.LOAD_ALL_SUCCESS: {
      return prescripcionsAdapter.addAll(payload, {
        ...state,
        isImportLoading: false,
        importSuccessRes: { success: [], fails: [] },
      });
    }

    case PrescripcionEncabezadoActionsTypes.LOAD_SUCCESS: {
      return prescripcionsAdapter.addOne(payload, {
        ...state,
        currentPrescripcionId: payload.id,
        isImportLoading: false,
        importSuccessRes: { success: [], fails: [] },
      });
    }

    case PrescripcionEncabezadoActionsTypes.CREATE_SUCCESS: {
      return prescripcionsAdapter.addOne(payload, {
        ...state,
        isImportLoading: false,
        importSuccessRes: { success: [], fails: [] },
      });
    }

    case PrescripcionEncabezadoActionsTypes.PUT_SUCCESS: {
      return prescripcionsAdapter.updateOne(payload, {
        ...state,
        isImportLoading: false,
        importSuccessRes: { success: [], fails: [] },
      });
    }

    case PrescripcionEncabezadoActionsTypes.IMPORT: {
      return {
        ...state,
        isImportLoading: true,
        importSuccessRes: { success: [], fails: [] },
      }
    }

    case PrescripcionEncabezadoActionsTypes.IMPORT_SUCCESS: {
      return {
        ...state,
        isImportLoading: false,
        importSuccessRes: payload
      }
    }

    case PrescripcionEncabezadoActionsTypes.LOAD_PER_PAGE_SUCCESS: {
      prescripcionsAdapter.removeAll(state);
      return prescripcionsAdapter.addAll(payload.rows, {
        ...state,
        currentPrescripcionId: undefined,
        totalPrescripcions: payload.count,
        isImportLoading: false,
        importSuccessRes: { success: [], fails: [] },
      });
    }
    
    default: return state;
  }
}

export const getCurrentPrescripcionId = (state: State) => state.currentPrescripcionId;
export const getimportLoading = (state: State) => state.isImportLoading;
export const getImportSuccessRes = (state: State) => state.importSuccessRes;
export const gerTotalPrescripcions = (state: State) => state.totalPrescripcions;