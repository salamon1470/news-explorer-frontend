import React from "react";
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Header from "../Header/Header";
import Search from "../Search/Search";
function Main(props) {

  const currentUser = React.useContext(CurrentUserContext)




  

  return (
    <main className="main">
      <CurrentUserContext.Provider value={currentUser}>
        <Header onSignOutClick={props.onSignOutClick} loggedin={props.loggedin} headerLogoText={"NewsExplorer"} headerHomeLink={"/home"} headerHomeLinkText={"Home"} headerSavedLink={"/saved-news"} headerSavedLinkText={"Saved Articles"} onSigninClick={props.onSigninClick} />
        <Search searchTitle={"What's going on in the world?"} searchSubtitle={"Find the latest news on any topic and save them in your personal account."} searchPlaceholder={"Enter topic"} searchButtonText={"Search"} onSearchSubmit={props.onSearchSubmit} />
      </CurrentUserContext.Provider>
    </main>
  );
}

export default Main;
