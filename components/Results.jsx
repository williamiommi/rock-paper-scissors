import { memo, useEffect, useState } from "react";
import { getHousePick, LOSE, play, TIE, WIN } from "../lib/utils";
import Token from "./Token";
import Btn from "./Btn";
import TokensWheel from "./TokensWheel";

const Results = ({ isClassicGame, userPick, handleWin, onPlayAgain }) => {
  const [housePick, setHousePick] = useState();
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (housePick) {
      const res = play(userPick, housePick, isClassicGame);
      setResult(res);
      if (res === WIN) handleWin();
    }
  }, [housePick]);

  return (
    <div
      className={`flex flex-row flex-wrap mx-5 mb-20 desktop:flex-nowrap desktop:mx-auto desktop:w-full ${
        result ? "desktop:max-w-5xl" : "desktop:max-w-2xl"
      }`}
    >
      <Column text="YOU PICKED">
        <Token type={userPick} isDisabled />
      </Column>
      <Column text="THE HOUSE PICKED" className="order-2 desktop:order-3">
        <TokensWheel
          isClassicGame={isClassicGame}
          handleHousePick={setHousePick}
        />
      </Column>
      <ResultAndRematch
        result={result}
        onClick={onPlayAgain}
        className="order-3 desktop:order-2 desktop:self-center"
      />
    </div>
  );
};

const Column = ({ text, children, className }) => {
  return (
    <div
      className={`flex flex-col mx-auto mt-10 w-1/2 justify-between items-center text-center desktop:mt-16 ${
        className || ""
      }`}
    >
      <h3 className="font-body text-white text-xl desktop:text-3xl desktop:mb-10">
        {text}
      </h3>
      <div className="flex justify-center items-center">
        <span className="transform scale-50 tablet:scale-75 desktop:scale-100">
          {children}
        </span>
      </div>
    </div>
  );
};

const ResultAndRematch = ({ result, className, onClick }) => {
  if (!result) return null;
  return (
    <div className={`flex flex-col w-full desktop:w-1/3 ${className || ""}`}>
      <h3 className="font-body text-white text-center text-6xl">
        {result === WIN && "YOU WIN"}
        {result === LOSE && "YOU LOSE"}
        {result === TIE && `IT'S A TIE`}
      </h3>
      <Btn
        text="PLAY AGAIN"
        className="w-60 mx-auto mt-10"
        onClick={onClick}
        isAlternative
      />
    </div>
  );
};

export default memo(Results);
