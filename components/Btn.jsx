import { memo, useCallback, useContext } from "react";
import { AppContext } from "../lib/appContext";
import { TOGGLE_MODAL } from "../lib/useAppReducer";

const Btn = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="py-2 px-10 border transition-all duration-500 border-grayLight rounded-md text-grayLight font-body text-lg hover:bg-grayLight hover:text-DarkText"
    >
      {text}
    </button>
  );
};

export default memo(Btn);
