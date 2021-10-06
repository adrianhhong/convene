import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/main/Main";
import "./App.less";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:roomId">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
