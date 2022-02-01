import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import MobileHeaderPopup from "../MobileHeaderPopup/MobileHeaderPopup";

function SavedNewsHeader(props) {
  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);
  const [isHomeRoute, setIsHomeRoute] = React.useState(false);
  const [isSavedRoute, setIsSavedRoute] = React.useState(false);
  const history = useHistory();
  
  function handleHeaderPopup() {
    setIsHeaderPopupOpen(true);
  }

  function closeHeaderPopup() {
    setIsHeaderPopupOpen(false);
  }

  useEffect(() => {
    const currentURL = window.location.href
    if (currentURL === "http://localhost:3000/saved-news" || currentURL ==="https://www.finalnewssg.students.nomoreparties.sbs/saved-news" || currentURL ==="https://finalnewssg.students.nomoreparties.sbs/saved-news") {
      setIsSavedRoute(true);
      setIsHomeRoute(false);
    }
  }, [])

  const currentUser = React.useContext(CurrentUserContext)

  function refreshPage() {
    window.location.reload(false);
  }

  function signOut() {
    history.push(
      '/home');
    localStorage.removeItem('jwt');
    refreshPage();
  }
  

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
        onClick={() => {signOut()}}
        >{currentUser.name}</button>
      </div>
    </header>
  );
}

export default SavedNewsHeader;