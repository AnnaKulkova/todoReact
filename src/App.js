import React from "react";
import Container from "./components/Container/index";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { addJWT } from "./actions";
import PropTypes from "prop-types";
import "./App.css";

function App() {
    const dispatcher = useDispatch();
    const localJWT = localStorage.getItem("jwt");
    const localID = localStorage.getItem("id");
    if (localJWT) {
        dispatcher(addJWT(Number(localID), localJWT));
    }
    const userJWT = useSelector(state => state.user.jwt);
    const PrivateRoute = ({component: Component, redirectURL, condition, ...rest}) => (
        <Route
            {...rest}
            render = {(props) => condition ? (
            <Component />
        ) : (
            <Redirect
                to = {{
                    pathname: redirectURL,
                    state: { from: props.location}
                }}
            />
        )}
        />
    );

    PrivateRoute.propTypes = {
        component: PropTypes.func.isRequired,
        redirectURL: PropTypes.string.isRequired,
        condition: PropTypes.bool.isRequired
    };

  return (
      <div className="App">
          <Router>
              <Switch>
                  <PrivateRoute path="/login"
                                component={ Login }
                                condition={ !userJWT }
                                redirectURL={"/"}
                  />
                  <PrivateRoute component={ Registration }
                                redirectURL={"/"}
                                condition={ !userJWT }
                                path="/register"
                  />
                  <PrivateRoute path="/"
                                component={ Container }
                                condition={ !!userJWT }
                                redirectURL={ "/login" }
                  />
              </Switch>
          </Router>
      </div>
  );
}

export default App;