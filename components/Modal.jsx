import { memo, useCallback, useContext } from "react";
import { AppContext } from "../lib/appContext";
import { TOGGLE_MODAL } from "../lib/useAppReducer";

const Modal = ({ isClassicGame, onCloseModal }) => {
  return (
    <div className="w-screen h-screen bg-grayLight flex flex-col justify-center items-center p-2 desktop:flex-row desktop:flex-wrap desktop:max-w-md desktop:h-auto desktop:rounded-md desktop:p-10">
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
};

export default memo(Modal);

{
  /* <div className="fixed flex items-center justify-center inset-0 bg-grayLight bg-opacity-40 opacity-0">
      <div className="flex flex-col justify-center items-center bg-grayLight absolute w-screen h-screen desktop:flex-row desktop:flex-wrap desktop:pt-7 desktop:px-3 desktop:rounded-md desktop:w-1/4 desktop:h-auto">
        <h3 className="font-body text-DarkText font-bold text-3xl desktop:text-left desktop:w-11/12">
          RULES
        </h3>
        <div className="w-full flex items-center justify-center my-10 desktop:order-3 desktop:w-full">
          <img
            src={`/images/image-rules${isClassicGame ? "-bonus" : ""}.svg`}
            alt={`${isClassicGame ? "classic" : "bbonus"} rules`}
          />
        </div>
        <button type="button" title="close" onClick={closeModal}>
          <img src="/images/icon-close.svg" alt="close icon" />
        </button>
      </div>
    </div> */
}
