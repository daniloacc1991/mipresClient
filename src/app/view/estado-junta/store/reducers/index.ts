import * as fromRoot from 'src/app/reducers';
import * as fromEstadosJunta from './estado-junta.reducers'

export interface State extends fromRoot.State {
  estadosJunta: fromEstadosJunta.State;
}

export const reducers = {
  estadosJunta: fromEstadosJunta.reducer,
}
