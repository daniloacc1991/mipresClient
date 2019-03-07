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
import * as fromTitle from './reducers/title.reducers'
import { environment } from '../../environments/environment';

export interface State {
  title: fromTitle.TitleState;
  router: fromRouter.RouterReducerState;
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<State | any> = {
  title: fromTitle.reducer,
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

/// Selectors Title
export const getTitleState = createFeatureSelector<fromTitle.TitleState>('title');

export const getCurrentTitle = createSelector(getTitleState, fromTitle.getCurrentTitle);

// Selectors Auth
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
