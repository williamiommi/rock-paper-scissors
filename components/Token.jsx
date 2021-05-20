import { memo, useMemo } from "react";
import { LIZARD, PAPER, ROCK, SCISSORS, SPOCK } from "../lib/utils";

const Token = ({ type, isSmall, onClick }) => {
  const size = isSmall ? "w-36 h-36" : "w-48 h-48";
  return (
    <div className={`group ${size}`}>
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