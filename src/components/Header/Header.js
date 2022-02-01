import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MobileHeaderPopup from "../MobileHeaderPopup/MobileHeaderPopup";

function Header(props) {

  const [isHomeRoute, setIsHomeRoute] = React.useState(false);
  const [isSavedRoute, setIsSavedRoute] = React.useState(false);
  

  useEffect(() => {
    const currentURL = window.location.href
    if (currentURL === "http://localhost:3000/home" || currentURL === "http://localhost:3000/" || currentURL ==="https://www.finalnewssg.students.nomoreparties.sbs/home" || currentURL ==="https://finalnewssg.students.nomoreparties.sbs/home" || currentURL ==="https://www.finalnewssg.students.nomoreparties.sbs/" || currentURL ==="https://finalnewssg.students.nomoreparties.sbs/") {
      setIsSavedRoute(false);
      setIsHomeRoute(true);
    }
  }, [])

  const currentUser = React.useContext(CurrentUserContext)

  function handleEntry() {
    if (props.loggedin) {
      props.onSignOutClick();
    }
    props.onSigninClick();
  }
  

  return (
    <header className="header">
      <p className="header__logo">{props.headerLogoText}</p>
      <button className="header__menu" onClick={props.onMenuClick}/>
      <MobileHeaderPopup onSigninClick={props.onSigninClick} submitText={"Sign in"} name="header" isOpen={props.isOpen} headerLogoText={"NewsExplorer"} headerHomeLink={"/home"} headerHomeLinkClass={"popup-header__home-link"} headerHomeLinkText={"Home"} headerSavedLink={"/saved-news"} headerSavedLinkClass={"popup-header__saved-news-link"} headerSavedLinkText={"Saved Articles"} onClose={props.onClose} />
      <nav className="header__container">
        <Link to={props.headerHomeLink} className={`header__home-link ${isHomeRoute ?  "header__home-link_selected":""}`}>
            {props.headerHomeLinkText}
        </Link>
        <Link to={props.headerSavedLink} className={`${props.loggedin ? `header__home-link ${isSavedRoute ? "header__home-link_selected":""}` : "header__home-link_hide" }`}>
            {props.headerSavedLinkText}
        </Link>
        <button
        aria-label=""
        type="button"
        className={`header__signin-button ${props.loggedin ? "header__signin-button_logged-in" : ""}`}
        onClick={handleEntry}
        >{`${props.loggedin ? currentUser.name : "Sign in"} `}</button>
      </nav> 
    </header>
  );
}

export default Header;