import { memo, useEffect, useRef, useState } from "react";
import {
  getHousePick,
  spinWheel,
  wheelTiming,
  ROCK_PAPER_SCISSORS_WHEEL,
  ROCK_PAPER_SCISSORS_LIZARD_SPOCK_WHEEL,
} from "../lib/utils";
import useTimeout from "../lib/useTimeout";
// import components
import Token from "./Token";

const TokensWheel = ({ isClassicGame, handleHousePick }) => {
  const wrapperRef = useRef();
  const [wheel] = useState(
    isClassicGame ? ROCK_PAPER_SCISSORS_WHEEL : ROCK_PAPER_SCISSORS_LIZARD_SPOCK_WHEEL
  );
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
        {wheel.map((item, index) => (
          <div
            className={`w-[192px] h-[576px] absolute transform left-1/2 -translate-x-1/2 rotate-[${index * 60}deg]`}
          >
            <Token type={item} isDisabled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(TokensWheel);
