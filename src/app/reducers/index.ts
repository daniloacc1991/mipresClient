import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync, LocalStorageConfig } from 'ngrx-store-localstorage';
import * as fromRouter from '@ngrx/router-store';
import * as fromTitle from './reducers/title.reducers'
import * as fromAuth from '../Auth/store/reducers/auth.reducers';
import { environment } from '../../environments/environment';

export interface State {
  title: fromTitle.TitleState;
  router: fromRouter.RouterReducerState;
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State | any> = {
  title: fromTitle.reducer,
  router: fromRouter.routerReducer,
  auth: fromAuth.reducers,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export function localStorageSyncReducer(reducer: ActionReducer<State>): ActionReducer<State> {
  const config: LocalStorageConfig = {
    // keys: ['auth','entrega', 'prescripcions', 'ambitoAtencion', 'estadosJunta'],
    keys: ['auth'],
    rehydrate: true,
  }
  return localStorageSync(config)(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer];

/// Selectors Title
export const getTitleState = createFeatureSelector<fromTitle.TitleState>('title');
export const getCurrentTitle = createSelector(getTitleState, fromTitle.getCurrentTitle);

export const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

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

export const getAuthUsername = createSelector(
  getAuthState,
  fromAuth.getAuthUsername
);
