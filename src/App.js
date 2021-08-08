import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase";

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/homepage">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/details/:link/:link2">
            <Header />
            <Details />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
