import React from "react";
import Home from "./components/screens/Home";
import About from "./components/screens/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <main>
        <Route
          exact
          path="/"
          render={() => {
            return <Home onEnter={window.scrollTo(0, 0)} />;
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return <About onEnter={window.scrollTo(0, 0)} />;
          }}
        />
      </main>
    </div>
  </Router>
);

export default App;
