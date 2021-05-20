import { useCallback, useContext } from "react";
import { AppContext } from "../lib/appContext";
import { TOGGLE_GAME, TOGGLE_MODAL } from "../lib/useAppReducer";
import useLoadPoints from "../lib/useLoadPoints";
import Modal from "../components/Modal";
import RulesBtn from "../components/RulesBtn";
import GameSelector from "../components/GameSelector";
import Picker from "../components/Picker";

import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../lib/utils";
import ScoreBoard from "../components/ScoreBoard";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
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
    <div className="flex flex-col pt-10">
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
          <RulesBtn onClick={toggleModal} />
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
