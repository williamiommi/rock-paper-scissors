import { useReducer } from "react";

export const RESET_GAME = "RESET_GAME";
export const PLAY_AGAIN = "PLAY_AGAIN";
export const USER_SELECTION = "USER_SELECTION";
export const HOUSE_SELECTION = "HOUSE_SELECTION";
export const TOGGLE_GAME = "TOGGLE_GAME";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const UPDATE_POINTS_GAME_CLASSIC = "UPDATE_POINTS_GAME_CLASSIC";
export const UPDATE_POINTS_GAME_BONUS = "UPDATE_POINTS_GAME_BONUS";

const initialState = {
  isGameSelected: false,
  isClassicGame: true,
  isRulesOpen: false,
  userHand: null,
  houseHand: null,
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
        userHand: null,
        houseHand: null,
      };
    case PLAY_AGAIN:
      return {
        ...state,
        userHand: null,
        houseHand: null,
      };
    case USER_SELECTION:
      return {
        ...state,
        userHand: action.payload,
      };
    case HOUSE_SELECTION:
      return {
        ...state,
        houseHand: action.payload,
      };
    case TOGGLE_GAME:
      return { ...state, isGameSelected: true, isClassicGame: action.payload };
    case TOGGLE_MODAL:
      return { ...state, isRulesOpen: !state.isRulesOpen };
    case UPDATE_POINTS_GAME_CLASSIC:
      return { ...state, pointsGameClassic: action.payload };
    case UPDATE_POINTS_GAME_BONUS:
      return { ...state, pointsGameClassic: action.payload };
    default:
      return state;
  }
};

export const useAppReducer = () => useReducer(reducer, initialState);
