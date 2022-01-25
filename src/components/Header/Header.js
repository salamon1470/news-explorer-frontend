import React from "react";
import { Link } from "react-router-dom";
import MobileHeaderPopup from "../MobileHeaderPopup/MobileHeaderPopup";

function Header(props) {
  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);
  const headerPopup = document.querySelector(".popup-header");
  
  function handleHeaderPopup() {
    setIsHeaderPopupOpen(true);
    if (!headerPopup.classList.contains("popup_visible")) {
      headerPopup.classList.add("popup_visible");
    }
  }

  function closeHeaderPopup() {
    setIsHeaderPopupOpen(false);
  }

  return (
    <header className="header">
      <p className="header__logo">{props.headerLogoText}</p>
      <button className="header__menu" onClick={handleHeaderPopup}/>
      <MobileHeaderPopup onSigninClick={props.onSigninClick} submitText={"Sign in"} name="header" isOpen={isHeaderPopupOpen} headerLogoText={"NewsExplorer"} headerHomeLink={"/home"} headerHomeLinkClass={"popup-header__home-link"} headerHomeLinkText={"Home"} headerSavedLink={"/saved-news"} headerSavedLinkClass={"popup-header__saved-news-link"} headerSavedLinkText={"Saved Articles"} onClose={closeHeaderPopup} />
      <nav className="header__container">
        <Link to={props.headerHomeLink} className={props.headerHomeLinkClass}>
            {props.headerHomeLinkText}
        </Link>
        <Link to={props.headerSavedLink} className={props.headerSavedLinkClass}>
            {props.headerSavedLinkText}
        </Link>
        <button
        aria-label=""
        type="button"
        className="header__signin-button"
        onClick={props.onSigninClick}
        >Sign in</button>
      </nav> 
    </header>
  );
}

export default Header;