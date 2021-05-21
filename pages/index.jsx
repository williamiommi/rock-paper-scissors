import { useContext } from "react";
import { AppContext } from "../lib/appContext";

// import hooks
import useLoadPoints from "../lib/useLoadPoints";
import useFunctions from "../lib/useFunctions";

// import components
import Modal from "../components/Modal";
import Btn from "../components/Btn";
import GameSelector from "../components/GameSelector";
import Picker from "../components/Picker";
import ScoreBoard from "../components/ScoreBoard";
import Results from "../components/Results";

export default function Home() {
  const { state } = useContext(AppContext);
  // load initial points
  useLoadPoints();
  // getFunctions
  const {
    resetGame,
    toggleModal,
    toggleGame,
    userPick,
    handleWin,
    resetPoints,
  } = useFunctions();
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
          {!state.userPick ? (
            <Picker isClassicGame={state.isClassicGame} onClick={userPick} />
          ) : (
            <Results
              isClassicGame={state.isClassicGame}
              userPick={state.userPick}
              handleWin={handleWin}
            />
          )}
          <div className="flex flex-col items-center justify-center space-y-5 w-52 mx-auto mb-10 desktop:w-auto desktop:flex-row desktop:justify-end desktop:space-y-0 desktop:space-x-5 desktop:pr-5 desktop:mx-0">
            <Btn text="CHANGE GAME" onClick={resetGame} />
            <Btn text="RESET POINTS" onClick={resetPoints} />
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
