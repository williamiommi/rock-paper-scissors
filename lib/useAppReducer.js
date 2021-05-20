import { useReducer } from "react";
import { getBonusGamePoints, getClassicGamePoints } from "./utils";

export const TOGGLE_GAME = "TOGGLE_GAME";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const UPDATE_POINTS_GAME_CLASSIC = "UPDATE_POINTS_GAME_CLASSIC";
export const UPDATE_POINTS_GAME_BONUS = "UPDATE_POINTS_GAME_BONUS";

const initialState = {
  isGameSelected: false,
  isClassicGame: true,
  isRulesOpen: false,
  pointsGameClassic: 0,
  pointsGameBonus: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
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
