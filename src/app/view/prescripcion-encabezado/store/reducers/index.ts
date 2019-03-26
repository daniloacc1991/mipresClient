import * as fromPrescripcions from './prescripcions.reducers';
import * as fromRoot from 'src/app/reducers/';

export interface State extends fromRoot.State {
  prescripcions: fromPrescripcions.State;
}

export const reducers = {
  prescripcions: fromPrescripcions.reducer
};
