import { useCallback, useContext } from "react";
import { AppContext } from "./appContext";
import {
  REGISTER_WIN,
  RESET_GAME,
  TOGGLE_GAME,
  TOGGLE_MODAL,
  UPDATE_POINTS_GAME_BONUS,
  UPDATE_POINTS_GAME_CLASSIC,
  USER_PICK,
  PLAY_AGAIN,
} from "../lib/useAppReducer";
import { setPoints, setWin } from "./utils";

const useFunctions = () => {
  const { state, dispatch } = useContext(AppContext);
  const resetGame = useCallback(
    () => dispatch({ type: RESET_GAME }),
    [dispatch]
  );
  const toggleModal = useCallback(
    () => dispatch({ type: TOGGLE_MODAL }),
    [dispatch]
  );
  const toggleGame = useCallback(
    (payload) => dispatch({ type: TOGGLE_GAME, payload }),
    [dispatch]
  );
  const userPick = useCallback(
    (payload) => dispatch({ type: USER_PICK, payload }),
    [dispatch]
  );
  const handleWin = useCallback(() => {
    setWin(state.isClassicGame);
    dispatch({ type: REGISTER_WIN });
  }, [state.isClassicGame, dispatch]);
  const resetPoints = useCallback(() => {
    setPoints(state.isClassicGame, 0);
    dispatch({
      type: state.isClassicGame
        ? UPDATE_POINTS_GAME_CLASSIC
        : UPDATE_POINTS_GAME_BONUS,
      payload: 0,
    });
  }, [state.isClassicGame, dispatch]);
  const playAgain = useCallback(
    () => dispatch({ type: PLAY_AGAIN }),
    [dispatch]
  );

  return {
    resetGame,
    toggleModal,
    toggleGame,
    userPick,
    handleWin,
    resetPoints,
    playAgain,
  }

};

export default useFunctions;
