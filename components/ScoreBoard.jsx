import { memo } from "react";

const ScoreBoard = ({ isClassicGame, points }) => {
  return (
    <div
      data-testid="wrapper"
      className="flex flex-row items-center justify-between border-4 border-grayLight border-opacity-40 rounded-md p-4 mx-5 desktop:max-w-2xl desktop:mx-auto"
    >
      <section>
        <img
          data-testid="image"
          className="max-w-full"
          src={`/images/logo${isClassicGame ? "" : "-bonus"}.svg`}
          alt={`${isClassicGame ? "classic" : "bonus"} logo`}
        />
      </section>
      <section
        data-testid="score"
        className="flex flex-col justify-between pb-5 ml-2 bg-grayLight rounded-md w-40 min-w-min self-stretch p-1"
      >
        <span className="font-body text-lg text-ScoreText">SCORE</span>
        <span className="font-body text-5xl text-DarkText desktop:text-6xl">
          {points > 999 ? "999+" : points}
        </span>
      </section>
    </div>
  );
};

export default memo(ScoreBoard);
