import {type ReactNode, useEffect} from "react";
import "./Modal.css"

type Props = {
  children?: ReactNode;
  onClose: () => void;
}

const Modal = ({children, onClose}: Props) => {

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")
        onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <section className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </section>
  )
}

export default Modal;