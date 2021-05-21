import { memo, useMemo } from "react";
import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../lib/utils";

const Token = ({ type, isSmall, onClick, className }) => {
  const size = isSmall ? "w-40 h-40" : "w-48 h-48";
  if (!type) return <div className={`${size} bg-emptyToken rounded-full`}/>
  return (
    <div className={`group ${size} ${className || ''}`}>
      <button
        type="button"
        className={`flex justify-center items-center rounded-full w-full h-full border-b-8 ${type.bg} ${type.border}`}
        onClick={onClick}
      >
        <div
          className={`flex justify-center items-center rounded-full w-[75%] h-[75%] bg-white border-HeaderOutline border-t-8 border-opacity-30`}
        >
          <img
            src={type.img}
            alt={type.name}
            className={`transition transform group-hover:scale-125`}
          />
        </div>
      </button>
    </div>
  );
};

export default memo(Token);
