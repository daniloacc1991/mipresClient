import * as fromRoot from 'src/app/reducers';
import * as fromPrescripcionDetalle from './prescripcion-detalle.reducers';

export interface State extends fromRoot.State {
  prescripcionesDetalle: fromPrescripcionDetalle.State,
};

export const reducers = {
  prescripcionesDetalle: fromPrescripcionDetalle.reducer,
};
