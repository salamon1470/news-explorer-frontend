import { useEffect } from "react";
import { Link } from "react-router-dom";

function MobileHeaderPopup({ isOpen, onClose, ...props} ) {

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
      <div className="popup-header__head">
        <p className="popup-header__logo">{props.headerLogoText}</p>
        <button
            aria-label=""
            type="button"
            className="popup-header__close-btn"
            onClick={onClose}
        ></button>
        </div>
        <div className="popup-header__container">
            <Link to={props.headerHomeLink} className={props.headerHomeLinkClass}>
                {props.headerHomeLinkText}
            </Link>
            <Link to={props.headerSavedLink} className={props.headerSavedLinkClass}>
                {props.headerSavedLinkText}
            </Link>
            <button
            aria-label=""
            type="button"
            className="popup-header__signin-button"
            onClick={props.onSigninClick}
            >{props.submitText} </button>
        </div> 
    </div>
    </section>
  );
}
export default MobileHeaderPopup;
