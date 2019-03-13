import * as fromRoot from 'src/app/reducers/index';
import * as fromAuth from './auth.reducers';

export interface State extends fromRoot.State {
  auth: fromAuth.AuthState;
}

export const reducers = {
  auth: fromAuth.reducers
};
