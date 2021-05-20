import { memo, useEffect, useRef } from "react";

const Modal = ({ isClassicGame, isVisible, onCloseModal }) => {
  const wrapperClasses = isVisible
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";
  const contentClasses = isVisible
    ? "desktop:scale-100 desktop:translate-y-0"
    : "desktop:scale-95 desktop:-translate-y-5";
  const btnRef = useRef();
  useEffect(() => {
    if (isVisible) {
      btnRef.current.focus();
    }
  }, [isVisible]);
  return (
    <div
      data-testid="wrapper"
      className={`${wrapperClasses} fixed transition-opacity top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto bg-grayLight desktop:bg-opacity-10`}
    >
      <div className="relative flex justify-center items-center min-h-screen w-auto desktop:max-w-md desktop:mx-auto">
        <div
          data-testid="content"
          className={`${contentClasses} transform transition-transform flex flex-col justify-center items-center p-2 z-20 bg-grayLight desktop:flex-row desktop:flex-wrap desktop:rounded-md desktop:p-10`}
        >
          <h3 className="font-body font-bold text-4xl text-DarkText desktop:w-11/12 desktop:text-left">
            RULES
          </h3>
          <section className="my-32 desktop:order-3 desktop:m-0 desktop:mt-5">
            <img
              data-testid="image"
              src={`/images/image-rules${isClassicGame ? "" : "-bonus"}.svg`}
              alt={`${isClassicGame ? "classic" : "bonus"} rules`}
            />
          </section>
          <section className="desktop:w-1/12 desktop:flex desktop:justify-center desktop:items-center">
            <button
              ref={btnRef}
              type="button"
              title="close"
              onClick={onCloseModal}
            >
              <img src="/images/icon-close.svg" alt="close icon" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
