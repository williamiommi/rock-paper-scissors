import { memo, useEffect, useRef, useState } from "react";
import {
  ROCK,
  PAPER,
  SCISSORS,
  LIZARD,
  SPOCK,
  getHousePick,
  spinWheel,
  wheelTiming,
} from "../lib/utils";
import useTimeout from "../lib/useTimeout";
// import components
import Token from "./Token";

const TokensWheel = ({ isClassicGame, handleHousePick }) => {
  const wrapperRef = useRef();
  const [housePick] = useState(getHousePick(isClassicGame));
  useTimeout(() => {
    handleHousePick(housePick);
  }, 1000 * wheelTiming);
  useEffect(() => {
    spinWheel(wrapperRef.current, housePick);
  }, []);
  return (
    <div className="w-48 h-48 rounded-full relative overflow-hidden bg-emptyToken mx-auto">
      <div
        ref={wrapperRef}
        className="w-[576px] h-[576px] absolute transition-all -left-full"
      >
        <TokenWrapper type={ROCK} />
        <TokenWrapper type={PAPER} className="rotate-[60deg]" />
        <TokenWrapper type={SCISSORS} className="rotate-[120deg]" />
        {isClassicGame ? (
          <>
            <TokenWrapper type={ROCK} className="rotate-[180deg]" />
            <TokenWrapper type={PAPER} className="rotate-[240deg]" />
            <TokenWrapper type={SCISSORS} className="rotate-[300deg]" />
          </>
        ) : (
          <>
            <TokenWrapper type={LIZARD} className="rotate-[180deg]" />
            <TokenWrapper type={SPOCK} className="rotate-[240deg]" />
            <TokenWrapper type={SCISSORS} className="rotate-[300deg]" />
          </>
        )}
      </div>
    </div>
  );
};

const TokenWrapper = ({ type, className }) => {
  return (
    <div
      className={`w-[192px] h-[576px] absolute transform left-1/2 -translate-x-1/2 ${className}`}
    >
      <Token type={type} isDisabled />
    </div>
  );
};

export default memo(TokensWheel);
