import { useContext, useEffect } from "react";
import { AppContext } from "./appContext";
import {
  UPDATE_POINTS_GAME_BONUS,
  UPDATE_POINTS_GAME_CLASSIC,
} from "./useAppReducer";
import { getPointsGameClassic, getPointsGameBonus } from "./utils";

const useLoadPoints = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({
      type: UPDATE_POINTS_GAME_CLASSIC,
      payload: getPointsGameClassic(),
    });
    dispatch({ type: UPDATE_POINTS_GAME_BONUS, payload: getPointsGameBonus() });
  }, [dispatch]);
};

export default useLoadPoints;
