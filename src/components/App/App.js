import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import mainapi from "../../utils/MainApi";
import Home from "../Home/Home";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedNewsHome from "../SavedNewsHome/SavedNewsHome";

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const history = useHistory();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      mainapi.checkToken(jwt)
      .then((res) => {
        setLoggedIn(true);
        history.push(
          '/home'); 
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [ setLoggedIn, history])

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
