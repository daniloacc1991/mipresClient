import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromRouter from '@ngrx/router-store';
import * as fromTitle from './reducers/title.reducers'
import { environment } from '../../environments/environment';

export interface State {
  title: fromTitle.TitleState;
  router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<State | any> = {
  title: fromTitle.reducer,
  router: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['todos']})(reducer);
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze, localStorageSyncReducer]
  : [localStorageSyncReducer];

/// Selectors Title
export const getTitleState = createFeatureSelector<fromTitle.TitleState>('title');

export const getCurrentTitle = createSelector(getTitleState, fromTitle.getCurrentTitle);