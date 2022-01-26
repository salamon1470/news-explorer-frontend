import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import SavedNews from "../SavedNews/SavedNews";
import SavedNewsCards from "../SavedNewsCards/SavedNewsCards";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function App() {
  return (
    <Switch>
      <Route path="/saved-news">
        <SavedNewsHeader
          savedNewsLogoText={"NewsExplorer"}
          savedNewsHomeLink={"/home"}
          headerHomeLinkText={"Home"}
          savedNewsSavedLink={"/saved-news"}
          savedNewsSavedLinkText={"Saved Articles"}
        />
        <SavedNews />
        <SavedNewsCards />
        <Footer
          footerNavbarHomeLink={"Home"}
          footerNavbarPracticumLink={"Practicum by Yandex"}
        />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
