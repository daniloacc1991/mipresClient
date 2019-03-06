import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromRouter from '@ngrx/router-store';
import * as fromAuth from '@app-auth/store/reducers/auth.reducer';
import { environment } from '../../environments/environment';

export interface State {
  router: fromRouter.RouterReducerState;
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State | any> = {
  router: fromRouter.routerReducer,
  auth: fromAuth.AuthReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

export const getAuth = createSelector(
  getAuthState,
  fromAuth.getAuthState
);

export const getAuthLoading = createSelector(
  getAuthState,
  fromAuth.getAuthLoading
);

export const getAuthLoging = createSelector(
  getAuthState,
  fromAuth.getAuthLoging
);

export const getAuthError = createSelector(
  getAuthState,
  fromAuth.getAuthError
);
