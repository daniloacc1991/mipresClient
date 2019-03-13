import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import * as fromAuth from '../reducers/auth.reducers';

export const getAuthRootState = createFeatureSelector<State>('auth');

export const getAuthState = createSelector(
  getAuthRootState,
  state => state.auth
);

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
