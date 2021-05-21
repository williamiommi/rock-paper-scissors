import { memo } from "react";
import Token from "./Token";

const Results = ({ userPick, housePick }) => {
  return (
    <div className="flex flex-col mx-5 desktop:mx-auto desktop:w-full desktop:max-w-2xl">
      <div className='flex flex-row mx-auto w-full justify-between items-center mt-16 text-center order-2 desktop:order-1'>
        <h3 className="font-body text-white text-lg w-[336px] desktop:text-2xl">YOU PICKED</h3>
        <h3 className="font-body text-white text-lg w-[336px] desktop:text-2xl">THE HOUSE PICKED</h3>
      </div>
      <div className='flex flex-row mx-auto w-full justify-between items-center mt-16 text-center order-1 desktop:order-2'>
        <div className='w-[336px] flex justify-center transform scale-75 desktop:scale-100'>
          <Token type={userPick} />
        </div>
        <div className='w-[336px] flex justify-center transform scale-75 desktop:scale-100'>
          <Token type={housePick} />
        </div>
      </div>
    </div>
  );
};

export default memo(Results);
