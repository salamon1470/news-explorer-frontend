import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedNewsHome from "../SavedNewsHome/SavedNewsHome";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Switch>
      <ProtectedRoute path="/saved-news" loggedIn={loggedIn} component={SavedNewsHome}>
        <SavedNewsHome setLoggedIn={setLoggedIn}/>
      </ProtectedRoute>
      <Route path="/">
        <Home setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
      </Route>
    </Switch>
  );
}

export default App;
