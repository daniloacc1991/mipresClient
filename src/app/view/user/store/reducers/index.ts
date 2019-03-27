import * as fromRoot from 'src/app/reducers'
import * as fromUser from './user.reducers'

export interface State extends fromRoot.State {
  user: fromUser.StateUser;
}

export const reducers = {
  user: fromUser.reducer,
}