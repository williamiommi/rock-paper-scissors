import { useCallback, useContext } from "react";
import { AppContext } from "../lib/appContext";
import { RESET_GAME, TOGGLE_GAME, TOGGLE_MODAL } from "../lib/useAppReducer";
import useLoadPoints from "../lib/useLoadPoints";
import Modal from "../components/Modal";
import Btn from "../components/Btn";
import GameSelector from "../components/GameSelector";
import Picker from "../components/Picker";
import ScoreBoard from "../components/ScoreBoard";

export default function Home() {
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
  // load initial points
  useLoadPoints();
  return (
    <div className="flex flex-col">
      {!state.isGameSelected && (
        <GameSelector
          isGameSelected={state.isGameSelected}
          onSelectGame={toggleGame}
        />
      )}

      {state.isGameSelected && (
        <>
          <ScoreBoard
            isClassicGame={state.isClassicGame}
            points={
              state.isClassicGame
                ? state.pointsGameClassic
                : state.pointsGameBonus
            }
          />
          <Picker isClassicGame={state.isClassicGame} />
          <div className="flex flex-row justify-center space-x-5 pr-5 mb-10 desktop:justify-end">
            <Btn text="CHANGE GAME" onClick={resetGame} />
            <Btn text="RULES" onClick={toggleModal} />
          </div>
          <Modal
            isVisible={state.isRulesOpen}
            isClassicGame={state.isClassicGame}
            onCloseModal={toggleModal}
          />
        </>
      )}
    </div>
  );
}
