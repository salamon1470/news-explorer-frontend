import React from "react";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Header from "../Header/Header";
import Search from "../Search/Search";
function Main(props) {

  const currentUser = React.useContext(CurrentUserContext)

  function handleSearchSubmit(e) {
    e.preventDefault();
    const results = document.querySelector(".search-results");
    const preloader = document.querySelector(".preloader");
    const notFound = document.querySelector(".result-not-found");

    preloader.setAttribute("style", "display: block;");
    results.setAttribute("style", "display: none;");
      const timer = setTimeout(() => {
        preloader.setAttribute("style", "display: none;");
        notFound.setAttribute("style", "display: block;");
      }, 2000);
      if (preloader.hasAttributes("style", "display: block;")) {
        notFound.setAttribute("style", "display: none;")
      }
      return () => clearTimeout(timer);
  }


  

  return (
    <main className="main">
      <CurrentUserContext.Provider value={currentUser}>
        <Header headerLogoText={"NewsExplorer"} headerHomeLink={"/home"} headerHomeLinkClass={"header__home-link"} headerHomeLinkText={"Home"} headerSavedLink={"/saved-news"} headerSavedLinkClass={"header__saved-news-link"} headerSavedLinkText={"Saved Articles"} onSigninClick={props.onSigninClick} />
        <Search searchTitle={"What's going on in the world?"} searchSubtitle={"Find the latest news on any topic and save them in your personal account."} searchPlaceholder={"Enter topic"} searchButtonText={"Search"} onSearchSubmit={handleSearchSubmit} />
      </CurrentUserContext.Provider>
    </main>
  );
}

export default Main;
