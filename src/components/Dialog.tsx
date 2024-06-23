import { XMarkIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../utils/classNames";

const Dialog = ({ children, show, hide, icon = true }: any) => {
  const cancelPropagation = (e: React.MouseEvent<HTMLElement>) =>
    e.stopPropagation();

  return (
    <div
      className={classNames(
        show ? "opacity-100" : "opacity-0 pointer-events-none",
        "fixed bg-[#00000028] inset-0 p-6 z-50 transition-all duration-200 grid place-items-center overflow-hidden"
      )}
      onMouseDown={() => hide()}
    >
      <div
        className="bg-[#f8f8f8] rounded-lg p-8 relative"
        onMouseDown={cancelPropagation}
      >
        <XMarkIcon
          width={35}
          className={classNames(
            "absolute top-8 right-8 cursor-pointer z-10",
            !icon ? "hidden" : ""
          )}
          color="#2b2b2b"
          onClick={hide}
        />
        {children}
      </div>
    </div>
  );
};

export default Dialog;
