import { useEffect } from "react";

function PopupWithForm({ onSubmit, isOpen, onClose, ...props }) {

  function handleOverlayClose(e) {
    if (e.target.classList.contains("popup_visible")) {
        onClose();
    }
  }


useEffect(() => {
  const close = (e) => {
    if (e.key === "Escape") {
      onClose();
    }
  }
  window.addEventListener('keydown', close)
  return () => window.removeEventListener('keydown', close)
},[onClose])



  return (
    <section
      className={`popup popup-${props.name} ${isOpen ? "popup_visible" : ""}`} onClick={handleOverlayClose}
    >
      <div className={`popup__container popup-${props.name}__container`}>
        <form
          className={`popup__form popup-${props.name}__form`}
          name={`form-${props.name}`}
          id={`form-${props.name}`}
          onSubmit={onSubmit}
        >
          <button
            aria-label=""
            type="button"
            className={props.closeButtonClass}
            onClick={onClose}
          ></button>

          <h2 className={props.titleClass}>{props.title}</h2>
          {props.children}
          <button
            aria-label=""
            id={props.name}
            type="submit"
            className= {props.buttonClass}
            >
              {props.buttonText}
            </button>
            <p className={props.entryClass}>
              or
              <button type="button" className={`popup-${props.linkClass}`} onClick={props.onClick}>
                {props.linkText}
              </button>
            </p>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
