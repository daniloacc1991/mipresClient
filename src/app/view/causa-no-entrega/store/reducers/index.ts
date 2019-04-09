import * as fromRoot from 'src/app/reducers';
import * as fromCausaNoEntrega from './causa-no-entrega.reducers';

export interface State extends fromRoot.State {
  causasNoEntrega: fromCausaNoEntrega.State;
}

export const reducers = {
  causasNoEntrega: fromCausaNoEntrega.reducer,
}