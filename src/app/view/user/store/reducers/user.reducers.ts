import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { User } from '@app-models/index';
import { AllUserActionsTypes, UserActionsTypes } from '../actions/user.actions';

export const userAdapter = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
  sortComparer: false,
});

export interface StateUser extends EntityState<User> {
  currentUserId?: number;
}

export const INIT_STATE: StateUser = userAdapter.getInitialState({
  currentUserId: undefined,
});

export function reducer(state: StateUser = INIT_STATE, { type, payload }: AllUserActionsTypes) {
  switch (type) {
    case UserActionsTypes.SET_CURRENT_USER_ID: {
      return {
        ...state,
        currentUserId: payload,
      };
    }

    case UserActionsTypes.LOAD_ALL_SUCCESS: {
      return userAdapter.addAll(payload, {
        ...state,
      });
    }

    case UserActionsTypes.LOAD_SUCCESS: {
      return userAdapter.addOne(payload, {
        ...state,
      });
    }

    case UserActionsTypes.CREATE_SUCCESS: {
      return userAdapter.addOne(payload, {
        ...state,
      });
    }

    case UserActionsTypes.PUT_SUCCESS: {
      return userAdapter.updateOne(payload, {
        ...state,
      });
    }

    case UserActionsTypes.DELETE_SUCCESS: {
      return userAdapter.removeOne(payload, {
        ...state,
      });
    }

    default:
      return state;
  }
}

export const getCurrentUserId = (state: StateUser) => state.currentUserId;
