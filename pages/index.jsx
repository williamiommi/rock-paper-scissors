import { useCallback, useContext } from "react";
import { AppContext } from "../lib/appContext";
import { TOGGLE_GAME, TOGGLE_MODAL } from "../lib/useAppReducer";
import Modal from "../components/Modal";
import RulesBtn from "../components/RulesBtn";
import useLoadPoints from "../lib/useLoadPoints";

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
      rock paper scissors
      <RulesBtn onClick={toggleModal} />
      <Modal
        isVisible={state.isRulesOpen}
        isClassicGame={state.isClassicGame}
        onCloseModal={toggleModal}
      />
    </div>
  );
}
