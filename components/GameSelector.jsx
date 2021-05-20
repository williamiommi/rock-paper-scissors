import { memo } from "react";

const GameSelected = ({ onSelectGame }) => {
  return (
    <div className="flex flex-col mt-10">
      <h1 className="text-grayLight text-6xl">CHOOSE YOUR GAME</h1>
      <div className="flex justify-between items-center w-1/5 mx-auto mt-10">
        <GameBtn
          src="/images/logo.svg"
          alt="classic game"
          onSelectGame={() => onSelectGame(true)}
        />
        <GameBtn
          src="/images/logo-bonus.svg"
          alt="bonus game"
          onSelectGame={() => onSelectGame(false)}
        />
      </div>
    </div>
  );
};

const GameBtn = ({ src, alt, onSelectGame }) => (
  <button
    type="button"
    onClick={onSelectGame}
    className="group transition duration-500 border-4 border-grayLight border-opacity-40 rounded-md p-4 w-36 h-36 hover:border-opacity-100"
  >
    <img
      src={src}
      alt={alt}
      className="transition duration-500 opacity-75 group-hover:opacity-100"
    />
  </button>
);

export default memo(GameSelected);
