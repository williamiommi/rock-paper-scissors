import { memo, useEffect, useState } from "react";
import { getHousePick, LOSE, play, TIE, WIN } from "../lib/utils";
import Token from "./Token";
import Btn from "./Btn";

const Results = ({ isClassicGame, userPick, handleWin, onPlayAgain }) => {
  const [housePick] = useState(getHousePick(isClassicGame));
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (housePick) {
      const res = play(userPick, housePick, isClassicGame);
      setResult(res);
      if (res === WIN) handleWin();
    }
  }, [housePick]);

  return (
    <div className={`flex flex-col mx-5 mb-20 desktop:mx-auto desktop:w-full ${result ? 'desktop:max-w-4xl' : 'desktop:max-w-2xl'}`}>
      <div className="flex flex-row mx-auto w-full justify-between items-center mt-10 text-center order-2 desktop:order-1">
        <h3 className="font-body text-white text-xl w-1/2 desktop:text-3xl">
          YOU PICKED
        </h3>
        <h3 className="font-body text-white text-xl w-1/2 desktop:text-3xl">
          THE HOUSE PICKED
        </h3>
      </div>
      <div className="flex flex-row justify-center items-center text-center mt-16 order-1 desktop:order-2">
        <div className="flex w-1/2 justify-center items-center">
          <span className="transform scale-50 tablet:scale-75 desktop:scale-100">
            <Token type={userPick} isDisabled />
          </span>
        </div>
        <ResultAndRematch result={result} className="hidden desktop:flex" onClick={onPlayAgain} />
        <div className="flex w-1/2 justify-center items-center">
          <span className="transform scale-50 tablet:scale-75 desktop:scale-100">
            <Token type={housePick} isDisabled />
          </span>
        </div>
      </div>
      <ResultAndRematch result={result} className="flex order-3 mt-14 desktop:hidden" onClick={onPlayAgain} />
    </div>
  );
};

const ResultAndRematch = ({ result, className, onClick }) => {
  if (!result) return null;
  return (
    <div className={`flex-col w-full desktop:w-1/3 ${className || ''}`}>
      <h3 className="font-body text-white text-center text-6xl">
        {result === WIN && 'YOU WIN'}
        {result === LOSE && 'YOU LOSE'}
        {result === TIE && `IT'S A TIE`}
      </h3>
      <Btn text="PLAY AGAIN" className='w-60 mx-auto mt-10' onClick={onClick} isAlternative />
    </div>
  );
};

export default memo(Results);
