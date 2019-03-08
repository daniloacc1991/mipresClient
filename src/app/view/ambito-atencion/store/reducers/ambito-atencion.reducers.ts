import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { AmbitoAtencionActions, AmbitoAtencionActionsTypes } from '../actions/ambito-atencion.actions';
import { AmbitoAtencion } from '@app-models/index';

export const ambitoAntencionAdater = createEntityAdapter<AmbitoAtencion>({
  selectId: (ambitoAtencion: AmbitoAtencion) => ambitoAtencion.id,
  sortComparer: false,
});

export interface State extends EntityState<AmbitoAtencion> {
  currentAmbitoAtencionId?: number;
  totalAmbitoAtencion?: number;
}

export const InitState: State = ambitoAntencionAdater.getInitialState({
  currentAmbitoAtencionId: undefined,
  totalAmbitoAtencion: 0,
});

export function reducer(state: State = InitState, { type, payload }: AmbitoAtencionActions) {
  switch (type) {
    case AmbitoAtencionActionsTypes.SET_CURRENT_AMBITO_ATENCION_ID: {
      return {
        ...state,
        currentAmbitoAtencionId: payload
      };
    }

    case AmbitoAtencionActionsTypes.LOAD_ALL_SUCCESS: {
      return ambitoAntencionAdater.addAll(payload, {
        ...state
      });
    }

    case AmbitoAtencionActionsTypes.LOAD_SUCCESS: {
      return ambitoAntencionAdater.addOne(payload, {
        ...state,
        currentAmbitoAtencionId: payload.id
      });
    }

    case AmbitoAtencionActionsTypes.CREATE_SUCCESS: {
      return ambitoAntencionAdater.addOne(payload, {
        ...state
      });
    }

    case AmbitoAtencionActionsTypes.PUT_SUCCESS: {
      return ambitoAntencionAdater.updateOne(payload, state);
    }

    case AmbitoAtencionActionsTypes.DELETE_SUCCESS: {
      return ambitoAntencionAdater.removeOne(payload, state);
    }

    default:
      return state;
  }
}

export const getCurrentAmbitoAtencionId = (state: State) => state.currentAmbitoAtencionId;
export const getTotalAmbitoAtencion = (state: State) => state.totalAmbitoAtencion;
