import { memo } from "react";
import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../lib/utils";
import Token from "./Token";

const commonCss =
  "absolute transform transition-all duration-500 z-10 scale-75 tablet:scale-90 desktop:scale-100";
const Picker = ({ isClassicGame }) => {
  return <>{isClassicGame ? <Classic /> : <Bonus />}</>;
};

const Classic = () => (
  <div className="w-[305px] h-[277px] mx-auto relative my-20 tablet:my-32 desktop:my-40 transform transition-all duration-500 scale-75 tablet:scale-90 desktop:scale-100">
    <img
      src="/images/bg-triangle.svg"
      alt="triangle"
      className="absolute transform z-10 left-1/2 -translate-x-1/2"
    />
    <Token type={PAPER} className={`${commonCss} top-[-90px] left-[-85px]`} />
    <Token
      type={SCISSORS}
      className={`${commonCss} top-[-90px] right-[-85px]`}
    />
    <Token
      type={ROCK}
      className={`${commonCss} bottom-[-80px] left-1/2 -translate-x-1/2`}
    />
  </div>
);

const Bonus = () => (
  <div className="w-[329px] h-[313px]  mx-auto relative my-20 tablet:my-32 desktop:my-40 transform transition-all duration-500 scale-75 tablet:scale-90 desktop:scale-100">
    <img
      src="/images/bg-pentagon.svg"
      alt="triangle"
      className="absolute transform z-10 left-1/2 -translate-x-1/2"
    />
    <Token
      isSmall
      type={SCISSORS}
      className={`${commonCss} top-[-90px] left-1/2 -translate-x-1/2`}
    />
    <Token
      isSmall
      type={PAPER}
      className={`${commonCss} top-[50px] right-[-85px]`}
    />
    <Token
      isSmall
      type={SPOCK}
      className={`${commonCss} top-[50px] left-[-85px]`}
    />
    <Token
      isSmall
      type={LIZARD}
      className={`${commonCss} bottom-[-80px] left-[-15px]`}
    />
    <Token
      isSmall
      type={ROCK}
      className={`${commonCss} bottom-[-80px] right-[-15px]`}
    />
  </div>
);

export default memo(Picker);
