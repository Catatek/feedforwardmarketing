import React from "react";
import Home from "./components/screens/Home";
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
      </main>
    </div>
  </Router>
);

export default App;
