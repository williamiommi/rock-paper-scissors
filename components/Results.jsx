import { memo } from "react";
import Token from "./Token";

const Results = ({ userPick, housePick }) => {
  return (
    <div className="flex flex-col mx-5 mb-20 desktop:mx-auto desktop:w-full desktop:max-w-2xl">
      <div className='flex flex-row mx-auto w-full justify-between items-center mt-16 text-center order-2 desktop:order-1'>
        <h3 className="font-body text-white text-xl w-1/2 desktop:text-3xl">YOU PICKED</h3>
        <h3 className="font-body text-white text-xl w-1/2 desktop:text-3xl">THE HOUSE PICKED</h3>
      </div>
      <div className='flex flex-row justify-center items-center text-center order-1 desktop:order-2'>
        <div className='transform scale-50'>
          <Token type={userPick} />
        </div>
        <div className='transform scale-50'>
          <Token type={housePick} />
        </div>
      </div>
    </div>
  );
};

export default memo(Results);
