import { memo } from "react";
import { getHousePick } from "../lib/utils";
import Token from "./Token";

const Results = ({ isClassicGame, userPick }) => {
  return (
    <div className="flex flex-col mx-5 mb-20 desktop:mx-auto desktop:w-full desktop:max-w-2xl">
      <div className="flex flex-row mx-auto w-full justify-between items-center mt-16 text-center order-2 desktop:order-1">
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
            <Token type={userPick} />
          </span>
        </div>
        <div className="flex w-1/2 justify-center items-center">
          <span className="transform scale-50 tablet:scale-75 desktop:scale-100">
            <Token type={getHousePick(isClassicGame)} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Results);
