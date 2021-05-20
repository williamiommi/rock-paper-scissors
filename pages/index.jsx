import { useCallback, useContext } from "react";
import Modal from "../components/Modal";
import { AppContext } from "../lib/appContext";
import { TOGGLE_GAME, TOGGLE_MODAL } from "../lib/useAppReducer";

export default function Home() {
  const { state, dispatch } = useContext(AppContext);
  const toggleModal = useCallback(() => dispatch(TOGGLE_MODAL), [dispatch]);
  return (
    <div className="text-center">
      rock paper scissors
      <button type="button" onClick={toggleModal}>
        Open Modal
      </button>
      <Modal isClassicGame={state.isClassicGame} onCloseModal={toggleModal} />
    </div>
  );
}
