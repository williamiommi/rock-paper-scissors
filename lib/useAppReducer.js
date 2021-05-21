import { useReducer } from "react";

export const RESET_GAME = "RESET_GAME";
export const PLAY_AGAIN = "PLAY_AGAIN";
export const USER_PICK = "USER_PICK";
export const HOUSE_PICK = "HOUSE_PICK";
export const TOGGLE_GAME = "TOGGLE_GAME";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const REGISTER_WIN = "REGISTER_WIN";

const initialState = {
  isGameSelected: false,
  isClassicGame: true,
  isRulesOpen: false,
  userPick: null,
  housePick: null,
  pointsGameClassic: 0,
  pointsGameBonus: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case RESET_GAME:
      return {
        ...state,
        isGameSelected: false,
        isClassicGame: true,
        userPick: null,
        housePick: null,
      };
    case PLAY_AGAIN:
      return {
        ...state,
        userPick: null,
        housePick: null,
      };
    case USER_PICK:
      return {
        ...state,
        userPick: action.payload,
      };
    case HOUSE_PICK:
      return {
        ...state,
        housePick: action.payload,
      };
    case TOGGLE_GAME:
      return { ...state, isGameSelected: true, isClassicGame: action.payload };
    case TOGGLE_MODAL:
      return { ...state, isRulesOpen: !state.isRulesOpen };
    case REGISTER_WIN: {
      const type = state.isClassicGame ? 'pointsGameClassic' : 'pointsGameBonus';
      return { ...state, [type]: ++state[type] };
    }
    default:
      return state;
  }
};

export const useAppReducer = () => useReducer(reducer, initialState);
