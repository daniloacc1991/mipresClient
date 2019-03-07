import * as titleActions from '../actions/title.actions';

export interface TitleState {
  currentTitle: string;
}

export const INIT_TITLE_STATE: TitleState = {
  currentTitle: undefined
};

export function reducer(state: TitleState = INIT_TITLE_STATE, {type, payload}: titleActions.All): TitleState {

  switch (type) {

    case titleActions.SET_CURRENT_TITLE : {
      return { ...state, currentTitle: payload};
    }

    default : {
      return state;
    }
  }
}

// SELECTORS
export const getCurrentTitle = (state: TitleState) => state.currentTitle;
