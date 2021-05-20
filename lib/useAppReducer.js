import { useReducer } from "react";

export const TOGGLE_GAME = "TOGGLE_GAME";
export const TOGGLE_MODAL = "TOGGLE_MODAL";

const initialState = {
  isClassicGame: false,
  isRulesOpen: false,
};

const reducer = (state, action) => {
  switch (action) {
    case TOGGLE_GAME:
      return { ...state, isClassicGame: !state.isClassicGame };
    case TOGGLE_MODAL:
      return { ...state, isRulesOpen: !state.isRulesOpen };
    default:
      return state;
  }
};

export const useAppReducer = () => useReducer(reducer, initialState);
