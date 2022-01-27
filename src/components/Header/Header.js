import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import MobileHeaderPopup from "../MobileHeaderPopup/MobileHeaderPopup";

function Header(props) {
  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);
  const headerPopup = document.querySelector(".popup-header");
  const [isHomeRoute, setIsHomeRoute] = React.useState(false);
  const [isSavedRoute, setIsSavedRoute] = React.useState(false);
  
  function handleHeaderPopup() {
    setIsHeaderPopupOpen(true);
    if (!headerPopup.classList.contains("popup_visible")) {
      headerPopup.classList.add("popup_visible");
    }
  }

  function closeHeaderPopup() {
    setIsHeaderPopupOpen(false);
  }

  useEffect(() => {
    const currentURL = window.location.href
    console.log(currentURL)
    if (currentURL === "http://localhost:3000/home") {
      setIsSavedRoute(false);
      setIsHomeRoute(true);
    }
  })
  


  return (
    <header className="header">
      <p className="header__logo">{props.headerLogoText}</p>
      <button className="header__menu" onClick={handleHeaderPopup}/>
      <MobileHeaderPopup onSigninClick={props.onSigninClick} submitText={"Sign in"} name="header" isOpen={isHeaderPopupOpen} headerLogoText={"NewsExplorer"} headerHomeLink={"/home"} headerHomeLinkClass={"popup-header__home-link"} headerHomeLinkText={"Home"} headerSavedLink={"/saved-news"} headerSavedLinkClass={"popup-header__saved-news-link"} headerSavedLinkText={"Saved Articles"} onClose={closeHeaderPopup} />
      <nav className="header__container">
        <Link to={props.headerHomeLink} className={`header__home-link ${isHomeRoute ?  "header__home-link_selected":""}`}>
            {props.headerHomeLinkText}
        </Link>
        <Link to={props.headerSavedLink} className={`header__home-link ${isSavedRoute ?  "header__home-link_selected":""}`}>
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