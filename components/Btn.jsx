import { memo, useCallback, useContext } from "react";
import { AppContext } from "../lib/appContext";
import { TOGGLE_MODAL } from "../lib/useAppReducer";

const Btn = ({ text, className, onClick, isAlternative }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`py-2 px-10 border transition-colors duration-500 border-grayLight rounded-md font-body text-lg ${className} ${isAlternative ? 'text-DarkText bg-grayLight hover:bg-transparent hover:text-grayLight' : 'text-grayLight hover:bg-grayLight hover:text-DarkText'}`}
    >
      {text}
    </button>
  );
};

export default memo(Btn);
