import { memo, useCallback, useContext } from "react";
import { AppContext } from "../lib/appContext";
import { TOGGLE_MODAL } from "../lib/useAppReducer";

const Modal = ({ isClassicGame, isRulesOpen, onCloseModal }) => {
  const wrapperClasses = isRulesOpen
    ? "opacity-100 visible"
    : "opacity-0 invisible";
  return (
    <div className={`fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-grayLight desktop:bg-opacity-10`}>
      <div className='relative flex justify-center items-center min-h-screen w-auto desktop:max-w-md desktop:mx-auto'>
        <Content
          isClassicGame={isClassicGame}
          onCloseModal={onCloseModal}
        />
      </div>
    </div>
  );
};

const Content = ({ isClassicGame, onCloseModal }) => (
  <div className="flex flex-col justify-center items-center p-2 z-20 bg-grayLight desktop:flex-row desktop:flex-wrap desktop:rounded-md desktop:p-10">
    <h3 className="font-body font-bold text-4xl text-DarkText desktop:w-11/12 desktop:text-left">
      RULES
    </h3>
    <section className="my-32 desktop:order-3 desktop:m-0 desktop:mt-5">
      <img
        src={`/images/image-rules${isClassicGame ? "" : "-bonus"}.svg`}
        alt={`${isClassicGame ? "classic" : "bonus"} rules`}
      />
    </section>
    <section className="desktop:w-1/12 desktop:flex desktop:justify-center desktop:items-center">
      <button type="button" title="close" onClick={onCloseModal}>
        <img src="/images/icon-close.svg" alt="close icon" />
      </button>
    </section>
  </div>
);

export default memo(Modal);
