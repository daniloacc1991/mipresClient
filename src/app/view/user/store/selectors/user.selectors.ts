import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers';
import * as fromUser from '../reducers/user.reducers';

export const getUserRootState = createFeatureSelector<State>('user');

export const getUserState = createSelector(
  getUserRootState,
  state => state.user,
);

export const getSelectUserId = createSelector(
  getUserState,
  fromUser.getCurrentUserId,
);

export const {
  selectAll: getAllUsers,
  selectEntities: getUserEntities,
} = fromUser.userAdapter.getSelectors(getUserState);

export const getCurrentUser = createSelector(
  getUserEntities,
  getSelectUserId,
  (entities, id) => id && entities[id],
);
