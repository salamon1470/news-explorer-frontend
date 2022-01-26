import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MobileHeaderPopup from "../MobileHeaderPopup/MobileHeaderPopup";

function SavedNewsHeader(props) {
  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);
  const [isHomeRoute, setIsHomeRoute] = React.useState(false);
  const [isSavedRoute, setIsSavedRoute] = React.useState(false);
  
  function handleHeaderPopup() {
    setIsHeaderPopupOpen(true);
  }

  function closeHeaderPopup() {
    setIsHeaderPopupOpen(false);
  }

  useEffect(() => {
    const currentURL = window.location.href
    console.log(currentURL)
    if (currentURL === "http://localhost:3000/saved-news") {
      setIsSavedRoute(true);
      setIsHomeRoute(false);
    }
  })

  

  return (
    <header className="saved-news-header">
      <p className="saved-news-header__logo">{props.savedNewsLogoText}</p>
      <button className="saved-news-header__menu" onClick={handleHeaderPopup}/>
      <MobileHeaderPopup submitText={"Log out"} name="header" isOpen={isHeaderPopupOpen} headerLogoText={"NewsExplorer"} headerHomeLink={"/home"} headerHomeLinkClass={"popup-header__home-link"} headerHomeLinkText={"Home"} headerSavedLink={"/saved-news"} headerSavedLinkClass={"popup-header__saved-news-link"} headerSavedLinkText={"Saved Articles"} onClose={closeHeaderPopup} />
      <div className="saved-news-header__container">
        <Link to={props.savedNewsHomeLink} className={`saved-news-header__saved-news-link ${isHomeRoute ?  "saved-news-header__saved-news-link_selected":""}`}>
            {props.headerHomeLinkText}
        </Link>
        <Link to={props.savedNewsSavedLink} className={`saved-news-header__saved-news-link ${isSavedRoute ?  "saved-news-header__saved-news-link_selected":""}`}>
            {props.savedNewsSavedLinkText}
        </Link>
        <button
        aria-label=""
        type="button"
        className="saved-news-header__logout-button"
        >Elise </button>
      </div>
    </header>
  );
}

export default SavedNewsHeader;