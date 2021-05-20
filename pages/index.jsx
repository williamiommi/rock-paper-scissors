import { useCallback, useContext } from "react";
import { AppContext } from "../lib/appContext";
import { TOGGLE_GAME, TOGGLE_MODAL } from "../lib/useAppReducer";
import useLoadPoints from "../lib/useLoadPoints";
import Modal from "../components/Modal";
import RulesBtn from "../components/RulesBtn";
import Token from "../components/Token";

import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../lib/utils";
import ScoreBoard from "../components/ScoreBoard";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  const toggleModal = useCallback(
    () => dispatch({ type: TOGGLE_MODAL }),
    [dispatch]
  );
  // load initial points
  useLoadPoints();
  return (
    <div className="text-center">
      <ScoreBoard
        isClassicGame={!state.isClassicGame}
        points={
          state.isClassicGame ? state.pointsGameClassic : state.pointsGameBonus
        }
      />
      rock paper scissors
      <RulesBtn onClick={toggleModal} />
      <Token type={ROCK} />
      <br />
      <br />
      <Token type={PAPER} />
      <br />
      <br />
      <Token type={SCISSORS} />
      <br />
      <br />
      <Token type={LIZARD} />
      <br />
      <br />
      <Token type={SPOCK} />
      <Modal
        isVisible={state.isRulesOpen}
        isClassicGame={state.isClassicGame}
        onCloseModal={toggleModal}
      />
    </div>
  );
}
